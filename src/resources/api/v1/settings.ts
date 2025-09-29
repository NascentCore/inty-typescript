// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Settings extends APIResource {
  /**
   * Get current user settings
   *
   * @example
   * ```ts
   * const settings = await client.api.v1.settings.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<Settings> {
    return this._client.get('/api/v1/settings/', options);
  }

  /**
   * Update current user settings
   *
   * @example
   * ```ts
   * const settings = await client.api.v1.settings.update();
   * ```
   */
  update(body: SettingUpdateParams, options?: RequestOptions): APIPromise<Settings> {
    return this._client.put('/api/v1/settings/', { body, ...options });
  }
}

/**
 * API 响应中的设置
 */
export interface Settings {
  id: string;

  created_at: string;

  user_id: string;

  language?: string;

  updated_at?: string | null;

  voice_enabled?: boolean;
}

export interface SettingUpdateParams {
  language?: string | null;

  request_id?: string | null;

  voice_enabled?: boolean | null;
}

export declare namespace Settings {
  export { type Settings as Settings, type SettingUpdateParams as SettingUpdateParams };
}
