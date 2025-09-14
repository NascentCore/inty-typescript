// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inty from 'inty';

const client = new Inty({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  // Prism tests are disabled
  test.skip('getMessages', async () => {
    const responsePromise = client.api.v1.chats.agents.getMessages('agent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getMessages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.chats.agents.getMessages(
        'agent_id',
        { limit: 1, offset: 0, order: 'desc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Inty.NotFoundError);
  });
});
