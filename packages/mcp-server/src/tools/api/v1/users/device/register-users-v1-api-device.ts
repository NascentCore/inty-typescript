// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.users.device',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/users/device/register',
  operationId: 'register_device_token_api_v1_users_device_register_post',
};

export const tool: Tool = {
  name: 'register_users_v1_api_device',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n注册或更新设备token\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/api_response',\n  $defs: {\n    api_response: {\n      type: 'object',\n      title: 'APIResponse',\n      properties: {\n        code: {\n          type: 'integer',\n          title: 'Code'\n        },\n        data: {\n          type: 'object',\n          title: 'Data',\n          additionalProperties: true\n        },\n        message: {\n          type: 'string',\n          title: 'Message'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      token: {
        type: 'string',
        title: 'Token',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['token'],
  },
  annotations: {},
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.api.v1.users.device.register(body)));
};

export default { metadata, tool, handler };
