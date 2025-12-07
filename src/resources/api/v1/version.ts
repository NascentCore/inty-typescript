// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Version extends APIResource {
  /**
   * 检查应用版本更新
   *
   * 通过 HTTP 头传递版本信息：
   *
   * - appVersionCode: 应用版本代码（必填，整数）
   * - appVersionName: 应用版本名称（可选，后端会忽略，保留向后兼容）
   *
   * @example
   * ```ts
   * const response = await client.api.v1.version.check({
   *   appVersionCode: 0,
   * });
   * ```
   */
  check(params: VersionCheckParams, options?: RequestOptions): APIPromise<VersionCheckResponse> {
    const { appVersionCode, appVersionName } = params;
    return this._client.post('/api/v1/version/check', {
      ...options,
      headers: buildHeaders([
        {
          appVersionCode: appVersionCode.toString(),
          ...(appVersionName != null ? { appVersionName: appVersionName } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface VersionCheckResponse {
  code?: number;

  /**
   * 版本检查响应模型
   */
  data?: VersionCheckResponse.Data | null;

  message?: string;
}

export namespace VersionCheckResponse {
  /**
   * 版本检查响应模型
   */
  export interface Data {
    /**
     * 更新日志
     */
    changelog?: string | null;

    /**
     * 当前客户端版本
     */
    current_version?: string | null;

    /**
     * 下载链接
     */
    download_url?: string | null;

    /**
     * 错误信息
     */
    error?: string | null;

    /**
     * 是否强制更新
     */
    force_update?: boolean | null;

    /**
     * 强制更新的具体原因列表
     */
    force_update_reasons?: Array<string> | null;

    /**
     * 最新可用版本
     */
    latest_version?: string | null;

    /**
     * 最新版本代码
     */
    latest_version_code?: number | null;

    /**
     * 状态消息
     */
    message?: string | null;

    /**
     * 最低支持版本
     */
    minimum_version?: string | null;

    /**
     * 客户端需要展示的提醒动作，None 表示无需额外提醒
     */
    reminder_action?: 'NONE' | 'SETTINGS_REMINDER' | 'POP_UP_REMINDER' | 'BLOCK_ACCESS';

    /**
     * 是否需要更新
     */
    update_required?: boolean | null;
  }
}

export interface VersionCheckParams {
  /**
   * 应用版本代码
   */
  appVersionCode: number;

  /**
   * 应用版本名称（向后兼容，忽略）
   */
  appVersionName?: string;
}

export declare namespace Version {
  export { type VersionCheckResponse as VersionCheckResponse, type VersionCheckParams as VersionCheckParams };
}
