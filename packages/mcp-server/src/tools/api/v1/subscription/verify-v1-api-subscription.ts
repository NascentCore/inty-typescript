// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.subscription',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/subscription/verify',
  operationId: 'verify_purchase_api_v1_subscription_verify_post',
};

export const tool: Tool = {
  name: 'verify_v1_api_subscription',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUsed by app to prove user has purchased a subscription\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'APIResponse[PurchaseVerificationResponse]',\n  properties: {\n    code: {\n      type: 'integer',\n      title: 'Code'\n    },\n    data: {\n      type: 'object',\n      title: 'PurchaseVerificationResponse',\n      description: '购买验证响应',\n      properties: {\n        is_valid: {\n          type: 'boolean',\n          title: 'Is Valid',\n          description: '是否有效，使用 is_verified 代替'\n        },\n        is_verified: {\n          type: 'boolean',\n          title: 'Is Verified',\n          description: '是否有效'\n        },\n        message: {\n          type: 'string',\n          title: 'Message',\n          description: '验证消息'\n        },\n        error_code: {\n          type: 'string',\n          title: 'Error Code',\n          description: '错误代码'\n        },\n        subscription: {\n          $ref: '#/$defs/user_subscription'\n        }\n      },\n      required: [        'is_valid',\n        'is_verified',\n        'message'\n      ]\n    },\n    message: {\n      type: 'string',\n      title: 'Message'\n    }\n  },\n  $defs: {\n    user_subscription: {\n      type: 'object',\n      title: 'UserSubscription',\n      description: '用户订阅响应模型',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        plan_id: {\n          type: 'string',\n          title: 'Plan Id',\n          description: '订阅计划ID'\n        },\n        user_id: {\n          type: 'string',\n          title: 'User Id'\n        },\n        auto_renew: {\n          type: 'boolean',\n          title: 'Auto Renew',\n          description: '是否自动续费'\n        },\n        end_date: {\n          type: 'string',\n          title: 'End Date',\n          description: '结束时间',\n          format: 'date-time'\n        },\n        extra_data: {\n          type: 'object',\n          title: 'Extra Data',\n          description: '额外元数据',\n          additionalProperties: true\n        },\n        google_play_order_id: {\n          type: 'string',\n          title: 'Google Play Order Id',\n          description: 'Google Play订单ID'\n        },\n        google_play_purchase_token: {\n          type: 'string',\n          title: 'Google Play Purchase Token',\n          description: 'Google Play购买令牌'\n        },\n        google_play_subscription_id: {\n          type: 'string',\n          title: 'Google Play Subscription Id',\n          description: 'Google Play订阅ID'\n        },\n        plan: {\n          $ref: '#/$defs/subscription_plan'\n        },\n        start_date: {\n          type: 'string',\n          title: 'Start Date',\n          description: '开始时间',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          title: 'SubscriptionStatus',\n          description: '订阅状态',\n          enum: [            'ACTIVE',\n            'EXPIRED',\n            'CANCELLED',\n            'PENDING',\n            'REFUNDED',\n            'GRACE_PERIOD',\n            'PAUSED'\n          ]\n        },\n        trial_end_date: {\n          type: 'string',\n          title: 'Trial End Date',\n          description: '试用结束时间',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'plan_id',\n        'user_id'\n      ]\n    },\n    subscription_plan: {\n      type: 'object',\n      title: 'SubscriptionPlan',\n      description: '订阅计划响应模型',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        google_play_product_id: {\n          type: 'string',\n          title: 'Google Play Product Id',\n          description: 'Google Play产品ID'\n        },\n        name: {\n          type: 'string',\n          title: 'Name',\n          description: '计划名称'\n        },\n        plan_type: {\n          $ref: '#/$defs/subscription_plan_type'\n        },\n        price: {\n          type: 'number',\n          title: 'Price',\n          description: '价格'\n        },\n        agent_creation_limit: {\n          type: 'integer',\n          title: 'Agent Creation Limit',\n          description: 'Agent创建数量限制'\n        },\n        background_generation_limit_per_day: {\n          type: 'integer',\n          title: 'Background Generation Limit Per Day',\n          description: '每日背景图生成次数限制，-1为无限制'\n        },\n        chat_limit_per_day: {\n          type: 'integer',\n          title: 'Chat Limit Per Day',\n          description: '每日聊天次数限制，-1为无限制'\n        },\n        currency: {\n          type: 'string',\n          title: 'Currency',\n          description: '货币'\n        },\n        description: {\n          type: 'string',\n          title: 'Description',\n          description: '计划描述'\n        },\n        discount_rate: {\n          type: 'number',\n          title: 'Discount Rate',\n          description: '价格折扣率，范围0-1，1表示无折扣'\n        },\n        features: {\n          type: 'object',\n          title: 'Features',\n          description: '功能权益配置',\n          additionalProperties: true\n        },\n        is_active: {\n          type: 'boolean',\n          title: 'Is Active',\n          description: '是否激活'\n        },\n        sort_order: {\n          type: 'integer',\n          title: 'Sort Order',\n          description: '排序顺序'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'google_play_product_id',\n        'name',\n        'plan_type',\n        'price'\n      ]\n    },\n    subscription_plan_type: {\n      type: 'string',\n      title: 'SubscriptionPlanType',\n      description: '订阅计划类型',\n      enum: [        'MONTHLY',\n        'QUARTERLY',\n        'YEARLY'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
        description: '产品ID',
      },
      purchase_token: {
        type: 'string',
        title: 'Purchase Token',
        description: '购买令牌',
      },
      order_id: {
        type: 'string',
        title: 'Order Id',
        description: '订单ID',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['product_id', 'purchase_token'],
  },
  annotations: {},
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.api.v1.subscription.verify(body)));
};

export default { metadata, tool, handler };
