// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/notifications/',
  operationId: 'list_notifications_api_v1_notifications__get',
};

export const tool: Tool = {
  name: 'list_notifications_api_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n分页查询用户的消息列表；返回用户收到的通知。\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'APIResponse[NotificationList]',\n  properties: {\n    code: {\n      type: 'integer',\n      title: 'Code'\n    },\n    data: {\n      type: 'object',\n      title: 'NotificationList',\n      description: 'Specific model for a paginated list of notification items.',\n      properties: {\n        items: {\n          type: 'array',\n          title: 'Items',\n          items: {\n            type: 'object',\n            title: 'NotificationItem',\n            description: '通知项',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Id'\n              },\n              content: {\n                type: 'string',\n                title: 'Content'\n              },\n              created_at: {\n                type: 'string',\n                title: 'Created At',\n                format: 'date-time'\n              },\n              image_urls: {\n                type: 'array',\n                title: 'Image Urls',\n                items: {\n                  type: 'string'\n                }\n              },\n              is_read: {\n                type: 'boolean',\n                title: 'Is Read'\n              },\n              link_urls: {\n                type: 'array',\n                title: 'Link Urls',\n                items: {\n                  type: 'string'\n                }\n              },\n              read_at: {\n                type: 'string',\n                title: 'Read At',\n                format: 'date-time'\n              },\n              template_id: {\n                type: 'integer',\n                title: 'Template Id'\n              },\n              title: {\n                type: 'string',\n                title: 'Title'\n              },\n              type: {\n                type: 'integer',\n                title: 'Type'\n              }\n            },\n            required: [              'id',\n              'content',\n              'created_at',\n              'image_urls',\n              'is_read',\n              'link_urls',\n              'read_at',\n              'template_id',\n              'title',\n              'type'\n            ]\n          }\n        },\n        page: {\n          type: 'integer',\n          title: 'Page'\n        },\n        page_size: {\n          type: 'integer',\n          title: 'Page Size'\n        },\n        total: {\n          type: 'integer',\n          title: 'Total'\n        },\n        total_pages: {\n          type: 'integer',\n          title: 'Total Pages'\n        }\n      }\n    },\n    message: {\n      type: 'string',\n      title: 'Message'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      is_read: {
        type: 'boolean',
        title: 'Is Read',
        description: '是否已读，不传则查询全部',
      },
      page: {
        type: 'integer',
        title: 'Page',
      },
      page_size: {
        type: 'integer',
        title: 'Page Size',
      },
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.api.v1.listNotifications(body)));
};

export default { metadata, tool, handler };
