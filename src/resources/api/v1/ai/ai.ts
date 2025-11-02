// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AgentsAPI from './agents/agents';
import {
  APIResponseAgent,
  APIResponsePaginationDataAgent,
  Agent,
  AgentCreateParams,
  AgentCreateResponse,
  AgentFollowingParams,
  AgentListParams,
  AgentListResponse,
  AgentMetaData,
  AgentRecommendParams,
  AgentSearchParams,
  AgentUpdateParams,
  AgentVisibility,
  Agents,
  ModelConfig,
} from './agents/agents';

export class AI extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
}

AI.Agents = Agents;

export declare namespace AI {
  export {
    Agents as Agents,
    type Agent as Agent,
    type AgentMetaData as AgentMetaData,
    type AgentVisibility as AgentVisibility,
    type APIResponseAgent as APIResponseAgent,
    type APIResponsePaginationDataAgent as APIResponsePaginationDataAgent,
    type ModelConfig as ModelConfig,
    type AgentCreateResponse as AgentCreateResponse,
    type AgentListResponse as AgentListResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentFollowingParams as AgentFollowingParams,
    type AgentRecommendParams as AgentRecommendParams,
    type AgentSearchParams as AgentSearchParams,
  };
}
