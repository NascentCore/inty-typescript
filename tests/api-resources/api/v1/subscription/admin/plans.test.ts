// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inty from 'inty';

const client = new Inty({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource plans', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v1.subscription.admin.plans.create({
      google_play_product_id: 'google_play_product_id',
      name: 'name',
      plan_type: 'MONTHLY',
      price: 0,
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
    const response = await client.api.v1.subscription.admin.plans.create({
      google_play_product_id: 'google_play_product_id',
      name: 'name',
      plan_type: 'MONTHLY',
      price: 0,
      agent_creation_limit: 0,
      background_generation_limit_per_day: 0,
      chat_limit_per_day: 0,
      currency: 'currency',
      description: 'description',
      discount_rate: 0,
      features: { foo: 'bar' },
      is_active: true,
      sort_order: 0,
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.api.v1.subscription.admin.plans.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.subscription.admin.plans.list(
        { include_inactive: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Inty.NotFoundError);
  });
});
