// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.chats.agents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/chats/agents/{agent_id}/settings',
  operationId: 'get_agent_chat_settings_api_v1_chats_agents__agent_id__settings_get',
};

export const tool: Tool = {
  name: 'get_settings_chats_v1_api_agents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet chat settings by Agent ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/chat_settings',\n  $defs: {\n    chat_settings: {\n      type: 'object',\n      title: 'ChatSettings',\n      description: '聊天设置',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        agent_id: {\n          type: 'string',\n          title: 'Agent Id'\n        },\n        chat_id: {\n          type: 'string',\n          title: 'Chat Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string',\n          title: 'User Id'\n        },\n        language: {\n          type: 'string',\n          title: 'Language'\n        },\n        premium_mode: {\n          type: 'boolean',\n          title: 'Premium Mode'\n        },\n        style_prompt: {\n          type: 'string',\n          title: 'Style Prompt'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        voice_enabled: {\n          type: 'boolean',\n          title: 'Voice Enabled'\n        }\n      },\n      required: [        'id',\n        'agent_id',\n        'chat_id',\n        'created_at',\n        'user_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['agent_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { agent_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.api.v1.chats.agents.getSettings(agent_id)),
  );
};

export default { metadata, tool, handler };
