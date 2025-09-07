// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SubscriptionAPI from './subscription';
import * as AdminAPI from './admin/admin';
import { Admin, AdminProcessRefundParams, AdminProcessRefundResponse } from './admin/admin';
import * as PlansAPI from './admin/plans';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Subscription extends APIResource {
  admin: AdminAPI.Admin = new AdminAPI.Admin(this._client);

  /**
   * 获取用户订阅状态
   *
   * @example
   * ```ts
   * const apiResponseSubscriptionStatus =
   *   await client.api.v1.subscription.getStatus();
   * ```
   */
  getStatus(options?: RequestOptions): APIPromise<APIResponseSubscriptionStatus> {
    return this._client.get('/api/v1/subscription/status', options);
  }

  /**
   * 获取用户使用统计
   *
   * @example
   * ```ts
   * const apiResponseUsageStatistics =
   *   await client.api.v1.subscription.getUsage();
   * ```
   */
  getUsage(options?: RequestOptions): APIPromise<APIResponseUsageStatistics> {
    return this._client.get('/api/v1/subscription/usage', options);
  }

  /**
   * 现有订阅计划、用户订阅的内容、以及其他与用户订阅状态相关的信息
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.subscription.listPlans();
   * ```
   */
  listPlans(options?: RequestOptions): APIPromise<SubscriptionListPlansResponse> {
    return this._client.get('/api/v1/subscription/plans', options);
  }

  /**
   * Used by app to prove user has purchased a subscription
   *
   * @example
   * ```ts
   * const response = await client.api.v1.subscription.verify({
   *   product_id: 'product_id',
   *   purchase_token: 'purchase_token',
   * });
   * ```
   */
  verify(body: SubscriptionVerifyParams, options?: RequestOptions): APIPromise<SubscriptionVerifyResponse> {
    return this._client.post('/api/v1/subscription/verify', { body, ...options });
  }

  /**
   * Google Play Developer Notifications webhook 处理订阅状态变化通知
   *
   * @example
   * ```ts
   * const response = await client.api.v1.subscription.webhook();
   * ```
   */
  webhook(options?: RequestOptions): APIPromise<SubscriptionWebhookResponse> {
    return this._client.post('/api/v1/subscription/webhook', options);
  }
}

export interface APIResponseSubscriptionStatus {
  code?: number;

  /**
   * 订阅状态响应
   */
  data?: APIResponseSubscriptionStatus.Data | null;

  message?: string;
}

export namespace APIResponseSubscriptionStatus {
  /**
   * 订阅状态响应
   */
  export interface Data {
    /**
     * 是否订阅
     */
    is_subscribed: boolean;

    /**
     * 订阅详细状态：subscribed/subscribed_expiring/unsubscribed
     */
    subscription_status: string;

    /**
     * Agent 创建数量限制
     */
    agent_creation_limit?: number;

    /**
     * 每日背景图生成次数限制
     */
    background_generation_limit_per_day?: number;

    /**
     * 24 小时内聊天次数限制（免费用户）
     */
    chat_24h_limit?: number | null;

    /**
     * 每日聊天次数限制
     */
    chat_limit_per_day?: number;

    /**
     * 权益功能列表
     */
    feature_list?: Array<Data.FeatureList>;

    /**
     * 功能权益
     */
    features?: { [key: string]: unknown };

    /**
     * 是否曾经有过订阅记录
     */
    has_ever_subscribed?: boolean;

    /**
     * 订阅计划响应模型
     */
    plan?: PlansAPI.SubscriptionPlan | null;

    /**
     * 剩余天数
     */
    remaining_days?: number | null;

    /**
     * 用户订阅响应模型
     */
    subscription?: SubscriptionAPI.UserSubscription | null;

    /**
     * 总聊天次数限制（免费用户）
     */
    total_chat_limit?: number | null;

    /**
     * 是否会自动续费
     */
    will_auto_renew?: boolean;
  }

  export namespace Data {
    /**
     * 权益功能信息
     */
    export interface FeatureList {
      /**
       * 权益描述
       */
      description: string;

      /**
       * 权益图标
       */
      icon: string;

      /**
       * 权益 key
       */
      key: string;

      /**
       * 权益名称
       */
      name: string;

      /**
       * 排序顺序
       */
      order: number;

      /**
       * 权益类型：real/fake
       */
      type: string;

      /**
       * 是否启用
       */
      enabled?: boolean;
    }
  }
}

export interface APIResponseUsageStatistics {
  code?: number;

  /**
   * 使用统计响应
   */
  data?: APIResponseUsageStatistics.Data | null;

  message?: string;
}

export namespace APIResponseUsageStatistics {
  /**
   * 使用统计响应
   */
  export interface Data {
    /**
     * 创建的 Agent 数量
     */
    agent_count?: number;

    /**
     * Agent 创建限制
     */
    agent_limit?: number;

