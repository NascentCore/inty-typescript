// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from './ai/agents/agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class CharacterThemes extends APIResource {
  /**
   * 获取角色主题专区列表。普通用户只能看到可见专区（第一展示、第二展示），管理员可通
   * 过 include_hidden 参数查看所有专区
   *
   * @example
   * ```ts
   * const apiResponseListCharacterTheme =
   *   await client.api.v1.characterThemes.list();
   * ```
   */
  list(
    query: CharacterThemeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIResponseListCharacterTheme> {
    return this._client.get('/api/v1/character-themes/', { query, ...options });
  }
}

export interface APIResponseListCharacterTheme {
  code?: number;

  data?: Array<CharacterTheme> | null;

  message?: string;
}

/**
 * 角色主题专区完整响应模型
 */
export interface CharacterTheme {
  /**
   * 专区 ID
   */
  id: string;

  /**
   * 创建时间
   */
  created_at: string;

  /**
   * 专区名称
   */
  name: string;

  /**
   * 可见性：第一展示、第二展示、不可见
   */
  visibility: CharacterThemeVisibility;

  /**
   * 专区中的角色列表（按顺序）
   */
  agents?: Array<CharacterTheme.Agent>;

  /**
   * 背景图 URL 地址
   */
  background_image_url?: string | null;

  /**
   * 专区描述
   */
  description?: string | null;

  /**
   * 更新时间
   */
  updated_at?: string | null;
}

export namespace CharacterTheme {
  /**
   * 专区中的角色信息
   */
  export interface Agent {
    /**
     * 角色 ID
     */
    agent_id: string;

    /**
     * 角色在专区中的顺序（从 0 开始）
     */
    order_index: number;

    /**
     * AI 角色，在 sqlalchemy 模型基础上添加额外多表查询来的数据
     */
    agent?: AgentsAPI.Agent | null;
  }
}

/**
 * 角色主题专区可见性
 */
export type CharacterThemeVisibility = 'PRIMARY' | 'SECONDARY' | 'HIDDEN';

export interface CharacterThemeListParams {
  /**
   * 是否包含不可见的专区（仅管理员可用）
   */
  include_hidden?: boolean;

  /**
   * 返回的记录数
   */
  limit?: number;

  /**
   * 跳过的记录数
   */
  skip?: number;
}

export declare namespace CharacterThemes {
  export {
    type APIResponseListCharacterTheme as APIResponseListCharacterTheme,
    type CharacterTheme as CharacterTheme,
    type CharacterThemeVisibility as CharacterThemeVisibility,
    type CharacterThemeListParams as CharacterThemeListParams,
  };
}
