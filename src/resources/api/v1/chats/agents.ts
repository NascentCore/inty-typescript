// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Agents extends APIResource {
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
   * Get chat settings by Agent ID, bause we only support 1 chat per agent, so we do
   * not use chat_id to get settings
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

export type AgentGetMessagesResponse = unknown;

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

export declare namespace Agents {
  export {
    type ChatSettings as ChatSettings,
    type AgentGetMessagesResponse as AgentGetMessagesResponse,
    type AgentGetMessagesParams as AgentGetMessagesParams,
  };
}
