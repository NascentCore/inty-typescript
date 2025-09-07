// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Inty } from '../client';

export abstract class APIResource {
  protected _client: Inty;

  constructor(client: Inty) {
    this._client = client;
  }
}
