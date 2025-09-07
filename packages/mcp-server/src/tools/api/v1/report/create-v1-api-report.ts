// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inty-mcp/filtering';
import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.report',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/report/',
  operationId: 'create_report_api_v1_report__post',
};

export const tool: Tool = {
  name: 'create_v1_api_report',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSubmit report\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/api_response',\n  $defs: {\n    api_response: {\n      type: 'object',\n      title: 'APIResponse',\n      properties: {\n        code: {\n          type: 'integer',\n          title: 'Code'\n        },\n        data: {\n          type: 'object',\n          title: 'Data',\n          additionalProperties: true\n        },\n        message: {\n          type: 'string',\n          title: 'Message'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      reason_ids: {
        type: 'array',
        title: 'Reason Ids',
        items: {
          type: 'integer',
        },
      },
      target_id: {
        type: 'string',
        title: 'Target Id',
      },
      target_type: {
        type: 'string',
        title: 'TargetType',
        enum: ['USER', 'AGENT'],
      },
      description: {
        type: 'string',
        title: 'Description',
      },
      image_urls: {
        type: 'array',
        title: 'Image Urls',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['reason_ids', 'target_id', 'target_type'],
  },
  annotations: {},
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.api.v1.report.create(body)));
};

export default { metadata, tool, handler };
