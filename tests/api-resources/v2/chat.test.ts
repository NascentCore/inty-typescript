// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inty from 'inty';

const client = new Inty({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // Prism tests are disabled
  test.skip('sendMessage: only required params', async () => {
    const responsePromise = client.v2.chat.sendMessage('agent_id', {
      messages: [{ content: 'content', role: 'role' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendMessage: required and optional params', async () => {
    const response = await client.v2.chat.sendMessage('agent_id', {
      messages: [{ content: 'content', role: 'role' }],
      language: 'language',
      model: 'model',
      request_id: 'request_id',
      stream: true,
    });
  });
});
