// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ReportAPI from './report';
import { APIResponseDict, Report, ReportCreateParams } from './report';
import * as SettingsAPI from './settings';
import { SettingUpdateParams, Settings } from './settings';
import * as VersionAPI from './version';
import { Version, VersionCheckParams, VersionCheckResponse } from './version';
import * as AIAPI from './ai/ai';
import { AI } from './ai/ai';
import * as AuthAPI from './auth/auth';
import { Auth, AuthCreateGuestParams, AuthCreateGuestResponse } from './auth/auth';
import * as ChatsAPI from './chats/chats';
import {
  Chat,
  ChatCreateCompletionParams,
  ChatCreateParams,
  ChatListParams,
  ChatListResponse,
  Chats,
} from './chats/chats';
import * as SubscriptionAPI from './subscription/subscription';
import {
  APIResponseSubscriptionStatus,
  APIResponseUsageStatistics,
  Subscription,
  SubscriptionListPlansResponse,
  SubscriptionVerifyParams,
  SubscriptionVerifyResponse,
  SubscriptionWebhookResponse,
  UserSubscription,
} from './subscription/subscription';
import * as UsersAPI from './users/users';
import { UserDeleteAccountParams, UserDeleteAccountResponse, Users } from './users/users';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';

export class V1 extends APIResource {
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  report: ReportAPI.Report = new ReportAPI.Report(this._client);
  ai: AIAPI.AI = new AIAPI.AI(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  subscription: SubscriptionAPI.Subscription = new SubscriptionAPI.Subscription(this._client);
  version: VersionAPI.Version = new VersionAPI.Version(this._client);
  chats: ChatsAPI.Chats = new ChatsAPI.Chats(this._client);

  /**
   * 分页查询用户的消息列表；返回用户收到的通知。
   *
   * @example
   * ```ts
   * const response = await client.api.v1.listNotifications();
   * ```
   */
  listNotifications(
    query: V1ListNotificationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1ListNotificationsResponse> {
    return this._client.get('/api/v1/notifications/', { query, ...options });
  }

  /**
   * Upload image file with validation, compression, and GCS storage
   *
   * @example
   * ```ts
   * const apiResponseDict = await client.api.v1.uploadImage({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  uploadImage(body: V1UploadImageParams, options?: RequestOptions): APIPromise<ReportAPI.APIResponseDict> {
    return this._client.post(
      '/api/v1/images',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface V1ListNotificationsResponse {
  code?: number;

  /**
   * Specific model for a paginated list of notification items.
   */
  data?: V1ListNotificationsResponse.Data | null;

  message?: string;
}

export namespace V1ListNotificationsResponse {
  /**
   * Specific model for a paginated list of notification items.
   */
  export interface Data {
    items?: Array<Data.Item>;

    page?: number;

    page_size?: number;

    total?: number;

    total_pages?: number;
  }

  export namespace Data {
    /**
     * 通知项
     */
    export interface Item {
      id: string;

      content: string | null;

      created_at: string;

      image_urls: Array<string> | null;

      is_read: boolean;

      link_urls: Array<string> | null;

      read_at: string | null;

      template_id: number | null;

      title: string | null;

      type: number;
    }
  }
}

export interface V1ListNotificationsParams {
  /**
   * 是否已读，不传则查询全部
   */
  is_read?: boolean | null;

  page?: number;

  page_size?: number;
}

export interface V1UploadImageParams {
  file: Uploadable;

  cropping_avatar?: boolean;
}

V1.Auth = Auth;
V1.Users = Users;
V1.Report = Report;
V1.AI = AI;
V1.Subscription = Subscription;
V1.Version = Version;
V1.Chats = Chats;

export declare namespace V1 {
  export {
    type V1ListNotificationsResponse as V1ListNotificationsResponse,
    type V1ListNotificationsParams as V1ListNotificationsParams,
    type V1UploadImageParams as V1UploadImageParams,
  };

  export {
    Auth as Auth,
    type AuthCreateGuestResponse as AuthCreateGuestResponse,
    type AuthCreateGuestParams as AuthCreateGuestParams,
  };

  export {
    Users as Users,
    type UserDeleteAccountResponse as UserDeleteAccountResponse,
    type UserDeleteAccountParams as UserDeleteAccountParams,
  };

  export {
    Report as Report,
    type APIResponseDict as APIResponseDict,
    type ReportCreateParams as ReportCreateParams,
  };

  export { AI as AI };

  export { type Settings as Settings, type SettingUpdateParams as SettingUpdateParams };

  export {
    Subscription as Subscription,
    type APIResponseSubscriptionStatus as APIResponseSubscriptionStatus,
    type APIResponseUsageStatistics as APIResponseUsageStatistics,
    type UserSubscription as UserSubscription,
    type SubscriptionListPlansResponse as SubscriptionListPlansResponse,
    type SubscriptionVerifyResponse as SubscriptionVerifyResponse,
    type SubscriptionWebhookResponse as SubscriptionWebhookResponse,
    type SubscriptionVerifyParams as SubscriptionVerifyParams,
  };

  export {
    Version as Version,
    type VersionCheckResponse as VersionCheckResponse,
    type VersionCheckParams as VersionCheckParams,
  };

  export {
    Chats as Chats,
    type Chat as Chat,
    type ChatListResponse as ChatListResponse,
    type ChatCreateParams as ChatCreateParams,
    type ChatListParams as ChatListParams,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}
