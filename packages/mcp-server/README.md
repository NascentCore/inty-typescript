# Inty TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:NascentCore/inty-typescript.git
cd inty-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export INTY_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y inty-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "inty_api": {
      "command": "node",
      "args": ["/path/to/local/inty-typescript/packages/mcp-server", "--client=claude", "--tools=all"],
      "env": {
        "INTY_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ---------------- | ------------------------ | --------------- |
| `x-inty-api-key` | `apiKey` | Bearer |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "inty_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "inty-mcp/server";

// import a specific tool
import healthCheckClient from "inty-mcp/tools/top-level/health-check-client";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [healthCheckClient, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `$client`:

- `health_check_client` (`read`): 健康检查接口

### Resource `api.v1`:

- `list_notifications_api_v1` (`read`): 分页查询用户的消息列表；返回用户收到的通知。
- `upload_image_api_v1` (`write`): Upload image file with validation, compression, and GCS storage

### Resource `api.v1.auth`:

- `create_guest_v1_api_auth` (`write`): 创建游客账号

### Resource `api.v1.auth.google`:

- `login_auth_v1_api_google` (`write`): Google 登录

### Resource `api.v1.users`:

- `delete_account_v1_api_users` (`write`): 删除用户账户

### Resource `api.v1.users.profile`:

- `retrieve_users_v1_api_profile` (`read`): Get current user profile.
- `update_users_v1_api_profile` (`write`): Update current user profile.

### Resource `api.v1.users.device`:

- `register_users_v1_api_device` (`write`): 注册或更新设备 token

### Resource `api.v1.users.deletion`:

- `check_eligibility_users_v1_api_deletion` (`read`): 检查用户是否可以删除账户

### Resource `api.v1.report`:

- `create_v1_api_report` (`write`): Submit report
- `upload_image_v1_api_report` (`write`): Used by app to upload image in their report of app content: AI characters, images, etc.

### Resource `api.v1.ai.agents`:

- `create_ai_v1_api_agents` (`write`): Create new AI agent, used by app and inty-eval
- `retrieve_ai_v1_api_agents` (`read`): Get public agent by ID, include pre-generated agents and user-created public agents
- `update_ai_v1_api_agents` (`write`): Update AI agent
- `list_ai_v1_api_agents` (`read`): This endpoint is used by an registered user to list their created AI characters (agents as a misnomer)
- `delete_ai_v1_api_agents` (`write`): Delete AI agent
- `follow_agent_ai_v1_api_agents` (`write`): Follow AI agent
- `following_ai_v1_api_agents` (`read`): Get current user's followed AI agents list
- `recommend_ai_v1_api_agents` (`read`): Get recommended AI agents list (public and approved agents)

  Sorting options:

  - created_desc: Most recent first (default)
  - created_asc: Oldest first
  - random: Random order

- `search_ai_v1_api_agents` (`read`): Search public AI agents
  Support fuzzy search by name, description, category
- `unfollow_agent_ai_v1_api_agents` (`write`): Unfollow AI agent

### Resource `api.v1.settings`:

- `retrieve_v1_api_settings` (`read`): Get current user settings
- `update_v1_api_settings` (`write`): Update current user settings

### Resource `api.v1.subscription`:

- `get_status_v1_api_subscription` (`read`): 获取用户订阅状态
- `get_usage_v1_api_subscription` (`read`): 获取用户使用统计
- `list_plans_v1_api_subscription` (`read`): 现有订阅计划、用户订阅的内容、以及其他与用户订阅状态相关的信息
- `verify_v1_api_subscription` (`write`): Used by app to prove user has purchased a subscription
- `webhook_v1_api_subscription` (`write`): Google Play Developer Notifications webhook
  处理订阅状态变化通知

### Resource `api.v1.subscription.admin`:

- `process_refund_subscription_v1_api_admin` (`write`): 手动处理退款（管理员接口）

### Resource `api.v1.subscription.admin.plans`:

- `create_admin_subscription_v1_api_plans` (`write`): 创建订阅计划（管理员接口）
- `list_admin_subscription_v1_api_plans` (`read`): 获取所有订阅计划（管理员接口）

### Resource `api.v1.subscription.admin.users`:

- `get_subscription_status_admin_subscription_v1_api_users` (`read`): 获取指定用户的订阅状态（管理员接口）
- `get_usage_statistics_admin_subscription_v1_api_users` (`read`): 获取指定用户的使用统计（管理员接口）

### Resource `api.v1.version`:

- `check_v1_api_version` (`write`): 检查应用版本更新

  通过 HTTP 头传递版本信息：

  - appVersionCode: 应用版本代码（必填，整数）
  - appVersionName: 应用版本名称（可选，字符串）

### Resource `api.v1.chats`:

- `create_v1_api_chats` (`write`): Create new chat
- `list_v1_api_chats` (`read`): Get current user's chat list
- `delete_v1_api_chats` (`write`): Delete chat
- `create_completion_v1_api_chats` (`write`): 基于 Agent ID 的 OpenAI 风格聊天接口
  如果用户还没有和该 Agent 创建会话，则自动创建

### Resource `api.v1.chats.agents`:

- `get_messages_chats_v1_api_agents` (`read`): Get only chat message records by Agent ID (lighter interface)
- `get_settings_chats_v1_api_agents` (`read`): Get chat settings by Agent ID
