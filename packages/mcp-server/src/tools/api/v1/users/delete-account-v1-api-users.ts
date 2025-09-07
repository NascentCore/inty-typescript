// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/users/delete-account',
  operationId: 'delete_user_account_api_v1_users_delete_account_post',
};

export const tool: Tool = {
  name: 'delete_account_v1_api_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n删除用户账户\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'APIResponse[AccountDeletionResponse]',\n  properties: {\n    code: {\n      type: 'integer',\n      title: 'Code'\n    },\n    data: {\n      type: 'object',\n      title: 'AccountDeletionResponse',\n      description: '账户删除响应',\n      properties: {\n        message: {\n          type: 'string',\n          title: 'Message',\n          description: '删除结果消息'\n        },\n        success: {\n          type: 'boolean',\n          title: 'Success',\n          description: '是否删除成功'\n        },\n        user_id: {\n          type: 'string',\n          title: 'User Id',\n          description: '用户ID'\n        },\n        anonymized_fields: {\n          type: 'array',\n          title: 'Anonymized Fields',\n          description: '已匿名化的字段列表',\n          items: {\n            type: 'string'\n          }\n        },\n        deletion_log_id: {\n          type: 'string',\n          title: 'Deletion Log Id',\n          description: '删除日志ID'\n        }\n      },\n      required: [        'message',\n        'success',\n        'user_id'\n      ]\n    },\n    message: {\n      type: 'string',\n      title: 'Message'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      reason: {
        type: 'string',
        title: 'Reason',
        description: '删除原因',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.api.v1.users.deleteAccount(body)));
};

export default { metadata, tool, handler };
