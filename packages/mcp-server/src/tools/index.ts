// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import health_check_client from './top-level/health-check-client';
import list_notifications_api_v1 from './api/v1/list-notifications-api-v1';
import upload_image_api_v1 from './api/v1/upload-image-api-v1';
import create_guest_v1_api_auth from './api/v1/auth/create-guest-v1-api-auth';
import login_auth_v1_api_google from './api/v1/auth/google/login-auth-v1-api-google';
import delete_account_v1_api_users from './api/v1/users/delete-account-v1-api-users';
import retrieve_users_v1_api_profile from './api/v1/users/profile/retrieve-users-v1-api-profile';
import update_users_v1_api_profile from './api/v1/users/profile/update-users-v1-api-profile';
import register_users_v1_api_device from './api/v1/users/device/register-users-v1-api-device';
import check_eligibility_users_v1_api_deletion from './api/v1/users/deletion/check-eligibility-users-v1-api-deletion';
import create_v1_api_report from './api/v1/report/create-v1-api-report';
import upload_image_v1_api_report from './api/v1/report/upload-image-v1-api-report';
import create_ai_v1_api_agents from './api/v1/ai/agents/create-ai-v1-api-agents';
import retrieve_ai_v1_api_agents from './api/v1/ai/agents/retrieve-ai-v1-api-agents';
import update_ai_v1_api_agents from './api/v1/ai/agents/update-ai-v1-api-agents';
import list_ai_v1_api_agents from './api/v1/ai/agents/list-ai-v1-api-agents';
import delete_ai_v1_api_agents from './api/v1/ai/agents/delete-ai-v1-api-agents';
import follow_agent_ai_v1_api_agents from './api/v1/ai/agents/follow-agent-ai-v1-api-agents';
import following_ai_v1_api_agents from './api/v1/ai/agents/following-ai-v1-api-agents';
import recommend_ai_v1_api_agents from './api/v1/ai/agents/recommend-ai-v1-api-agents';
import search_ai_v1_api_agents from './api/v1/ai/agents/search-ai-v1-api-agents';
import unfollow_agent_ai_v1_api_agents from './api/v1/ai/agents/unfollow-agent-ai-v1-api-agents';
import retrieve_v1_api_settings from './api/v1/settings/retrieve-v1-api-settings';
import update_v1_api_settings from './api/v1/settings/update-v1-api-settings';
import get_status_v1_api_subscription from './api/v1/subscription/get-status-v1-api-subscription';
import get_usage_v1_api_subscription from './api/v1/subscription/get-usage-v1-api-subscription';
import list_plans_v1_api_subscription from './api/v1/subscription/list-plans-v1-api-subscription';
import verify_v1_api_subscription from './api/v1/subscription/verify-v1-api-subscription';
import webhook_v1_api_subscription from './api/v1/subscription/webhook-v1-api-subscription';
import process_refund_subscription_v1_api_admin from './api/v1/subscription/admin/process-refund-subscription-v1-api-admin';
import create_admin_subscription_v1_api_plans from './api/v1/subscription/admin/plans/create-admin-subscription-v1-api-plans';
import list_admin_subscription_v1_api_plans from './api/v1/subscription/admin/plans/list-admin-subscription-v1-api-plans';
import get_subscription_status_admin_subscription_v1_api_users from './api/v1/subscription/admin/users/get-subscription-status-admin-subscription-v1-api-users';
import get_usage_statistics_admin_subscription_v1_api_users from './api/v1/subscription/admin/users/get-usage-statistics-admin-subscription-v1-api-users';
import check_v1_api_version from './api/v1/version/check-v1-api-version';
import create_v1_api_chats from './api/v1/chats/create-v1-api-chats';
import list_v1_api_chats from './api/v1/chats/list-v1-api-chats';
import delete_v1_api_chats from './api/v1/chats/delete-v1-api-chats';
import create_completion_v1_api_chats from './api/v1/chats/create-completion-v1-api-chats';
import get_messages_chats_v1_api_agents from './api/v1/chats/agents/get-messages-chats-v1-api-agents';
import get_settings_chats_v1_api_agents from './api/v1/chats/agents/get-settings-chats-v1-api-agents';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(health_check_client);
addEndpoint(list_notifications_api_v1);
addEndpoint(upload_image_api_v1);
addEndpoint(create_guest_v1_api_auth);
addEndpoint(login_auth_v1_api_google);
addEndpoint(delete_account_v1_api_users);
addEndpoint(retrieve_users_v1_api_profile);
addEndpoint(update_users_v1_api_profile);
addEndpoint(register_users_v1_api_device);
addEndpoint(check_eligibility_users_v1_api_deletion);
addEndpoint(create_v1_api_report);
addEndpoint(upload_image_v1_api_report);
addEndpoint(create_ai_v1_api_agents);
addEndpoint(retrieve_ai_v1_api_agents);
addEndpoint(update_ai_v1_api_agents);
addEndpoint(list_ai_v1_api_agents);
addEndpoint(delete_ai_v1_api_agents);
addEndpoint(follow_agent_ai_v1_api_agents);
addEndpoint(following_ai_v1_api_agents);
addEndpoint(recommend_ai_v1_api_agents);
addEndpoint(search_ai_v1_api_agents);
addEndpoint(unfollow_agent_ai_v1_api_agents);
addEndpoint(retrieve_v1_api_settings);
addEndpoint(update_v1_api_settings);
addEndpoint(get_status_v1_api_subscription);
addEndpoint(get_usage_v1_api_subscription);
addEndpoint(list_plans_v1_api_subscription);
addEndpoint(verify_v1_api_subscription);
addEndpoint(webhook_v1_api_subscription);
addEndpoint(process_refund_subscription_v1_api_admin);
addEndpoint(create_admin_subscription_v1_api_plans);
addEndpoint(list_admin_subscription_v1_api_plans);
addEndpoint(get_subscription_status_admin_subscription_v1_api_users);
addEndpoint(get_usage_statistics_admin_subscription_v1_api_users);
addEndpoint(check_v1_api_version);
addEndpoint(create_v1_api_chats);
addEndpoint(list_v1_api_chats);
addEndpoint(delete_v1_api_chats);
addEndpoint(create_completion_v1_api_chats);
addEndpoint(get_messages_chats_v1_api_agents);
addEndpoint(get_settings_chats_v1_api_agents);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
