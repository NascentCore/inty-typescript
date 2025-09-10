# Inty

Types:

- <code><a href="./src/resources/top-level.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">healthCheck</a>() -> unknown</code>

# API

## V1

Types:

- <code><a href="./src/resources/api/v1/v1.ts">V1ListNotificationsResponse</a></code>

Methods:

- <code title="get /api/v1/notifications/">client.api.v1.<a href="./src/resources/api/v1/v1.ts">listNotifications</a>({ ...params }) -> V1ListNotificationsResponse</code>
- <code title="post /api/v1/images">client.api.v1.<a href="./src/resources/api/v1/v1.ts">uploadImage</a>({ ...params }) -> APIResponseDict</code>

### Auth

Types:

- <code><a href="./src/resources/api/v1/auth/auth.ts">AuthCreateGuestResponse</a></code>

Methods:

- <code title="post /api/v1/auth/guest">client.api.v1.auth.<a href="./src/resources/api/v1/auth/auth.ts">createGuest</a>({ ...params }) -> AuthCreateGuestResponse</code>

#### Google

Types:

- <code><a href="./src/resources/api/v1/auth/google.ts">GoogleLoginResponse</a></code>

Methods:

- <code title="post /api/v1/auth/google/login">client.api.v1.auth.google.<a href="./src/resources/api/v1/auth/google.ts">login</a>({ ...params }) -> GoogleLoginResponse</code>

### Users

Types:

- <code><a href="./src/resources/api/v1/users/users.ts">UserDeleteAccountResponse</a></code>

Methods:

- <code title="post /api/v1/users/delete-account">client.api.v1.users.<a href="./src/resources/api/v1/users/users.ts">deleteAccount</a>({ ...params }) -> UserDeleteAccountResponse</code>

#### Profile

Types:

- <code><a href="./src/resources/api/v1/users/profile.ts">Gender</a></code>
- <code><a href="./src/resources/api/v1/users/profile.ts">User</a></code>

Methods:

- <code title="get /api/v1/users/profile">client.api.v1.users.profile.<a href="./src/resources/api/v1/users/profile.ts">retrieve</a>() -> User</code>
- <code title="put /api/v1/users/profile">client.api.v1.users.profile.<a href="./src/resources/api/v1/users/profile.ts">update</a>({ ...params }) -> User</code>

#### Device

Types:

- <code><a href="./src/resources/api/v1/users/device.ts">APIResponse</a></code>

Methods:

- <code title="post /api/v1/users/device/register">client.api.v1.users.device.<a href="./src/resources/api/v1/users/device.ts">register</a>({ ...params }) -> APIResponse</code>

#### Deletion

Types:

- <code><a href="./src/resources/api/v1/users/deletion.ts">DeletionCheckEligibilityResponse</a></code>

Methods:

- <code title="get /api/v1/users/deletion/check">client.api.v1.users.deletion.<a href="./src/resources/api/v1/users/deletion.ts">checkEligibility</a>() -> DeletionCheckEligibilityResponse</code>

### Report

Types:

- <code><a href="./src/resources/api/v1/report.ts">APIResponseDict</a></code>

Methods:

- <code title="post /api/v1/report/">client.api.v1.report.<a href="./src/resources/api/v1/report.ts">create</a>({ ...params }) -> APIResponse</code>
- <code title="post /api/v1/report/upload-image">client.api.v1.report.<a href="./src/resources/api/v1/report.ts">uploadImage</a>({ ...params }) -> APIResponseDict</code>

### AI

#### Agents

Types:

