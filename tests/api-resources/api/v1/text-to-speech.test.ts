// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inty from 'inty';

const client = new Inty({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource textToSpeech', () => {
  // Prism tests are disabled
  test.skip('generateSpeech', async () => {
    const responsePromise = client.api.v1.textToSpeech.generateSpeech('message_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listVoices', async () => {
    const responsePromise = client.api.v1.textToSpeech.listVoices();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listVoices: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.textToSpeech.listVoices(
        { category: 'category', page_size: 1, search: 'search', voice_type: 'voice_type' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Inty.NotFoundError);
  });
});
