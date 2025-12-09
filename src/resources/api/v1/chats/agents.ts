// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AgentsAPI from './agents';
import * as ReportAPI from '../report';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Clear chat messages by Agent ID, currently used by inty-eval, probably will be
   * used by inty app as well.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.chats.agents.clearMessages(
   *     'agent_id',
   *   );
   * ```
   */
  clearMessages(
    agentID: string,
    body: AgentClearMessagesParams,
    options?: RequestOptions,
  ): APIPromise<AgentClearMessagesResponse> {
    return this._client.post(path`/api/v1/chats/agents/${agentID}/clear-messages`, { body, ...options });
  }

  /**
   * Generate voice for a message
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.chats.agents.generateMessageVoice(
   *     'message_id',
   *     { agent_id: 'agent_id' },
   *   );
   * ```
   */
  generateMessageVoice(
    messageID: string,
    params: AgentGenerateMessageVoiceParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { agent_id, language } = params;
    return this._client.post(path`/api/v1/chats/agents/${agent_id}/messages/${messageID}/voice`, {
      query: { language },
      ...options,
    });
  }

  /**
   * Get only chat message records by Agent ID (lighter interface)
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.chats.agents.getMessages('agent_id');
   * ```
   */
  getMessages(
    agentID: string,
    query: AgentGetMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/api/v1/chats/agents/${agentID}/messages`, { query, ...options });
  }

  /**
   * [Deprecated, use /chats/{chat_id}/settings instead] Get chat settings by Agent
   * ID, bause we only support 1 chat per agent, so we do not use chat_id to get
   * settings
   *
   * @example
   * ```ts
   * const chatSettings =
   *   await client.api.v1.chats.agents.getSettings('agent_id');
   * ```
   */
  getSettings(agentID: string, options?: RequestOptions): APIPromise<ChatSettings> {
    return this._client.get(path`/api/v1/chats/agents/${agentID}/settings`, options);
  }

  /**
   * We do not use chat_id to get settings, because we only support 1 chat per
   * agent.TODO: We should switch to /chats/{chat_id}/settings
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.chats.agents.updateSettings(
   *     'agent_id',
   *   );
   * ```
   */
  updateSettings(
    agentID: string,
    body: AgentUpdateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<AgentUpdateSettingsResponse> {
    return this._client.put(path`/api/v1/chats/agents/${agentID}/settings`, { body, ...options });
  }
}

/**
 * 聊天设置
 */
export interface ChatSettings {
  id: string;

  agent_id: string;

  chat_id: string;

  created_at: string;

  user_id: string;

  language?: string;

  premium_mode?: boolean;

  style_prompt?: string | null;

  updated_at?: string | null;

  voice_enabled?: boolean;
}

/**
 * 清除消息响应
 */
export interface AgentClearMessagesResponse {
  deleted_count: number;

  message: string;

  success: boolean;

  cutoff_timestamp?: string | null;

  deleted_time_range?: { [key: string]: unknown } | null;

  target_message?: { [key: string]: unknown } | null;
}

export type AgentGenerateMessageVoiceResponse = unknown;

export type AgentGetMessagesResponse = unknown;

export type AgentUpdateSettingsResponse =
  | AgentUpdateSettingsResponse.APIResponseChatSettings
  | ReportAPI.APIResponseDict;

export namespace AgentUpdateSettingsResponse {
  export interface APIResponseChatSettings {
    code?: number;

    /**
     * 聊天设置
     */
    data?: AgentsAPI.ChatSettings | null;

    message?: string;
  }
}

export interface AgentClearMessagesParams {
  message_id?: number | null;

  request_id?: string | null;

  timestamp?: string | null;
}

export interface AgentGenerateMessageVoiceParams {
  /**
   * Path param:
   */
  agent_id: string;

  /**
   * Query param: 语言代码
   */
  language?: string;
}

export interface AgentGetMessagesParams {
  /**
   * Number of messages per page
   */
  limit?: number;

  /**
   * Offset
   */
  offset?: number;

  /**
   * Sort order: asc=old messages first, desc=new messages first
   */
  order?: string;
}

export interface AgentUpdateSettingsParams {
  language?: string | null;

  premium_mode?: boolean | null;

  request_id?: string | null;

  style_prompt?: string | null;

  voice_enabled?: boolean | null;
}

export declare namespace Agents {
  export {
    type ChatSettings as ChatSettings,
    type AgentClearMessagesResponse as AgentClearMessagesResponse,
    type AgentGenerateMessageVoiceResponse as AgentGenerateMessageVoiceResponse,
    type AgentGetMessagesResponse as AgentGetMessagesResponse,
    type AgentUpdateSettingsResponse as AgentUpdateSettingsResponse,
    type AgentClearMessagesParams as AgentClearMessagesParams,
    type AgentGenerateMessageVoiceParams as AgentGenerateMessageVoiceParams,
    type AgentGetMessagesParams as AgentGetMessagesParams,
    type AgentUpdateSettingsParams as AgentUpdateSettingsParams,
  };
}
