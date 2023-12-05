import { Configuration,  } from "../configuration";
import {V2Api} from "../api/v2-api";
import stringify from "json-stable-stringify";
import { rest } from "msw";
import {setupServer, SetupServer} from "msw/node";

describe("Usage of Evaluation functionality", () => {

  const feedbackCreationResponse = {
    id: '123e4567-e89b-12d3-a456-426614174000',
    pipelineRunId: '456f7890-f12g-34h5-i678-912j34567890',
    score: 0.85,
    details: 'Feedback details here.',
    recordedTime: 1633036800
  };

  const feedbackUpdateResponse = {
    id: '2fa21bca-d8fd-4af2-81c8-6e7a1210dc9d',
    pipelineRunId: '456f7890-f12g-34h5-i678-912j34567890',
    score: 0.3,
    details: 'Some details here',
    recordedTime: 1633036800
  }

  let server: SetupServer;

  beforeAll(() => {
    server = setupServer(
      rest.post("https://gentrace.ai/api/v2/feedback", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.set("Content-Type", "application/json"),
          ctx.json(feedbackCreationResponse),
        );
      }),

      rest.patch("https://gentrace.ai/api/v2/feedback/:id", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.set("Content-Type", "application/json"),
          ctx.json(feedbackUpdateResponse),
        );
      })
    );
    server.listen();
  });

  it('should property POST to Gentrace', async () => {
    const config = new Configuration({
      clientToken: process.env.GENTRACE_CLIENT_TOKEN
    });

    const api = new V2Api(config);

    const response = await api.v2FeedbackPost({
      pipelineRunId: "3f791edb-f9a7-4d55-9f1f-266dbd84be56",
      recordedTime: 1701813553636,
      score: 0.3,
      details: "Some details here"
    });

    expect(stringify(response.data)).toEqual(stringify(feedbackCreationResponse))
  })

  it('should properly PATCH to Gentrace', async () => {
    const config = new Configuration({
      clientToken: process.env.GENTRACE_CLIENT_TOKEN
    });

    const api = new V2Api(config);

    const response = await api.v2FeedbackIdPatch("2fa21bca-d8fd-4af2-81c8-6e7a1210dc9d", {
      score: 0.4,
      details: "Some details here"
    });

    expect(stringify(response.data.score)).toEqual(stringify(feedbackUpdateResponse.score))
    expect(stringify(response.data.details)).toEqual(stringify(feedbackUpdateResponse.details))
  })
});