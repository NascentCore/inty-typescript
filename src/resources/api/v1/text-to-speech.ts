// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class TextToSpeech extends APIResource {
  /**
   * 获取可用音色列表（包含 Gemini TTS 和 ElevenLabs），支持搜索和过滤功能
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
   * 音色分类过滤 (如: prebuilt, premade, cloned)
   */
  category?: string | null;

  /**
   * 每页返回结果数，默认返回所有音色，最大 1000
   */
  page_size?: number | null;

  /**
   * TTS 服务提供商过滤 ("gemini" 或 "elevenlabs"，不传则返回所有)
   */
  provider?: string | null;

  /**
   * 搜索音色名称关键词
   */
  search?: string | null;

  /**
   * 音色类型过滤 (如: personal, preset)
   */
  voice_type?: string | null;
}

export declare namespace TextToSpeech {
  export {
    type TextToSpeechListVoicesResponse as TextToSpeechListVoicesResponse,
    type TextToSpeechListVoicesParams as TextToSpeechListVoicesParams,
  };
}
