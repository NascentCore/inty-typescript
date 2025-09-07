// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.subscription.admin.users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/subscription/admin/users/{user_id}/usage',
  operationId: 'get_user_usage_statistics_admin_api_v1_subscription_admin_users__user_id__usage_get',
};

export const tool: Tool = {
  name: 'get_usage_statistics_admin_subscription_v1_api_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n获取指定用户的使用统计（管理员接口）\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/api_response_usage_statistics',\n  $defs: {\n    api_response_usage_statistics: {\n      type: 'object',\n      title: 'APIResponse[UsageStatisticsResponse]',\n      properties: {\n        code: {\n          type: 'integer',\n          title: 'Code'\n        },\n        data: {\n          type: 'object',\n          title: 'UsageStatisticsResponse',\n          description: '使用统计响应',\n          properties: {\n            agent_count: {\n              type: 'integer',\n              title: 'Agent Count',\n              description: '创建的Agent数量'\n            },\n            agent_limit: {\n              type: 'integer',\n              title: 'Agent Limit',\n              description: 'Agent创建限制'\n            },\n            chat_24h_count: {\n              type: 'integer',\n              title: 'Chat 24H Count',\n              description: '24小时内聊天次数（免费用户）'\n            },\n            chat_24h_limit: {\n              type: 'integer',\n              title: 'Chat 24H Limit',\n              description: '24小时内聊天次数限制（免费用户）'\n            },\n            today_chat_count: {\n              type: 'integer',\n              title: 'Today Chat Count',\n              description: '今日聊天次数'\n            },\n            today_limit: {\n              type: 'integer',\n              title: 'Today Limit',\n              description: '今日限制'\n            },\n            total_chat_count: {\n              type: 'integer',\n              title: 'Total Chat Count',\n              description: '总聊天次数（免费用户）'\n            },\n            total_chat_limit: {\n              type: 'integer',\n              title: 'Total Chat Limit',\n              description: '总聊天次数限制（免费用户）'\n            },\n            usage_history: {\n              type: 'array',\n              title: 'Usage History',\n              description: '使用历史',\n              items: {\n                type: 'object',\n                title: 'SubscriptionUsage',\n                description: '订阅使用响应模型',\n                properties: {\n                  id: {\n                    type: 'string',\n                    title: 'Id'\n                  },\n                  created_at: {\n                    type: 'string',\n                    title: 'Created At',\n                    format: 'date-time'\n                  },\n                  usage_date: {\n                    type: 'string',\n                    title: 'Usage Date',\n                    description: '使用日期',\n                    format: 'date-time'\n                  },\n                  usage_type: {\n                    type: 'string',\n                    title: 'Usage Type',\n                    description: '使用类型'\n                  },\n                  user_id: {\n                    type: 'string',\n                    title: 'User Id'\n                  },\n                  extra_data: {\n                    type: 'object',\n                    title: 'Extra Data',\n                    description: '额外元数据',\n                    additionalProperties: true\n                  },\n                  subscription_id: {\n                    type: 'string',\n                    title: 'Subscription Id'\n                  },\n                  usage_count: {\n                    type: 'integer',\n                    title: 'Usage Count',\n                    description: '使用次数'\n                  }\n                },\n                required: [                  'id',\n                  'created_at',\n                  'usage_date',\n                  'usage_type',\n                  'user_id'\n                ]\n              }\n            }\n          }\n        },\n        message: {\n          type: 'string',\n          title: 'Message'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
        title: 'User Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['user_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { user_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.api.v1.subscription.admin.users.getUsageStatistics(user_id)),
  );
};

export default { metadata, tool, handler };
