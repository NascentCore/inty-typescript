// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.auth.google',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/auth/google/login',
  operationId: 'google_login_api_v1_auth_google_login_post',
};

export const tool: Tool = {
  name: 'login_auth_v1_api_google',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGoogle登录\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'APIResponse[LoginResponse]',\n  properties: {\n    code: {\n      type: 'integer',\n      title: 'Code'\n    },\n    data: {\n      type: 'object',\n      title: 'LoginResponse',\n      description: '登录响应',\n      properties: {\n        token: {\n          type: 'string',\n          title: 'Token'\n        },\n        user: {\n          type: 'object',\n          title: 'LoginUserResponse',\n          description: '登录用户响应',\n          properties: {\n            id: {\n              type: 'string',\n              title: 'Id'\n            },\n            auth_type: {\n              type: 'string',\n              title: 'AuthType',\n              description: '认证类型',\n              enum: [                'PHONE',\n                'GOOGLE',\n                'GUEST'\n              ]\n            },\n            avatar: {\n              type: 'string',\n              title: 'Avatar'\n            },\n            email: {\n              type: 'string',\n              title: 'Email'\n            },\n            is_new_user: {\n              type: 'boolean',\n              title: 'Is New User'\n            },\n            nickname: {\n              type: 'string',\n              title: 'Nickname'\n            },\n            age_group: {\n              type: 'string',\n              title: 'Age Group'\n            },\n            gender: {\n              $ref: '#/$defs/gender'\n            },\n            phone: {\n              type: 'string',\n              title: 'Phone'\n            },\n            system_language: {\n              type: 'string',\n              title: 'System Language'\n            }\n          },\n          required: [            'id',\n            'auth_type',\n            'avatar',\n            'email',\n            'is_new_user',\n            'nickname'\n          ]\n        }\n      },\n      required: [        'token',\n        'user'\n      ]\n    },\n    message: {\n      type: 'string',\n      title: 'Message'\n    }\n  },\n  $defs: {\n    gender: {\n      type: 'string',\n      title: 'Gender',\n      description: '性别',\n      enum: [        'MALE',\n        'FEMALE',\n        'OTHER'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id_token: {
        type: 'string',
        title: 'Id Token',
      },
      user_info: {
        type: 'object',
        title: 'UserInfo',
        description: '用户信息',
        properties: {
          age_group: {
            type: 'string',
            title: 'Age Group',
          },
          gender: {
            $ref: '#/$defs/gender',
          },
          system_language: {
            type: 'string',
            title: 'System Language',
          },
        },
        required: ['age_group', 'gender', 'system_language'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id_token'],
    $defs: {
      gender: {
        type: 'string',
        title: 'Gender',
        description: '性别',
        enum: ['MALE', 'FEMALE', 'OTHER'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.api.v1.auth.google.login(body)));
};

export default { metadata, tool, handler };
