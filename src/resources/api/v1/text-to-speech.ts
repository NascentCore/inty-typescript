// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class TextToSpeech extends APIResource {
  /**
   * 获取 ElevenLabs 可用音色列表，支持搜索和过滤功能
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.textToSpeech.listVoices();
   * ```
   */
  listVoices(
    query: TextToSpeechListVoicesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TextToSpeechListVoicesResponse> {
    return this._client.get('/api/v1/text-to-speech/list-voices', { query, ...options });
  }
}

export type TextToSpeechListVoicesResponse = Array<{ [key: string]: unknown }>;

export interface TextToSpeechListVoicesParams {
  /**
   * 音色分类过滤 (如: premade, cloned)
   */
  category?: string | null;

  /**
   * 每页返回结果数，默认 10，最大 100
   */
  page_size?: number | null;

  /**
   * 搜索音色名称关键词
   */
  search?: string | null;

  /**
   * 音色类型过滤 (如: personal, community)
   */
  voice_type?: string | null;
}

export declare namespace TextToSpeech {
  export {
    type TextToSpeechListVoicesResponse as TextToSpeechListVoicesResponse,
    type TextToSpeechListVoicesParams as TextToSpeechListVoicesParams,
  };
}
