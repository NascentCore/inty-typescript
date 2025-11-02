// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';

export class Config extends APIResource {
  /**
   * 获取当前图片生成的提示词模板和默认参数配置
   *
   * @example
   * ```ts
   * const config =
   *   await client.api.v1.ai.agents.imageGeneration.config.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<ConfigRetrieveResponse> {
    return this._client.get('/api/v1/ai/agents/image-generation/config', options);
  }

  /**
   * 更新图片生成的提示词模板和默认参数配置（仅超级用户）
   *
   * @example
   * ```ts
   * const config =
   *   await client.api.v1.ai.agents.imageGeneration.config.update(
   *     { body: { foo: 'bar' } },
   *   );
   * ```
   */
  update(params: ConfigUpdateParams, options?: RequestOptions): APIPromise<ConfigUpdateResponse> {
    const { body } = params;
    return this._client.put('/api/v1/ai/agents/image-generation/config', { body: body, ...options });
  }
}

export interface ConfigRetrieveResponse {
  code?: number;

  data?: { [key: string]: unknown } | null;

  message?: string;
}

export interface ConfigUpdateResponse {
  code?: number;

  data?: { [key: string]: unknown } | null;

  message?: string;
}

export interface ConfigUpdateParams {
  body: { [key: string]: unknown };
}

export declare namespace Config {
  export {
    type ConfigRetrieveResponse as ConfigRetrieveResponse,
    type ConfigUpdateResponse as ConfigUpdateResponse,
    type ConfigUpdateParams as ConfigUpdateParams,
  };
}
