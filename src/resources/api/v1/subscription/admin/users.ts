// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as SubscriptionAPI from '../subscription';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Users extends APIResource {
  /**
   * 获取指定用户的订阅状态（管理员接口）
   *
   * @example
   * ```ts
   * const apiResponseSubscriptionStatus =
   *   await client.api.v1.subscription.admin.users.getSubscriptionStatus(
   *     'user_id',
   *   );
   * ```
   */
  getSubscriptionStatus(
    userID: string,
    options?: RequestOptions,
  ): APIPromise<SubscriptionAPI.APIResponseSubscriptionStatus> {
    return this._client.get(path`/api/v1/subscription/admin/users/${userID}/subscription`, options);
  }

  /**
   * 获取指定用户的使用统计（管理员接口）
   *
   * @example
   * ```ts
   * const apiResponseUsageStatistics =
   *   await client.api.v1.subscription.admin.users.getUsageStatistics(
   *     'user_id',
   *   );
   * ```
   */
  getUsageStatistics(
    userID: string,
    options?: RequestOptions,
  ): APIPromise<SubscriptionAPI.APIResponseUsageStatistics> {
    return this._client.get(path`/api/v1/subscription/admin/users/${userID}/usage`, options);
  }
}
