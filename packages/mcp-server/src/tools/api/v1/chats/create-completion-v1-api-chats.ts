// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.chats',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/chat/completions/{agent_id}',
  operationId: 'agent_chat_completions_api_v1_chat_completions__agent_id__post',
};

export const tool: Tool = {
  name: 'create_completion_v1_api_chats',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n基于Agent ID的OpenAI风格聊天接口\n如果用户还没有和该Agent创建会话，则自动创建\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/api_response_dict',\n  $defs: {\n    api_response_dict: {\n      type: 'object',\n      title: 'APIResponse[dict]',\n      properties: {\n        code: {\n          type: 'integer',\n          title: 'Code'\n        },\n        data: {\n          type: 'object',\n          title: 'Data',\n          additionalProperties: true\n        },\n        message: {\n          type: 'string',\n          title: 'Message'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
      messages: {
        type: 'array',
        title: 'Messages',
        items: {
          type: 'object',
          title: 'ChatMessage',
          properties: {
            content: {
              type: 'string',
              title: 'Content',
            },
            role: {
              type: 'string',
              title: 'Role',
            },
          },
          required: ['content', 'role'],
        },
      },
      language: {
        type: 'string',
        title: 'Language',
      },
      model: {
        type: 'string',
        title: 'Model',
      },
      stream: {
        type: 'boolean',
        title: 'Stream',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['agent_id', 'messages'],
  },
  annotations: {},
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { agent_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.api.v1.chats.createCompletion(agent_id, body)),
  );
};

export default { metadata, tool, handler };
