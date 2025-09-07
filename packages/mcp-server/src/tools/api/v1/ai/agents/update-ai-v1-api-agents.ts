// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'inty-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inty from 'inty';

export const metadata: Metadata = {
  resource: 'api.v1.ai.agents',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/ai/agents/{agent_id}',
  operationId: 'update_agent_api_v1_ai_agents__agent_id__put',
};

export const tool: Tool = {
  name: 'update_ai_v1_api_agents',
  description: 'Update AI agent',
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
      alternate_greetings: {
        type: 'array',
        title: 'Alternate Greetings',
        items: {
          type: 'string',
        },
      },
      avatar: {
        type: 'string',
        title: 'Avatar',
      },
      background: {
        type: 'string',
        title: 'Background',
      },
      background_images: {
        type: 'array',
        title: 'Background Images',
        items: {
          type: 'string',
        },
      },
      category: {
        type: 'string',
        title: 'Category',
      },
      character_book: {
        type: 'object',
        title: 'Character Book',
        additionalProperties: true,
      },
      character_card_spec: {
        type: 'string',
        title: 'Character Card Spec',
      },
      character_version: {
        type: 'string',
        title: 'Character Version',
      },
      creator_notes: {
        type: 'string',
        title: 'Creator Notes',
      },
      extensions: {
        type: 'object',
        title: 'Extensions',
        additionalProperties: true,
      },
      gender: {
        type: 'string',
        title: 'Gender',
      },
      intro: {
        type: 'string',
        title: 'Intro',
      },
      llm_config: {
        $ref: '#/$defs/model_config',
      },
      main_prompt: {
        type: 'string',
        title: 'Main Prompt',
      },
      message_example: {
        type: 'string',
        title: 'Message Example',
      },
      mode_prompt: {
        type: 'string',
        title: 'Mode Prompt',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      opening: {
        type: 'string',
        title: 'Opening',
      },
      personality: {
        type: 'string',
        title: 'Personality',
      },
      photos: {
        type: 'array',
        title: 'Photos',
        items: {
          type: 'string',
        },
      },
      post_history_instructions: {
        type: 'string',
        title: 'Post History Instructions',
      },
      prompt: {
        type: 'string',
        title: 'Prompt',
        description: '已废弃 - 请使用personality字段代替',
      },
      scenario: {
        type: 'string',
        title: 'Scenario',
      },
      settings: {
        type: 'object',
        title: 'Settings',
        additionalProperties: true,
      },
      tags: {
        type: 'array',
        title: 'Tags',
        items: {
          type: 'string',
        },
      },
      visibility: {
        $ref: '#/$defs/agent_visibility',
      },
      voice_id: {
        type: 'string',
        title: 'Voice Id',
      },
    },
    required: ['agent_id'],
    $defs: {
      model_config: {
        type: 'object',
        title: 'ModelConfig',
        description: 'AI模型配置',
        properties: {
          api_key: {
            type: 'string',
            title: 'Api Key',
          },
          base_url: {
            type: 'string',
            title: 'Base Url',
          },
          frequency_penalty: {
            type: 'number',
            title: 'Frequency Penalty',
            description: 'Frequency penalty',
          },
          max_tokens: {
            type: 'integer',
            title: 'Max Tokens',
            description: 'Maximum tokens in response',
          },
          model: {
            type: 'string',
            title: 'Model',
          },
          presence_penalty: {
            type: 'number',
            title: 'Presence Penalty',
            description: 'Presence penalty',
          },
          temperature: {
            type: 'number',
            title: 'Temperature',
            description: 'Temperature for response generation',
          },
          top_k: {
            type: 'integer',
            title: 'Top K',
            description: 'Top-k sampling parameter',
          },
          top_p: {
            type: 'number',
            title: 'Top P',
            description: 'Top-p sampling parameter',
          },
        },
      },
      agent_visibility: {
        type: 'string',
        title: 'AgentVisibility',
        description: 'AI 角色可见性',
        enum: ['PUBLIC', 'PRIVATE'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Inty, args: Record<string, unknown> | undefined) => {
  const { agent_id, ...body } = args as any;
  return asTextContentResult(await client.api.v1.ai.agents.update(agent_id, body));
};

export default { metadata, tool, handler };
