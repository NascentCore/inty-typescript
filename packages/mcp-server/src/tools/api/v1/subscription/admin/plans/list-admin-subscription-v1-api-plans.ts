// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.subscription.admin.plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/subscription/admin/plans',
  operationId: 'get_all_subscription_plans_api_v1_subscription_admin_plans_get',
};

export const tool: Tool = {
  name: 'list_admin_subscription_v1_api_plans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n获取所有订阅计划（管理员接口）\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'APIResponse[List[SubscriptionPlan]]',\n  properties: {\n    code: {\n      type: 'integer',\n      title: 'Code'\n    },\n    data: {\n      type: 'array',\n      title: 'Data',\n      items: {\n        $ref: '#/$defs/subscription_plan'\n      }\n    },\n    message: {\n      type: 'string',\n      title: 'Message'\n    }\n  },\n  $defs: {\n    subscription_plan: {\n      type: 'object',\n      title: 'SubscriptionPlan',\n      description: '订阅计划响应模型',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        google_play_product_id: {\n          type: 'string',\n          title: 'Google Play Product Id',\n          description: 'Google Play产品ID'\n        },\n        name: {\n          type: 'string',\n          title: 'Name',\n          description: '计划名称'\n        },\n        plan_type: {\n          $ref: '#/$defs/subscription_plan_type'\n        },\n        price: {\n          type: 'number',\n          title: 'Price',\n          description: '价格'\n        },\n        agent_creation_limit: {\n          type: 'integer',\n          title: 'Agent Creation Limit',\n          description: 'Agent创建数量限制'\n        },\n        background_generation_limit_per_day: {\n          type: 'integer',\n          title: 'Background Generation Limit Per Day',\n          description: '每日背景图生成次数限制，-1为无限制'\n        },\n        chat_limit_per_day: {\n          type: 'integer',\n          title: 'Chat Limit Per Day',\n          description: '每日聊天次数限制，-1为无限制'\n        },\n        currency: {\n          type: 'string',\n          title: 'Currency',\n          description: '货币'\n        },\n        description: {\n          type: 'string',\n          title: 'Description',\n          description: '计划描述'\n        },\n        discount_rate: {\n          type: 'number',\n          title: 'Discount Rate',\n          description: '价格折扣率，范围0-1，1表示无折扣'\n        },\n        features: {\n          type: 'object',\n          title: 'Features',\n          description: '功能权益配置',\n          additionalProperties: true\n        },\n        is_active: {\n          type: 'boolean',\n          title: 'Is Active',\n          description: '是否激活'\n        },\n        sort_order: {\n          type: 'integer',\n          title: 'Sort Order',\n          description: '排序顺序'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'google_play_product_id',\n        'name',\n        'plan_type',\n        'price'\n      ]\n    },\n    subscription_plan_type: {\n      type: 'string',\n      title: 'SubscriptionPlanType',\n      description: '订阅计划类型',\n      enum: [        'MONTHLY',\n        'QUARTERLY',\n        'YEARLY'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      include_inactive: {
        type: 'boolean',
        title: 'Include Inactive',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.api.v1.subscription.admin.plans.list(body)),
  );
};

export default { metadata, tool, handler };
