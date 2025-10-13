// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChatAPI from './chat';
import { Chat, ChatSendMessageParams, ChatSendMessageResponse } from './chat';

export class V2 extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
}

V2.Chat = Chat;

export declare namespace V2 {
  export {
    Chat as Chat,
    type ChatSendMessageResponse as ChatSendMessageResponse,
    type ChatSendMessageParams as ChatSendMessageParams,
  };
}
