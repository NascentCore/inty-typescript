// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.subscription.admin',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/subscription/admin/refund',
  operationId: 'process_manual_refund_api_v1_subscription_admin_refund_post',
};

export const tool: Tool = {
  name: 'process_refund_subscription_v1_api_admin',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n手动处理退款（管理员接口）\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'APIResponse[RefundResponse]',\n  properties: {\n    code: {\n      type: 'integer',\n      title: 'Code'\n    },\n    data: {\n      type: 'object',\n      title: 'RefundResponse',\n      description: '退款响应',\n      properties: {\n        message: {\n          type: 'string',\n          title: 'Message',\n          description: '处理消息'\n        },\n        refund_amount: {\n          type: 'number',\n          title: 'Refund Amount',\n          description: '退款金额'\n        },\n        subscription_id: {\n          type: 'string',\n          title: 'Subscription Id',\n          description: '订阅ID'\n        },\n        success: {\n          type: 'boolean',\n          title: 'Success',\n          description: '是否成功'\n        },\n        refunded_at: {\n          type: 'string',\n          title: 'Refunded At',\n          description: '退款时间',\n          format: 'date-time'\n        }\n      },\n      required: [        'message',\n        'refund_amount',\n        'subscription_id',\n        'success'\n      ]\n    },\n    message: {\n      type: 'string',\n      title: 'Message'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      subscription_id: {
        type: 'string',
        title: 'Subscription Id',
        description: '订阅ID',
      },
      reason: {
        type: 'string',
        title: 'Reason',
        description: '退款原因',
      },
      refund_amount: {
        type: 'number',
        title: 'Refund Amount',
        description: '退款金额，不填写则退全款',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['subscription_id'],
  },
  annotations: {},
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.api.v1.subscription.admin.processRefund(body)),
  );
};

export default { metadata, tool, handler };
