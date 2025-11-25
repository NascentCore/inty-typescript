// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Chat extends APIResource {
  /**
   * 可以处理包括图片在内的各种消息类型，媒体类型应该先上传，然后将 URL 作为索引发送
   * 到此 API
   *
   * @deprecated
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

  data?: unknown;

  message?: string;
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
