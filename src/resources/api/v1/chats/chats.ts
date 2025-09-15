// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReportAPI from '../report';
import * as AgentsAPI from './agents';
import {
  AgentGenerateMessageVoiceParams,
  AgentGenerateMessageVoiceResponse,
  AgentGetMessagesParams,
  AgentGetMessagesResponse,
  AgentUpdateSettingsParams,
  AgentUpdateSettingsResponse,
  Agents,
  ChatSettings,
} from './agents';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Chats extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);

  /**
   * Create new chat
   *
   * @example
   * ```ts
   * const chat = await client.api.v1.chats.create({
   *   agent_id: 'agent_id',
   * });
   * ```
   */
  create(body: ChatCreateParams, options?: RequestOptions): APIPromise<Chat> {
    return this._client.post('/api/v1/chats/', { body, ...options });
  }

  /**
   * Get current user's chat list
   *
   * @example
   * ```ts
   * const chats = await client.api.v1.chats.list();
   * ```
   */
  list(
    query: ChatListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChatListResponse> {
    return this._client.get('/api/v1/chats/', { query, ...options });
  }

  /**
   * Delete chat
   *
   * @example
   * ```ts
   * const chat = await client.api.v1.chats.delete('chat_id');
   * ```
   */
  delete(chatID: string, options?: RequestOptions): APIPromise<Chat> {
    return this._client.delete(path`/api/v1/chats/${chatID}`, options);
  }

  /**
   * 基于 Agent ID 的 OpenAI 风格聊天接口如果用户还没有和该 Agent 创建会话，则自动创
   * 建
   *
   * @example
   * ```ts
   * const apiResponseDict =
   *   await client.api.v1.chats.createCompletion('agent_id', {
   *     messages: [{ content: 'content', role: 'role' }],
   *   });
   * ```
   */
  createCompletion(
    agentID: string,
    body: ChatCreateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<ReportAPI.APIResponseDict> {
    return this._client.post(path`/api/v1/chat/completions/${agentID}`, { body, ...options });
  }
}

/**
 * 聊天
 */
export interface Chat {
  id: string;

  agent_id: string;

  created_at: string;

  user_id: string;

  agent_avatar?: string | null;

  agent_is_deleted?: boolean | null;

  agent_name?: string | null;

  last_message?: string | null;

  last_message_time?: string | null;

  /**
   * 聊天设置
   */
  settings?: AgentsAPI.ChatSettings | null;

  updated_at?: string | null;
}

export type ChatListResponse = Array<Chat>;

export interface ChatCreateParams {
  agent_id: string;
}

export interface ChatListParams {
  limit?: number;

  skip?: number;
}

export interface ChatCreateCompletionParams {
  messages: Array<ChatCreateCompletionParams.Message>;

  language?: string;

  model?: string;

  stream?: boolean;
}

export namespace ChatCreateCompletionParams {
  export interface Message {
    content: string;

    role: string;
  }
}

Chats.Agents = Agents;

export declare namespace Chats {
  export {
    type Chat as Chat,
    type ChatListResponse as ChatListResponse,
    type ChatCreateParams as ChatCreateParams,
    type ChatListParams as ChatListParams,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };

  export {
    Agents as Agents,
    type ChatSettings as ChatSettings,
    type AgentGenerateMessageVoiceResponse as AgentGenerateMessageVoiceResponse,
    type AgentGetMessagesResponse as AgentGetMessagesResponse,
    type AgentUpdateSettingsResponse as AgentUpdateSettingsResponse,
    type AgentGenerateMessageVoiceParams as AgentGenerateMessageVoiceParams,
    type AgentGetMessagesParams as AgentGetMessagesParams,
    type AgentUpdateSettingsParams as AgentUpdateSettingsParams,
  };
}