- <code><a href="./src/resources/api/v1/ai/agents.ts">Agent</a></code>
- <code><a href="./src/resources/api/v1/ai/agents.ts">AgentVisibility</a></code>
- <code><a href="./src/resources/api/v1/ai/agents.ts">APIResponseAgent</a></code>
- <code><a href="./src/resources/api/v1/ai/agents.ts">APIResponsePaginationDataAgent</a></code>
- <code><a href="./src/resources/api/v1/ai/agents.ts">ModelConfig</a></code>
- <code><a href="./src/resources/api/v1/ai/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="post /api/v1/ai/agents">client.api.v1.ai.agents.<a href="./src/resources/api/v1/ai/agents.ts">create</a>({ ...params }) -> APIResponseAgent</code>
- <code title="get /api/v1/ai/agents/{agent_id}">client.api.v1.ai.agents.<a href="./src/resources/api/v1/ai/agents.ts">retrieve</a>(agentID) -> Agent</code>
- <code title="put /api/v1/ai/agents/{agent_id}">client.api.v1.ai.agents.<a href="./src/resources/api/v1/ai/agents.ts">update</a>(agentID, { ...params }) -> Agent</code>
- <code title="get /api/v1/ai/agents/me">client.api.v1.ai.agents.<a href="./src/resources/api/v1/ai/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /api/v1/ai/agents/{agent_id}">client.api.v1.ai.agents.<a href="./src/resources/api/v1/ai/agents.ts">delete</a>(agentID) -> APIResponseAgent</code>
- <code title="post /api/v1/ai/agents/{agent_id}/follow">client.api.v1.ai.agents.<a href="./src/resources/api/v1/ai/agents.ts">followAgent</a>(agentID) -> APIResponseDict</code>
- <code title="get /api/v1/ai/agents/following">client.api.v1.ai.agents.<a href="./src/resources/api/v1/ai/agents.ts">following</a>({ ...params }) -> APIResponsePaginationDataAgent</code>
- <code title="get /api/v1/ai/agents/recommend">client.api.v1.ai.agents.<a href="./src/resources/api/v1/ai/agents.ts">recommend</a>({ ...params }) -> APIResponsePaginationDataAgent</code>
- <code title="get /api/v1/ai/agents/search">client.api.v1.ai.agents.<a href="./src/resources/api/v1/ai/agents.ts">search</a>({ ...params }) -> APIResponsePaginationDataAgent</code>
- <code title="delete /api/v1/ai/agents/{agent_id}/follow">client.api.v1.ai.agents.<a href="./src/resources/api/v1/ai/agents.ts">unfollowAgent</a>(agentID) -> APIResponseDict</code>

### Settings

Types:

- <code><a href="./src/resources/api/v1/settings.ts">Settings</a></code>

Methods:

- <code title="get /api/v1/settings/">client.api.v1.settings.<a href="./src/resources/api/v1/settings.ts">retrieve</a>() -> Settings</code>
- <code title="put /api/v1/settings/">client.api.v1.settings.<a href="./src/resources/api/v1/settings.ts">update</a>({ ...params }) -> Settings</code>

### Subscription

Types:

- <code><a href="./src/resources/api/v1/subscription/subscription.ts">APIResponseSubscriptionStatus</a></code>
- <code><a href="./src/resources/api/v1/subscription/subscription.ts">APIResponseUsageStatistics</a></code>
- <code><a href="./src/resources/api/v1/subscription/subscription.ts">UserSubscription</a></code>
- <code><a href="./src/resources/api/v1/subscription/subscription.ts">SubscriptionListPlansResponse</a></code>
- <code><a href="./src/resources/api/v1/subscription/subscription.ts">SubscriptionVerifyResponse</a></code>
- <code><a href="./src/resources/api/v1/subscription/subscription.ts">SubscriptionWebhookResponse</a></code>

Methods:

- <code title="get /api/v1/subscription/status">client.api.v1.subscription.<a href="./src/resources/api/v1/subscription/subscription.ts">getStatus</a>() -> APIResponseSubscriptionStatus</code>
- <code title="get /api/v1/subscription/usage">client.api.v1.subscription.<a href="./src/resources/api/v1/subscription/subscription.ts">getUsage</a>() -> APIResponseUsageStatistics</code>
- <code title="get /api/v1/subscription/plans">client.api.v1.subscription.<a href="./src/resources/api/v1/subscription/subscription.ts">listPlans</a>() -> SubscriptionListPlansResponse</code>
- <code title="post /api/v1/subscription/verify">client.api.v1.subscription.<a href="./src/resources/api/v1/subscription/subscription.ts">verify</a>({ ...params }) -> SubscriptionVerifyResponse</code>
- <code title="post /api/v1/subscription/webhook">client.api.v1.subscription.<a href="./src/resources/api/v1/subscription/subscription.ts">webhook</a>() -> SubscriptionWebhookResponse</code>

#### Admin

Types:

- <code><a href="./src/resources/api/v1/subscription/admin/admin.ts">AdminProcessRefundResponse</a></code>

Methods:

- <code title="post /api/v1/subscription/admin/refund">client.api.v1.subscription.admin.<a href="./src/resources/api/v1/subscription/admin/admin.ts">processRefund</a>({ ...params }) -> AdminProcessRefundResponse</code>

