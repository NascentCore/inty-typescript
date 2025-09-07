// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.users.deletion',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/users/deletion/check',
  operationId: 'check_deletion_eligibility_api_v1_users_deletion_check_get',
};

export const tool: Tool = {
  name: 'check_eligibility_users_v1_api_deletion',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n检查用户是否可以删除账户\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'APIResponse[DeletionCheckResponse]',\n  properties: {\n    code: {\n      type: 'integer',\n      title: 'Code'\n    },\n    data: {\n      type: 'object',\n      title: 'DeletionCheckResponse',\n      description: '删除检查响应',\n      properties: {\n        can_delete: {\n          type: 'boolean',\n          title: 'Can Delete',\n          description: '是否可以删除'\n        },\n        active_subscription: {\n          type: 'boolean',\n          title: 'Active Subscription',\n          description: '是否有活跃订阅'\n        },\n        error_message: {\n          type: 'string',\n          title: 'Error Message',\n          description: '错误信息'\n        }\n      },\n      required: [        'can_delete'\n      ]\n    },\n    message: {\n      type: 'string',\n      title: 'Message'\n    }\n  }\n}\n```",
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.api.v1.users.deletion.checkEligibility()),
  );
};

export default { metadata, tool, handler };
