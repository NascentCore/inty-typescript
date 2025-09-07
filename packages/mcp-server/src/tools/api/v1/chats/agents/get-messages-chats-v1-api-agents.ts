// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.chats.agents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/chats/agents/{agent_id}/messages',
  operationId: 'get_agent_chat_messages_api_v1_chats_agents__agent_id__messages_get',
};

export const tool: Tool = {
  name: 'get_messages_chats_v1_api_agents',
  description: 'Get only chat message records by Agent ID (lighter interface)',
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
      limit: {
        type: 'integer',
        title: 'Limit',
        description: 'Number of messages per page',
      },
      offset: {
        type: 'integer',
        title: 'Offset',
        description: 'Offset',
      },
      order: {
        type: 'string',
        title: 'Order',
        description: 'Sort order: asc=old messages first, desc=new messages first',
      },
    },
    required: ['agent_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { agent_id, ...body } = args as any;
  return asTextContentResult((await client.api.v1.chats.agents.getMessages(agent_id, body)) as object);
};

export default { metadata, tool, handler };
