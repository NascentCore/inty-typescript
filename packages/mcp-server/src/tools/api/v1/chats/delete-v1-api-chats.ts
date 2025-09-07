// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.chats',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v1/chats/{chat_id}',
  operationId: 'delete_chat_api_v1_chats__chat_id__delete',
};

export const tool: Tool = {
  name: 'delete_v1_api_chats',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete chat\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/chat',\n  $defs: {\n    chat: {\n      type: 'object',\n      title: 'Chat',\n      description: '聊天',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        agent_id: {\n          type: 'string',\n          title: 'Agent Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string',\n          title: 'User Id'\n        },\n        agent_avatar: {\n          type: 'string',\n          title: 'Agent Avatar'\n        },\n        agent_is_deleted: {\n          type: 'boolean',\n          title: 'Agent Is Deleted'\n        },\n        agent_name: {\n          type: 'string',\n          title: 'Agent Name'\n        },\n        last_message: {\n          type: 'string',\n          title: 'Last Message'\n        },\n        last_message_time: {\n          type: 'string',\n          title: 'Last Message Time',\n          format: 'date-time'\n        },\n        settings: {\n          $ref: '#/$defs/chat_settings'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'agent_id',\n        'created_at',\n        'user_id'\n      ]\n    },\n    chat_settings: {\n      type: 'object',\n      title: 'ChatSettings',\n      description: '聊天设置',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        agent_id: {\n          type: 'string',\n          title: 'Agent Id'\n        },\n        chat_id: {\n          type: 'string',\n          title: 'Chat Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string',\n          title: 'User Id'\n        },\n        language: {\n          type: 'string',\n          title: 'Language'\n        },\n        premium_mode: {\n          type: 'boolean',\n          title: 'Premium Mode'\n        },\n        style_prompt: {\n          type: 'string',\n          title: 'Style Prompt'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        voice_enabled: {\n          type: 'boolean',\n          title: 'Voice Enabled'\n        }\n      },\n      required: [        'id',\n        'agent_id',\n        'chat_id',\n        'created_at',\n        'user_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      chat_id: {
        type: 'string',
        title: 'Chat Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['chat_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { chat_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.api.v1.chats.delete(chat_id)));
};

export default { metadata, tool, handler };
