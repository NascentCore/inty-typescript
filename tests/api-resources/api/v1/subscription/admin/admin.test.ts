// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inty from 'inty';

const client = new Inty({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource admin', () => {
  // Prism tests are disabled
  test.skip('processRefund: only required params', async () => {
    const responsePromise = client.api.v1.subscription.admin.processRefund({
      subscription_id: 'subscription_id',
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
  test.skip('processRefund: required and optional params', async () => {
    const response = await client.api.v1.subscription.admin.processRefund({
      subscription_id: 'subscription_id',
      reason: 'reason',
      refund_amount: 0,
    });
  });
});
