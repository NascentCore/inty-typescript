// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inty, { toFile } from 'inty';

const client = new Inty({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource report', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v1.report.create({
      reason_ids: [0],
      target_id: 'target_id',
      target_type: 'USER',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.api.v1.report.create({
      reason_ids: [0],
      target_id: 'target_id',
      target_type: 'USER',
      description: 'description',
      image_urls: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('uploadImage: only required params', async () => {
    const responsePromise = client.api.v1.report.uploadImage({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('uploadImage: required and optional params', async () => {
    const response = await client.api.v1.report.uploadImage({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