##### Plans

Types:

- <code><a href="./src/resources/api/v1/subscription/admin/plans.ts">SubscriptionPlan</a></code>
- <code><a href="./src/resources/api/v1/subscription/admin/plans.ts">SubscriptionPlanType</a></code>
- <code><a href="./src/resources/api/v1/subscription/admin/plans.ts">PlanCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/subscription/admin/plans.ts">PlanListResponse</a></code>

Methods:

- <code title="post /api/v1/subscription/admin/plans">client.api.v1.subscription.admin.plans.<a href="./src/resources/api/v1/subscription/admin/plans.ts">create</a>({ ...params }) -> PlanCreateResponse</code>
- <code title="get /api/v1/subscription/admin/plans">client.api.v1.subscription.admin.plans.<a href="./src/resources/api/v1/subscription/admin/plans.ts">list</a>({ ...params }) -> PlanListResponse</code>

##### Users

Methods:

- <code title="get /api/v1/subscription/admin/users/{user_id}/subscription">client.api.v1.subscription.admin.users.<a href="./src/resources/api/v1/subscription/admin/users.ts">getSubscriptionStatus</a>(userID) -> APIResponseSubscriptionStatus</code>
- <code title="get /api/v1/subscription/admin/users/{user_id}/usage">client.api.v1.subscription.admin.users.<a href="./src/resources/api/v1/subscription/admin/users.ts">getUsageStatistics</a>(userID) -> APIResponseUsageStatistics</code>

### Version

Types:

- <code><a href="./src/resources/api/v1/version.ts">VersionCheckResponse</a></code>

Methods:

- <code title="post /api/v1/version/check">client.api.v1.version.<a href="./src/resources/api/v1/version.ts">check</a>({ ...params }) -> VersionCheckResponse</code>

### Chats

Types:

- <code><a href="./src/resources/api/v1/chats/chats.ts">Chat</a></code>
- <code><a href="./src/resources/api/v1/chats/chats.ts">ChatListResponse</a></code>

Methods:

- <code title="post /api/v1/chats/">client.api.v1.chats.<a href="./src/resources/api/v1/chats/chats.ts">create</a>({ ...params }) -> Chat</code>
- <code title="get /api/v1/chats/">client.api.v1.chats.<a href="./src/resources/api/v1/chats/chats.ts">list</a>({ ...params }) -> ChatListResponse</code>
- <code title="delete /api/v1/chats/{chat_id}">client.api.v1.chats.<a href="./src/resources/api/v1/chats/chats.ts">delete</a>(chatID) -> Chat</code>
- <code title="post /api/v1/chat/completions/{agent_id}">client.api.v1.chats.<a href="./src/resources/api/v1/chats/chats.ts">createCompletion</a>(agentID, { ...params }) -> APIResponseDict</code>

#### Agents

Types:

- <code><a href="./src/resources/api/v1/chats/agents.ts">ChatSettings</a></code>
- <code><a href="./src/resources/api/v1/chats/agents.ts">AgentGenerateMessageVoiceResponse</a></code>
- <code><a href="./src/resources/api/v1/chats/agents.ts">AgentGetMessagesResponse</a></code>
- <code><a href="./src/resources/api/v1/chats/agents.ts">AgentUpdateChatSettingsResponse</a></code>

Methods:

- <code title="post /api/v1/chats/agents/{agent_id}/messages/{message_id}/voice">client.api.v1.chats.agents.<a href="./src/resources/api/v1/chats/agents.ts">generateMessageVoice</a>(messageID, { ...params }) -> unknown</code>
- <code title="get /api/v1/chats/agents/{agent_id}/messages">client.api.v1.chats.agents.<a href="./src/resources/api/v1/chats/agents.ts">getMessages</a>(agentID, { ...params }) -> unknown</code>
- <code title="get /api/v1/chats/agents/{agent_id}/settings">client.api.v1.chats.agents.<a href="./src/resources/api/v1/chats/agents.ts">getSettings</a>(agentID) -> ChatSettings</code>
- <code title="put /api/v1/chats/agents/{agent_id}/settings">client.api.v1.chats.agents.<a href="./src/resources/api/v1/chats/agents.ts">updateChatSettings</a>(agentID, { ...params }) -> AgentUpdateChatSettingsResponse</code>
