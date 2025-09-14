// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Agents extends APIResource {
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

export type AgentGenerateMessageVoiceResponse = unknown;

export type AgentGetMessagesResponse = unknown;

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

export declare namespace Agents {
  export {
    type ChatSettings as ChatSettings,
    type AgentGenerateMessageVoiceResponse as AgentGenerateMessageVoiceResponse,
    type AgentGetMessagesResponse as AgentGetMessagesResponse,
    type AgentGenerateMessageVoiceParams as AgentGenerateMessageVoiceParams,
    type AgentGetMessagesParams as AgentGetMessagesParams,
  };
}
