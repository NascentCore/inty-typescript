// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DeletionAPI from './deletion';
import { Deletion, DeletionCheckEligibilityResponse } from './deletion';
import * as DeviceAPI from './device';
import { APIResponse, Device, DeviceRegisterParams } from './device';
import * as ProfileAPI from './profile';
import {
  Gender,
  Profile,
  ProfileMeResponse,
  ProfileRetrieveResponse,
  ProfileUpdateParams,
  ProfileUpdateResponse,
  User,
} from './profile';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Users extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  device: DeviceAPI.Device = new DeviceAPI.Device(this._client);
  deletion: DeletionAPI.Deletion = new DeletionAPI.Deletion(this._client);

  /**
   * 删除用户账户
   *
   * @example
   * ```ts
   * const response = await client.api.v1.users.deleteAccount();
   * ```
   */
  deleteAccount(
    body: UserDeleteAccountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserDeleteAccountResponse> {
    return this._client.post('/api/v1/users/delete-account', { body, ...options });
  }
}

export interface UserDeleteAccountResponse {
  code?: number;

  /**
   * 账户删除响应
   */
  data?: UserDeleteAccountResponse.Data | null;

  message?: string;
}

export namespace UserDeleteAccountResponse {
  /**
   * 账户删除响应
   */
  export interface Data {
    /**
     * 删除结果消息
     */
    message: string;

    /**
     * 是否删除成功
     */
    success: boolean;

    /**
     * 用户 ID
     */
    user_id: string;

    /**
     * 已匿名化的字段列表
     */
    anonymized_fields?: Array<string> | null;

    /**
     * 删除日志 ID
     */
    deletion_log_id?: string | null;
  }
}

export interface UserDeleteAccountParams {
  /**
   * 删除原因
   */
  reason?: string | null;

  request_id?: string | null;
}

Users.Profile = Profile;
Users.Device = Device;
Users.Deletion = Deletion;

export declare namespace Users {
  export {
    type UserDeleteAccountResponse as UserDeleteAccountResponse,
    type UserDeleteAccountParams as UserDeleteAccountParams,
  };

  export {
    Profile as Profile,
    type Gender as Gender,
    type User as User,
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileMeResponse as ProfileMeResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };

  export {
    Device as Device,
    type APIResponse as APIResponse,
    type DeviceRegisterParams as DeviceRegisterParams,
  };

  export { Deletion as Deletion, type DeletionCheckEligibilityResponse as DeletionCheckEligibilityResponse };
}
