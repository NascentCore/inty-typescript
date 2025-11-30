// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Report extends APIResource {
  /**
   * Submit report
   *
   * @example
   * ```ts
   * const report = await client.api.v1.report.create({
   *   target_id: 'target_id',
   *   target_type: 'USER',
   * });
   * ```
   */
  create(body: ReportCreateParams, options?: RequestOptions): APIPromise<ReportCreateResponse> {
    return this._client.post('/api/v1/report/', { body, ...options });
  }
}

export interface APIResponseDict {
  code?: number;

  data?: { [key: string]: unknown } | null;

  message?: string;
}

export interface ReportCreateResponse {
  code?: number;

  data?: unknown;

  message?: string;
}

export interface ReportCreateParams {
  /**
   * 举报或者反馈的目标对象的 ID，角色或者用户的 ID。
   */
  target_id: string;

  /**
   * 举报或者反馈的目标对象的类型，角色或者用户。
   */
  target_type: 'USER' | 'AGENT';

  /**
   * The description of the report.
   */
  description?: string | null;

  /**
   * 举报或者反馈附图的链接，该链接来自 /api/v1/images 端点上传图片返回的 gcs URL（可
   * 能是 cdn 链接）
   */
  image_urls?: Array<string> | null;

  /**
   * 举报或者反馈的原因代码列表。如果未提供且提供了 reason_ids，将从 reason_ids 自动
   * 转换
   */
  reason_codes?: Array<
    | 'SENSITIVE_CONTENT'
    | 'MISINFORMATION'
    | 'FRAUD_SCAMS'
    | 'PRIVACY_VIOLATION'
    | 'HARMFUL_MINORS'
    | 'IP_VIOLATION'
    | 'OTHER'
    | 'CHAT_NOT_NATURAL'
    | 'CHARACTER_MISMATCH'
    | 'APP_SLOW'
    | 'FEATURE_HARD_TO_FIND'
    | 'UI_INCONVENIENT'
    | 'NEW_FEATURE'
  > | null;

  reason_ids?: Array<number> | null;

  /**
   * 举报或者反馈的类型，为空时默认为 REPORT
   */
  report_type?: 'REPORT' | 'FEEDBACK' | null;

  /**
   * The ID of the request.
   */
  request_id?: string | null;
}

export declare namespace Report {
  export {
    type APIResponseDict as APIResponseDict,
    type ReportCreateResponse as ReportCreateResponse,
    type ReportCreateParams as ReportCreateParams,
  };
}
