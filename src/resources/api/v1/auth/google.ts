// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ProfileAPI from '../users/profile';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Google extends APIResource {
  /**
   * Google 登录
   *
   * @example
   * ```ts
   * const response = await client.api.v1.auth.google.login({
   *   id_token: 'id_token',
   * });
   * ```
   */
  login(body: GoogleLoginParams, options?: RequestOptions): APIPromise<GoogleLoginResponse> {
    return this._client.post('/api/v1/auth/google/login', { body, ...options });
  }
}

export interface GoogleLoginResponse {
  code?: number;

  /**
   * 登录响应
   */
  data?: GoogleLoginResponse.Data | null;

  message?: string;
}

export namespace GoogleLoginResponse {
  /**
   * 登录响应
   */
  export interface Data {
    token: string;

    /**
     * 登录用户响应
     */
    user: Data.User;
  }

  export namespace Data {
    /**
     * 登录用户响应
     */
    export interface User {
      id: string;

      /**
       * 认证类型
       */
      auth_type: 'PHONE' | 'GOOGLE' | 'GUEST';

      avatar: string;

      email: string;

      is_new_user: boolean;

      nickname: string;

      age_group?: string | null;

      description?: string | null;

      /**
       * 性别
       */
      gender?: ProfileAPI.Gender | null;

      phone?: string | null;

      system_language?: string | null;
    }
  }
}

export interface GoogleLoginParams {
  id_token: string;

  request_id?: string | null;

  /**
   * 用户信息
   */
  user_info?: GoogleLoginParams.UserInfo | null;
}

export namespace GoogleLoginParams {
  /**
   * 用户信息
   */
  export interface UserInfo {
    age_group: string;

    /**
     * 性别
     */
    gender: ProfileAPI.Gender;

    system_language: string;
  }
}

export declare namespace Google {
  export { type GoogleLoginResponse as GoogleLoginResponse, type GoogleLoginParams as GoogleLoginParams };
}
