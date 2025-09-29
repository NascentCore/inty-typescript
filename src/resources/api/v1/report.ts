// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeviceAPI from './users/device';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Report extends APIResource {
  /**
   * Submit report
   *
   * @example
   * ```ts
   * const apiResponse = await client.api.v1.report.create({
   *   reason_ids: [0],
   *   target_id: 'target_id',
   *   target_type: 'USER',
   * });
   * ```
   */
  create(body: ReportCreateParams, options?: RequestOptions): APIPromise<DeviceAPI.APIResponse> {
    return this._client.post('/api/v1/report/', { body, ...options });
  }
}

export interface APIResponseDict {
  code?: number;

  data?: { [key: string]: unknown } | null;

  message?: string;
}

export interface ReportCreateParams {
  reason_ids: Array<number>;

  target_id: string;

  target_type: 'USER' | 'AGENT';

  description?: string | null;

  image_urls?: Array<string> | null;

  request_id?: string | null;
}

export declare namespace Report {
  export { type APIResponseDict as APIResponseDict, type ReportCreateParams as ReportCreateParams };
}
