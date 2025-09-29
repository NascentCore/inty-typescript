// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class Plans extends APIResource {
  /**
   * 创建订阅计划（管理员接口）
   *
   * @example
   * ```ts
   * const plan =
   *   await client.api.v1.subscription.admin.plans.create({
   *     google_play_product_id: 'google_play_product_id',
   *     name: 'name',
   *     plan_type: 'MONTHLY',
   *     price: 0,
   *   });
   * ```
   */
  create(body: PlanCreateParams, options?: RequestOptions): APIPromise<PlanCreateResponse> {
    return this._client.post('/api/v1/subscription/admin/plans', { body, ...options });
  }

  /**
   * 获取所有订阅计划（管理员接口）
   *
   * @example
   * ```ts
   * const plans =
   *   await client.api.v1.subscription.admin.plans.list();
   * ```
   */
  list(
    query: PlanListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanListResponse> {
    return this._client.get('/api/v1/subscription/admin/plans', { query, ...options });
  }
}

/**
 * 订阅计划响应模型
 */
export interface SubscriptionPlan {
  id: string;

  created_at: string;

  /**
   * Google Play 产品 ID
   */
  google_play_product_id: string;

  /**
   * 计划名称
   */
  name: string;

  /**
   * 计划类型
   */
  plan_type: SubscriptionPlanType;

  /**
   * 价格
   */
  price: number;

  /**
   * Agent 创建数量限制
   */
  agent_creation_limit?: number;

  /**
   * 每日背景图生成次数限制，-1 为无限制
   */
  background_generation_limit_per_day?: number;

  /**
   * 每日聊天次数限制，-1 为无限制
   */
  chat_limit_per_day?: number;

  /**
   * 货币
   */
  currency?: string;

  /**
   * 计划描述
   */
  description?: string | null;

  /**
   * 价格折扣率，范围 0-1，1 表示无折扣
   */
  discount_rate?: number;

  /**
   * 功能权益配置
   */
  features?: { [key: string]: unknown } | null;

  /**
   * 是否激活
   */
  is_active?: boolean;

  /**
   * 排序顺序
   */
  sort_order?: number;

  updated_at?: string | null;
}

/**
 * 订阅计划类型
 */
export type SubscriptionPlanType = 'MONTHLY' | 'QUARTERLY' | 'YEARLY';

export interface PlanCreateResponse {
  code?: number;

  /**
   * 订阅计划响应模型
   */
  data?: SubscriptionPlan | null;

  message?: string;
}

export interface PlanListResponse {
  code?: number;

  data?: Array<SubscriptionPlan> | null;

  message?: string;
}

export interface PlanCreateParams {
  /**
   * Google Play 产品 ID
   */
  google_play_product_id: string;

  /**
   * 计划名称
   */
  name: string;

  /**
   * 计划类型
   */
  plan_type: SubscriptionPlanType;

  /**
   * 价格
   */
  price: number;

  /**
   * Agent 创建数量限制
   */
  agent_creation_limit?: number;

  /**
   * 每日背景图生成次数限制，-1 为无限制
   */
  background_generation_limit_per_day?: number;

  /**
   * 每日聊天次数限制，-1 为无限制
   */
  chat_limit_per_day?: number;

  /**
   * 货币
   */
  currency?: string;

  /**
   * 计划描述
   */
  description?: string | null;

  /**
   * 价格折扣率，范围 0-1，1 表示无折扣
   */
  discount_rate?: number;

  /**
   * 功能权益配置
   */
  features?: { [key: string]: unknown } | null;

  /**
   * 是否激活
   */
  is_active?: boolean;

  request_id?: string | null;

  /**
   * 排序顺序
   */
  sort_order?: number;
}

export interface PlanListParams {
  include_inactive?: boolean;
}

export declare namespace Plans {
  export {
    type SubscriptionPlan as SubscriptionPlan,
    type SubscriptionPlanType as SubscriptionPlanType,
    type PlanCreateResponse as PlanCreateResponse,
    type PlanListResponse as PlanListResponse,
    type PlanCreateParams as PlanCreateParams,
    type PlanListParams as PlanListParams,
  };
}
