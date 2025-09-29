// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GoogleAPI from './google';
import { Google, GoogleLoginParams, GoogleLoginResponse } from './google';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Auth extends APIResource {
  google: GoogleAPI.Google = new GoogleAPI.Google(this._client);

  /**
   * 创建游客账号
   *
   * @example
   * ```ts
   * const response = await client.api.v1.auth.createGuest();
   * ```
   */
  createGuest(body: AuthCreateGuestParams, options?: RequestOptions): APIPromise<AuthCreateGuestResponse> {
    return this._client.post('/api/v1/auth/guest', { body, ...options });
  }
}

export interface AuthCreateGuestResponse {
  code?: number;

  /**
   * 游客响应
   */
  data?: AuthCreateGuestResponse.Data | null;

  message?: string;
}

export namespace AuthCreateGuestResponse {
  /**
   * 游客响应
   */
  export interface Data {
    token: string;

    guest_id: string;

    is_new_guest: boolean;
  }
}

export interface AuthCreateGuestParams {
  age_group?: string | null;

  device_id?: string | null;

  request_id?: string | null;

  system_language?: string | null;
}

Auth.Google = Google;

export declare namespace Auth {
  export {
    type AuthCreateGuestResponse as AuthCreateGuestResponse,
    type AuthCreateGuestParams as AuthCreateGuestParams,
  };

  export {
    Google as Google,
    type GoogleLoginResponse as GoogleLoginResponse,
    type GoogleLoginParams as GoogleLoginParams,
  };
}
