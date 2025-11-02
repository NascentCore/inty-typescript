// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as ConfigAPI from './config';
import { Config, ConfigRetrieveResponse, ConfigUpdateParams, ConfigUpdateResponse } from './config';

export class ImageGeneration extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
}

ImageGeneration.Config = Config;

export declare namespace ImageGeneration {
  export {
    Config as Config,
    type ConfigRetrieveResponse as ConfigRetrieveResponse,
    type ConfigUpdateResponse as ConfigUpdateResponse,
    type ConfigUpdateParams as ConfigUpdateParams,
  };
}
