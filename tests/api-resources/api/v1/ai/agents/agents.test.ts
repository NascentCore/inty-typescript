// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inty from 'inty';

const client = new Inty({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v1.ai.agents.create({ gender: 'gender', name: 'name' });
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
    const response = await client.api.v1.ai.agents.create({
      gender: 'gender',
      name: 'name',
      alternate_greetings: ['string'],
      avatar: 'avatar',
      background: 'background',
      background_animated: 'background_animated',
      background_images: ['string'],
      category: 'category',
      character_book: { foo: 'bar' },
      character_card_spec: 'character_card_spec',
      character_version: 'character_version',
      creator_notes: 'creator_notes',
      extensions: { foo: 'bar' },
      intro: 'intro',
      llm_config: {
        api_key: 'api_key',
        base_url: 'base_url',
        frequency_penalty: -2,
        max_tokens: 1,
        model: 'model',
        presence_penalty: -2,
        temperature: 0,
        top_k: 1,
        top_p: 0,
      },
      main_prompt: 'main_prompt',
      message_example: 'message_example',
      meta_data: { comment: 'comment', score: 0 },
      mode_prompt: 'mode_prompt',
      opening: 'opening',
      opening_audio_url: 'opening_audio_url',
      personality: 'personality',
      photos: ['string'],
      post_history_instructions: 'post_history_instructions',
      prompt: 'prompt',
      request_id: 'request_id',
      scenario: 'scenario',
      settings: { foo: 'bar' },
      tags: ['string'],
      visibility: 'PUBLIC',
      voice_id: 'voice_id',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.v1.ai.agents.retrieve('agent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.api.v1.ai.agents.update('agent_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.api.v1.ai.agents.list();
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
      client.api.v1.ai.agents.list({ limit: 0, skip: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Inty.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.api.v1.ai.agents.delete('agent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('followAgent', async () => {
    const responsePromise = client.api.v1.ai.agents.followAgent('agent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('following', async () => {
    const responsePromise = client.api.v1.ai.agents.following();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('following: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.ai.agents.following({ page: 1, page_size: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Inty.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('recommend', async () => {
    const responsePromise = client.api.v1.ai.agents.recommend();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('recommend: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.ai.agents.recommend(
        { page: 1, page_size: 1, sort: 'created_asc', sort_seed: 'sort_seed' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Inty.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.api.v1.ai.agents.search({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.api.v1.ai.agents.search({ q: 'q', page: 1, page_size: 1 });
  });

  // Prism tests are disabled
  test.skip('unfollowAgent', async () => {
    const responsePromise = client.api.v1.ai.agents.unfollowAgent('agent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
