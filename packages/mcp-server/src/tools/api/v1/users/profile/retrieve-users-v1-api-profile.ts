// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.users.profile',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/users/profile',
  operationId: 'get_profile_api_v1_users_profile_get',
};

export const tool: Tool = {
  name: 'retrieve_users_v1_api_profile',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet current user profile.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user',\n  $defs: {\n    user: {\n      type: 'object',\n      title: 'User',\n      description: '返回给客户端的用户信息',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        auth_type: {\n          type: 'string',\n          title: 'Auth Type'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        is_active: {\n          type: 'boolean',\n          title: 'Is Active'\n        },\n        readable_id: {\n          type: 'string',\n          title: 'Readable Id'\n        },\n        age_group: {\n          type: 'string',\n          title: 'Age Group'\n        },\n        avatar: {\n          type: 'string',\n          title: 'Avatar'\n        },\n        connector_count: {\n          type: 'integer',\n          title: 'Connector Count'\n        },\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        email: {\n          type: 'string',\n          title: 'Email'\n        },\n        followers_count: {\n          type: 'integer',\n          title: 'Followers Count'\n        },\n        gender: {\n          $ref: '#/$defs/gender'\n        },\n        is_superuser: {\n          type: 'boolean',\n          title: 'Is Superuser'\n        },\n        nickname: {\n          type: 'string',\n          title: 'Nickname'\n        },\n        phone: {\n          type: 'string',\n          title: 'Phone'\n        },\n        public_agents_count: {\n          type: 'integer',\n          title: 'Public Agents Count'\n        },\n        system_language: {\n          type: 'string',\n          title: 'System Language'\n        },\n        total_public_agents_follows: {\n          type: 'integer',\n          title: 'Total Public Agents Follows'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'auth_type',\n        'created_at',\n        'is_active',\n        'readable_id'\n      ]\n    },\n    gender: {\n      type: 'string',\n      title: 'Gender',\n      description: '性别',\n      enum: [        'MALE',\n        'FEMALE',\n        'OTHER'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.api.v1.users.profile.retrieve()));
};

export default { metadata, tool, handler };
