// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as PlansAPI from './plans';
import {
  PlanCreateParams,
  PlanCreateResponse,
  PlanListParams,
  PlanListResponse,
  Plans,
  SubscriptionPlan,
  SubscriptionPlanType,
} from './plans';
import * as UsersAPI from './users';
import { Users } from './users';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class Admin extends APIResource {
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * 手动处理退款（管理员接口）
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.subscription.admin.processRefund({
   *     subscription_id: 'subscription_id',
   *   });
   * ```
   */
  processRefund(
    body: AdminProcessRefundParams,
    options?: RequestOptions,
  ): APIPromise<AdminProcessRefundResponse> {
    return this._client.post('/api/v1/subscription/admin/refund', { body, ...options });
  }
}

export interface AdminProcessRefundResponse {
  code?: number;

  /**
   * 退款响应
   */
  data?: AdminProcessRefundResponse.Data | null;

  message?: string;
}

export namespace AdminProcessRefundResponse {
  /**
   * 退款响应
   */
  export interface Data {
    /**
     * 处理消息
     */
    message: string;

    /**
     * 退款金额
     */
    refund_amount: number;

    /**
     * 订阅 ID
     */
    subscription_id: string;

    /**
     * 是否成功
     */
    success: boolean;

    /**
     * 退款时间
     */
    refunded_at?: string | null;
  }
}

export interface AdminProcessRefundParams {
  /**
   * 订阅 ID
   */
  subscription_id: string;

  /**
   * 退款原因
   */
  reason?: string;

  /**
   * 退款金额，不填写则退全款
   */
  refund_amount?: number | null;
}

Admin.Plans = Plans;
Admin.Users = Users;

export declare namespace Admin {
  export {
    type AdminProcessRefundResponse as AdminProcessRefundResponse,
    type AdminProcessRefundParams as AdminProcessRefundParams,
  };

  export {
    Plans as Plans,
    type SubscriptionPlan as SubscriptionPlan,
    type SubscriptionPlanType as SubscriptionPlanType,
    type PlanCreateResponse as PlanCreateResponse,
    type PlanListResponse as PlanListResponse,
    type PlanCreateParams as PlanCreateParams,
    type PlanListParams as PlanListParams,
  };

  export { Users as Users };
}
