// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Profile extends APIResource {
  /**
   * Update current user profile, support avatar update
   *
   * @example
   * ```ts
   * const profile = await client.api.v1.users.profile.update();
   * ```
   */
  update(body: ProfileUpdateParams, options?: RequestOptions): APIPromise<ProfileUpdateResponse> {
    return this._client.put('/api/v1/users/profile', { body, ...options });
  }

  /**
   * Get current user profile.
   *
   * @example
   * ```ts
   * const response = await client.api.v1.users.profile.me();
   * ```
   */
  me(options?: RequestOptions): APIPromise<ProfileMeResponse> {
    return this._client.get('/api/v1/users/me', options);
  }
}

/**
 * 性别
 */
export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

/**
 * 返回给客户端的用户信息
 */
export interface User {
  id: string;

  auth_type: string;

  created_at: string;

  is_active: boolean;

  readable_id: string;

  actions?: Array<User.Action>;

  age_group?: string | null;

  avatar?: string | null;

  connector_count?: number | null;

  description?: string | null;

  email?: string | null;

  followers_count?: number | null;

  /**
   * 性别
   */
  gender?: Gender | null;

  is_superuser?: boolean;

  nickname?: string | null;

  phone?: string | null;

  public_agents_count?: number | null;

  system_language?: string | null;

  total_public_agents_follows?: number | null;

  updated_at?: string | null;
}

export namespace User {
  /**
   * 用户行动项
   */
  export interface Action {
    enabled: boolean;

    /**
     * 用户行动类型枚举
     */
    type: 'request_feedback';
  }
}

export interface ProfileUpdateResponse {
  code?: number;

  /**
   * 返回给客户端的用户信息
   */
  data?: User | null;

  message?: string;
}

export interface ProfileMeResponse {
  code?: number;

  /**
   * 返回给客户端的用户信息
   */
  data?: User | null;

  message?: string;
}

export interface ProfileUpdateParams {
  age_group?: string | null;

  avatar?: string | null;

  description?: string | null;

  email?: string | null;

  /**
   * 性别
   */
  gender?: Gender | null;

  nickname?: string | null;

  phone?: string | null;

  request_id?: string | null;

  system_language?: string | null;
}

export declare namespace Profile {
  export {
    type Gender as Gender,
    type User as User,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileMeResponse as ProfileMeResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };
}
