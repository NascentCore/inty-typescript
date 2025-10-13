// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Device extends APIResource {
  /**
   * 在用户未打开 app 时向设备推送消息
   *
   * @example
   * ```ts
   * const apiResponse =
   *   await client.api.v1.users.device.register({
   *     token: 'token',
   *   });
   * ```
   */
  register(body: DeviceRegisterParams, options?: RequestOptions): APIPromise<APIResponse> {
    return this._client.post('/api/v1/users/device/register', { body, ...options });
  }
}

export interface APIResponse {
  code?: number;

  data?: unknown;

  message?: string;
}

export interface DeviceRegisterParams {
  token: string;

  request_id?: string | null;
}

export declare namespace Device {
  export { type APIResponse as APIResponse, type DeviceRegisterParams as DeviceRegisterParams };
}
