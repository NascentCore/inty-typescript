// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AgentsAPI from './agents';
import * as ReportAPI from '../report';
import * as ProfileAPI from '../users/profile';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Create new AI agent, used by app and inty-eval
   *
   * @example
   * ```ts
   * const apiResponseAgent =
   *   await client.api.v1.ai.agents.create({
   *     gender: 'gender',
   *     name: 'name',
   *   });
   * ```
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<APIResponseAgent> {
    return this._client.post('/api/v1/ai/agents', { body, ...options });
  }

  /**
   * Get public agent by ID, include pre-generated agents and user-created public
   * agents
   *
   * @example
   * ```ts
   * const agent = await client.api.v1.ai.agents.retrieve(
   *   'agent_id',
   * );
   * ```
   */
  retrieve(agentID: string, options?: RequestOptions): APIPromise<Agent> {
    return this._client.get(path`/api/v1/ai/agents/${agentID}`, options);
  }

  /**
   * 更新任何图片，都会将图片全部记录在 background_images 字段中，用于保存历史记录如
   * 果没有提供 avatar，则会自动截取头像，并记录在 avatar 字段中
   *
   * @example
   * ```ts
   * const agent = await client.api.v1.ai.agents.update(
   *   'agent_id',
   * );
   * ```
   */
  update(agentID: string, body: AgentUpdateParams, options?: RequestOptions): APIPromise<Agent> {
    return this._client.put(path`/api/v1/ai/agents/${agentID}`, { body, ...options });
  }

  /**
   * This endpoint is used by an registered user to list their created AI characters
   * (agents as a misnomer)
   *
   * @example
   * ```ts
   * const agents = await client.api.v1.ai.agents.list();
   * ```
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/api/v1/ai/agents/me', { query, ...options });
  }

  /**
   * Delete AI agent
   *
   * @example
   * ```ts
   * const apiResponseAgent =
   *   await client.api.v1.ai.agents.delete('agent_id');
   * ```
   */
  delete(agentID: string, options?: RequestOptions): APIPromise<APIResponseAgent> {
    return this._client.delete(path`/api/v1/ai/agents/${agentID}`, options);
  }

  /**
   * Follow AI agent
   *
   * @example
   * ```ts
   * const apiResponseDict =
   *   await client.api.v1.ai.agents.followAgent('agent_id');
   * ```
   */
  followAgent(agentID: string, options?: RequestOptions): APIPromise<ReportAPI.APIResponseDict> {
    return this._client.post(path`/api/v1/ai/agents/${agentID}/follow`, options);
  }

  /**
   * Get current user's followed AI agents list
   *
   * @example
   * ```ts
   * const apiResponsePaginationDataAgent =
   *   await client.api.v1.ai.agents.following();
   * ```
   */
  following(
    query: AgentFollowingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIResponsePaginationDataAgent> {
    return this._client.get('/api/v1/ai/agents/following', { query, ...options });
  }

  /**
   * Get recommended AI agents list (public and approved agents), sort_seed is
   * required when sort is random, which is used to ensure deterministic order for
   * the random sort option
   *
   * @example
   * ```ts
   * const apiResponsePaginationDataAgent =
   *   await client.api.v1.ai.agents.recommend();
   * ```
   */
  recommend(
    query: AgentRecommendParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIResponsePaginationDataAgent> {
    return this._client.get('/api/v1/ai/agents/recommend', { query, ...options });
  }

  /**
   * Search public AI agents Support fuzzy search by name, description, category
   *
   * @example
   * ```ts
   * const apiResponsePaginationDataAgent =
   *   await client.api.v1.ai.agents.search({ q: 'q' });
   * ```
   */
  search(query: AgentSearchParams, options?: RequestOptions): APIPromise<APIResponsePaginationDataAgent> {
    return this._client.get('/api/v1/ai/agents/search', { query, ...options });
  }

  /**
   * Unfollow AI agent
   *
   * @example
   * ```ts
   * const apiResponseDict =
   *   await client.api.v1.ai.agents.unfollowAgent('agent_id');
   * ```
   */
  unfollowAgent(agentID: string, options?: RequestOptions): APIPromise<ReportAPI.APIResponseDict> {
    return this._client.delete(path`/api/v1/ai/agents/${agentID}/follow`, options);
  }
}

/**
 * AI 角色，在 sqlalchemy 模型基础上添加额外多表查询来的数据
 */
export interface Agent {
  id: string;

  created_at: number;

  gender: string;

  name: string;

  readable_id: string;

  /**
   * AI 角色状态
   */
  status: 'PENDING' | 'APPROVED' | 'REJECTED';

  alternate_greetings?: Array<string> | null;

  avatar?: string | null;

  /**
   * Image size
   */
  avatar_size?: Agent.AvatarSize | null;

  background?: string | null;

  background_images?: Array<string> | null;

  /**
   * Image size
   */
  background_size?: Agent.BackgroundSize | null;

  category?: string | null;

  character_book?: { [key: string]: unknown } | null;

  character_card_spec?: string | null;

  character_version?: string | null;

  connector_count?: number;

  /**
   * 返回给客户端的用户信息
   */
  creator?: ProfileAPI.User | null;

  creator_id?: string | null;

  /**
   * 创作者备注
   */
  creator_notes?: string | null;

  deleted_at?: number | null;

  extensions?: { [key: string]: unknown } | null;

  follower_count?: number;

  intro?: string | null;

  is_followed?: boolean;

  /**
   * AI 模型配置
   */
  llm_config?: ModelConfig | null;

  /**
   * 主提示词 - 作为第一个 system message，覆盖全局默认主提示词
   */
  main_prompt?: string | null;

  /**
   * 对话示例
   */
  message_example?: string | null;

  /**
   * Agent 元数据模型
   */
  meta_data?: Agent.MetaData | null;

  /**
   * 模式提示词 - 放在角色卡提示词后面，覆盖全局默认模式提示词
   */
  mode_prompt?: string | null;

  opening?: string | null;

  opening_audio_url?: string | null;

  /**
   * 角色性格特点 (推荐)
   */
  personality?: string | null;

  photos?: Array<string> | null;

  post_history_instructions?: string | null;

  /**
   * @deprecated 已废弃 - 请使用 personality 字段代替
   */
  prompt?: string | null;

  /**
   * 背景设定 (推荐)
   */
  scenario?: string | null;

  settings?: { [key: string]: unknown } | null;

  tags?: Array<string> | null;

  updated_at?: number | null;

  user?: string | null;

  /**
   * AI 角色可见性
   */
  visibility?: AgentVisibility;

  voice_id?: string | null;
}

export namespace Agent {
  /**
   * Image size
   */
  export interface AvatarSize {
    height: number;

    width: number;
  }

  /**
   * Image size
   */
  export interface BackgroundSize {
    height: number;

    width: number;
  }

  /**
   * Agent 元数据模型
   */
  export interface MetaData {
    /**
     * Agent 备注信息
     */
    comment?: string | null;

    /**
     * Agent 评分
     */
    score?: number | null;
  }
}

/**
 * AI 角色可见性
 */
export type AgentVisibility = 'PUBLIC' | 'PRIVATE';

export interface APIResponseAgent {
  code?: number;

  /**
   * AI 角色，在 sqlalchemy 模型基础上添加额外多表查询来的数据
   */
  data?: Agent | null;

  message?: string;
}

export interface APIResponsePaginationDataAgent {
  code?: number;

  data?: APIResponsePaginationDataAgent.Data | null;

  message?: string;
}

export namespace APIResponsePaginationDataAgent {
  export interface Data {
    list?: Array<AgentsAPI.Agent>;

    page?: number;

    page_size?: number;

    total?: number;

    total_pages?: number;
  }
}

/**
 * AI 模型配置
 */
export interface ModelConfig {
  api_key?: string | null;

  base_url?: string | null;

  /**
   * Frequency penalty
   */
  frequency_penalty?: number | null;

  /**
   * Maximum tokens in response
   */
  max_tokens?: number | null;

  model?: string | null;

  /**
   * Presence penalty
   */
  presence_penalty?: number | null;

  /**
   * Temperature for response generation
   */
  temperature?: number | null;

  /**
   * Top-k sampling parameter
   */
  top_k?: number | null;

  /**
   * Top-p sampling parameter
   */
  top_p?: number | null;
}

export interface AgentListResponse {
  code?: number;

  data?: Array<Agent> | null;

  message?: string;
}

export interface AgentCreateParams {
  gender: string;

  name: string;

  alternate_greetings?: Array<string> | null;

  avatar?: string | null;

  background?: string | null;

  background_images?: Array<string> | null;

  category?: string | null;

  character_book?: { [key: string]: unknown } | null;

  character_card_spec?: string | null;

  character_version?: string | null;

  /**
   * 创作者备注
   */
  creator_notes?: string | null;

  extensions?: { [key: string]: unknown } | null;

  intro?: string | null;

  /**
   * AI 模型配置
   */
  llm_config?: ModelConfig | null;

  /**
   * 主提示词 - 作为第一个 system message，覆盖全局默认主提示词
   */
  main_prompt?: string | null;

  /**
   * 对话示例
   */
  message_example?: string | null;

  /**
   * Agent 元数据模型
   */
  meta_data?: AgentCreateParams.MetaData | null;

  /**
   * 模式提示词 - 放在角色卡提示词后面，覆盖全局默认模式提示词
   */
  mode_prompt?: string | null;

  opening?: string | null;

  opening_audio_url?: string | null;

  /**
   * 角色性格特点 (推荐)
   */
  personality?: string | null;

  photos?: Array<string> | null;

  post_history_instructions?: string | null;

  /**
   * @deprecated 已废弃 - 请使用 personality 字段代替
   */
  prompt?: string | null;

  request_id?: string | null;

  /**
   * 背景设定 (推荐)
   */
  scenario?: string | null;

  settings?: { [key: string]: unknown } | null;

  tags?: Array<string> | null;

  /**
   * AI 角色可见性
   */
  visibility?: AgentVisibility;

  voice_id?: string | null;
}

export namespace AgentCreateParams {
  /**
   * Agent 元数据模型
   */
  export interface MetaData {
    /**
     * Agent 备注信息
     */
    comment?: string | null;

    /**
     * Agent 评分
     */
    score?: number | null;
  }
}

export interface AgentUpdateParams {
  alternate_greetings?: Array<string> | null;

  avatar?: string | null;

  background?: string | null;

  background_images?: Array<string> | null;

  category?: string | null;

  character_book?: { [key: string]: unknown } | null;

  character_card_spec?: string | null;

  character_version?: string | null;

  creator_notes?: string | null;

  extensions?: { [key: string]: unknown } | null;

  gender?: string | null;

  intro?: string | null;

  /**
   * AI 模型配置
   */
  llm_config?: ModelConfig | null;

  main_prompt?: string | null;

  message_example?: string | null;

  /**
   * Agent 元数据模型
   */
  meta_data?: AgentUpdateParams.MetaData | null;

  mode_prompt?: string | null;

  name?: string | null;

  opening?: string | null;

  opening_audio_url?: string | null;

  personality?: string | null;

  photos?: Array<string> | null;

  post_history_instructions?: string | null;

  /**
   * @deprecated 已废弃 - 请使用 personality 字段代替
   */
  prompt?: string | null;

  request_id?: string | null;

  scenario?: string | null;

  settings?: { [key: string]: unknown } | null;

  tags?: Array<string> | null;

  /**
   * AI 角色可见性
   */
  visibility?: AgentVisibility | null;

  voice_id?: string | null;
}

export namespace AgentUpdateParams {
  /**
   * Agent 元数据模型
   */
  export interface MetaData {
    /**
     * Agent 备注信息
     */
    comment?: string | null;

    /**
     * Agent 评分
     */
    score?: number | null;
  }
}

export interface AgentListParams {
  limit?: number;

  skip?: number;
}

export interface AgentFollowingParams {
  /**
   * Page number, starting from 1
   */
  page?: number;

  /**
   * Items per page, maximum 100
   */
  page_size?: number;
}

export interface AgentRecommendParams {
  /**
   * Page number, starting from 1
   */
  page?: number;

  /**
   * Items per page, maximum 100
   */
  page_size?: number;

  /**
   * Sort order: created_asc, created_desc, random, score_based_random
   */
  sort?: 'created_asc' | 'created_desc' | 'random' | 'score_based_random';

  /**
   * Sort seed for deterministic random ordering
   */
  sort_seed?: string;
}

export interface AgentSearchParams {
  /**
   * Search keyword
   */
  q: string;

  /**
   * Page number, starting from 1
   */
  page?: number;

  /**
   * Items per page, maximum 100
   */
  page_size?: number;
}

export declare namespace Agents {
  export {
    type Agent as Agent,
    type AgentVisibility as AgentVisibility,
    type APIResponseAgent as APIResponseAgent,
    type APIResponsePaginationDataAgent as APIResponsePaginationDataAgent,
    type ModelConfig as ModelConfig,
    type AgentListResponse as AgentListResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentFollowingParams as AgentFollowingParams,
    type AgentRecommendParams as AgentRecommendParams,
    type AgentSearchParams as AgentSearchParams,
  };
}
