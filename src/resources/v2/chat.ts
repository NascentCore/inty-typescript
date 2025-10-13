// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Chat extends APIResource {
  /**
   * 可以处理包括图片在内的各种消息类型，媒体类型应该先上传，然后将 URL 作为索引发送
   * 到此 API
   */
  sendMessage(
    agentID: string,
    body: ChatSendMessageParams,
    options?: RequestOptions,
  ): APIPromise<ChatSendMessageResponse> {
    return this._client.post(path`/api/v2/chat/completions/${agentID}`, { body, ...options });
  }
}

export interface ChatSendMessageResponse {
  code?: number;

  /**
   * OpenAI-style chat completion response model
   */
  data?: ChatSendMessageResponse.Data | null;

  message?: string;
}

export namespace ChatSendMessageResponse {
  /**
   * OpenAI-style chat completion response model
   */
  export interface Data {
    id: string;

    choices: Array<Data.Choice>;

    created: number;

    model: string;

    /**
     * Token usage model for OpenAI-style responses
     */
    usage: Data.Usage;
  }

  export namespace Data {
    /**
     * Chat choice model for OpenAI-style responses
     */
    export interface Choice {
      finish_reason: string;

      index: number;

      /**
       * Chat message model for OpenAI-style responses
       */
      message: Choice.Message;
    }

    export namespace Choice {
      /**
       * Chat message model for OpenAI-style responses
       */
      export interface Message {
        content: string;

        role: string;

        id?: string | null;

        audio_url?: string | null;

        meta_data?: { [key: string]: unknown } | null;

        timestamp?: string | null;
      }
    }

    /**
     * Token usage model for OpenAI-style responses
     */
    export interface Usage {
      completion_tokens: number;

      prompt_tokens: number;

      total_tokens: number;
    }
  }
}

export interface ChatSendMessageParams {
  messages: Array<ChatSendMessageParams.Message>;

  language?: string;

  model?: string;

  request_id?: string | null;

  stream?: boolean;
}

export namespace ChatSendMessageParams {
  export interface Message {
    content: string;

    role: string;
  }
}

export declare namespace Chat {
  export {
    type ChatSendMessageResponse as ChatSendMessageResponse,
    type ChatSendMessageParams as ChatSendMessageParams,
  };
}
