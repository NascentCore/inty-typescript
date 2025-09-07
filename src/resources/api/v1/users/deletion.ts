// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Deletion extends APIResource {
  /**
   * 检查用户是否可以删除账户
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.users.deletion.checkEligibility();
   * ```
   */
  checkEligibility(options?: RequestOptions): APIPromise<DeletionCheckEligibilityResponse> {
    return this._client.get('/api/v1/users/deletion/check', options);
  }
}

export interface DeletionCheckEligibilityResponse {
  code?: number;

  /**
   * 删除检查响应
   */
  data?: DeletionCheckEligibilityResponse.Data | null;

  message?: string;
}

export namespace DeletionCheckEligibilityResponse {
  /**
   * 删除检查响应
   */
  export interface Data {
    /**
     * 是否可以删除
     */
    can_delete: boolean;

    /**
     * 是否有活跃订阅
     */
    active_subscription?: boolean | null;

    /**
     * 错误信息
     */
    error_message?: string | null;
  }
}

export declare namespace Deletion {
  export { type DeletionCheckEligibilityResponse as DeletionCheckEligibilityResponse };
}