    /**
     * 24 小时内聊天次数（免费用户）
     */
    chat_24h_count?: number | null;

    /**
     * 24 小时内聊天次数限制（免费用户）
     */
    chat_24h_limit?: number | null;

    /**
     * 今日聊天次数
     */
    today_chat_count?: number;

    /**
     * 今日限制
     */
    today_limit?: number;

    /**
     * 总聊天次数（免费用户）
     */
    total_chat_count?: number | null;

    /**
     * 总聊天次数限制（免费用户）
     */
    total_chat_limit?: number | null;

    /**
     * 使用历史
     */
    usage_history?: Array<Data.UsageHistory>;
  }

  export namespace Data {
    /**
     * 订阅使用响应模型
     */
    export interface UsageHistory {
      id: string;

      created_at: string;

      /**
       * 使用日期
       */
      usage_date: string;

      /**
       * 使用类型
       */
      usage_type: string;

      user_id: string;

      /**
       * 额外元数据
       */
      extra_data?: { [key: string]: unknown } | null;

      subscription_id?: string | null;

      /**
       * 使用次数
       */
      usage_count?: number;
    }
  }
}

/**
 * 用户订阅响应模型
 */
export interface UserSubscription {
  id: string;

  created_at: string;

  /**
   * 订阅计划 ID
   */
  plan_id: string;

  user_id: string;

  /**
   * 是否自动续费
   */
  auto_renew?: boolean;

  /**
   * 结束时间
   */
  end_date?: string | null;

  /**
   * 额外元数据
   */
  extra_data?: { [key: string]: unknown } | null;

  /**
   * Google Play 订单 ID
   */
  google_play_order_id?: string | null;

  /**
   * Google Play 购买令牌
   */
  google_play_purchase_token?: string | null;

  /**
   * Google Play 订阅 ID
   */
  google_play_subscription_id?: string | null;

  /**
   * 订阅计划响应模型
   */
  plan?: PlansAPI.SubscriptionPlan | null;

  /**
   * 开始时间
   */
  start_date?: string | null;

  /**
   * 订阅状态
   */
  status?: 'ACTIVE' | 'EXPIRED' | 'CANCELLED' | 'PENDING' | 'REFUNDED' | 'GRACE_PERIOD' | 'PAUSED';

  /**
   * 试用结束时间
   */
  trial_end_date?: string | null;

  updated_at?: string | null;
}

export interface SubscriptionListPlansResponse {
  code?: number;

  /**
   * 订阅计划列表响应
   */
  data?: SubscriptionListPlansResponse.Data | null;

  message?: string;
}

export namespace SubscriptionListPlansResponse {
  /**
   * 订阅计划列表响应
   */
  export interface Data {
    /**
     * 订阅计划列表
     */
    plans: Array<PlansAPI.SubscriptionPlan>;

    /**
     * 用户订阅响应模型
     */
    current_subscription?: SubscriptionAPI.UserSubscription | null;

    /**
     * 是否曾经有过订阅记录
     */
    has_ever_subscribed?: boolean;

    /**
     * 最新的订阅计划 ID
     */
    previous_plan_id?: string | null;
  }
}

export interface SubscriptionVerifyResponse {
  code?: number;

  /**
   * 购买验证响应
   */
  data?: SubscriptionVerifyResponse.Data | null;

  message?: string;
}

export namespace SubscriptionVerifyResponse {
  /**
   * 购买验证响应
   */
  export interface Data {
    /**
     * @deprecated 是否有效，使用 is_verified 代替
     */
    is_valid: boolean;

    /**
     * 是否有效
     */
    is_verified: boolean;

    /**
     * 验证消息
     */
    message: string;

    /**
     * 错误代码
     */
    error_code?: string | null;

    /**
     * 用户订阅响应模型
     */
    subscription?: SubscriptionAPI.UserSubscription | null;
  }
}

export type SubscriptionWebhookResponse = { [key: string]: string };

export interface SubscriptionVerifyParams {
  /**
   * 产品 ID
   */
  product_id: string;

  /**
   * 购买令牌
   */
  purchase_token: string;

  /**
   * 订单 ID
   */
  order_id?: string | null;
}

Subscription.Admin = Admin;

export declare namespace Subscription {
  export {
    type APIResponseSubscriptionStatus as APIResponseSubscriptionStatus,
    type APIResponseUsageStatistics as APIResponseUsageStatistics,
    type UserSubscription as UserSubscription,
    type SubscriptionListPlansResponse as SubscriptionListPlansResponse,
    type SubscriptionVerifyResponse as SubscriptionVerifyResponse,
    type SubscriptionWebhookResponse as SubscriptionWebhookResponse,
    type SubscriptionVerifyParams as SubscriptionVerifyParams,
  };

  export {
    Admin as Admin,
    type AdminProcessRefundResponse as AdminProcessRefundResponse,
    type AdminProcessRefundParams as AdminProcessRefundParams,
  };
}
