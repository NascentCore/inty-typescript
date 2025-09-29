// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inty from 'inty';

const client = new Inty({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource google', () => {
  // Prism tests are disabled
  test.skip('login: only required params', async () => {
    const responsePromise = client.api.v1.auth.google.login({ id_token: 'id_token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('login: required and optional params', async () => {
    const response = await client.api.v1.auth.google.login({
      id_token: 'id_token',
      request_id: 'request_id',
      user_info: { age_group: 'age_group', gender: 'MALE', system_language: 'system_language' },
    });
  });
});
