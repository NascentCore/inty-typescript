// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.settings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/settings/',
  operationId: 'get_settings_endpoint_api_v1_settings__get',
};

export const tool: Tool = {
  name: 'retrieve_v1_api_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet current user settings\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/settings',\n  $defs: {\n    settings: {\n      type: 'object',\n      title: 'Settings',\n      description: 'API 响应中的设置',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string',\n          title: 'User Id'\n        },\n        language: {\n          type: 'string',\n          title: 'Language'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        voice_enabled: {\n          type: 'boolean',\n          title: 'Voice Enabled'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'user_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.api.v1.settings.retrieve()));
};

export default { metadata, tool, handler };
