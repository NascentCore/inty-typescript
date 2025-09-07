// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.auth',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/auth/guest',
  operationId: 'create_guest_api_v1_auth_guest_post',
};

export const tool: Tool = {
  name: 'create_guest_v1_api_auth',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n创建游客账号\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'APIResponse[GuestResponse]',\n  properties: {\n    code: {\n      type: 'integer',\n      title: 'Code'\n    },\n    data: {\n      type: 'object',\n      title: 'GuestResponse',\n      description: '游客响应',\n      properties: {\n        token: {\n          type: 'string',\n          title: 'Token'\n        },\n        guest_id: {\n          type: 'string',\n          title: 'Guest Id'\n        },\n        is_new_guest: {\n          type: 'boolean',\n          title: 'Is New Guest'\n        }\n      },\n      required: [        'token',\n        'guest_id',\n        'is_new_guest'\n      ]\n    },\n    message: {\n      type: 'string',\n      title: 'Message'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      age_group: {
        type: 'string',
        title: 'Age Group',
      },
      device_id: {
        type: 'string',
        title: 'Device Id',
      },
      system_language: {
        type: 'string',
        title: 'System Language',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.api.v1.auth.createGuest(body)));
};

export default { metadata, tool, handler };
