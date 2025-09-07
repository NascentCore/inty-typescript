// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.version',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/version/check',
  operationId: 'check_version_api_v1_version_check_post',
};

export const tool: Tool = {
  name: 'check_v1_api_version',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n检查应用版本更新\n\n通过HTTP头传递版本信息：\n- appVersionCode: 应用版本代码（必填，整数）\n- appVersionName: 应用版本名称（可选，字符串）\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'APIResponse[VersionCheckResponse]',\n  properties: {\n    code: {\n      type: 'integer',\n      title: 'Code'\n    },\n    data: {\n      type: 'object',\n      title: 'VersionCheckResponse',\n      description: '版本检查响应模型',\n      properties: {\n        current_version: {\n          type: 'string',\n          title: 'Current Version',\n          description: '当前客户端版本'\n        },\n        download_url: {\n          type: 'string',\n          title: 'Download Url',\n          description: '下载链接'\n        },\n        force_update: {\n          type: 'boolean',\n          title: 'Force Update',\n          description: '是否强制更新'\n        },\n        latest_version: {\n          type: 'string',\n          title: 'Latest Version',\n          description: '最新可用版本'\n        },\n        message: {\n          type: 'string',\n          title: 'Message',\n          description: '状态消息'\n        },\n        minimum_version: {\n          type: 'string',\n          title: 'Minimum Version',\n          description: '最低支持版本'\n        },\n        update_required: {\n          type: 'boolean',\n          title: 'Update Required',\n          description: '是否需要更新'\n        },\n        changelog: {\n          type: 'string',\n          title: 'Changelog',\n          description: '更新日志'\n        },\n        error: {\n          type: 'string',\n          title: 'Error',\n          description: '错误信息'\n        },\n        latest_version_code: {\n          type: 'integer',\n          title: 'Latest Version Code',\n          description: '最新版本代码'\n        }\n      },\n      required: [        'current_version',\n        'download_url',\n        'force_update',\n        'latest_version',\n        'message',\n        'minimum_version',\n        'update_required'\n      ]\n    },\n    message: {\n      type: 'string',\n      title: 'Message'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      appVersionCode: {
        type: 'integer',
        title: 'Appversioncode',
        description: '应用版本代码',
      },
      appVersionName: {
        type: 'string',
        title: 'Appversionname',
        description: '应用版本名称（可选）',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['appVersionCode'],
  },
  annotations: {},
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.api.v1.version.check(body)));
};

export default { metadata, tool, handler };
