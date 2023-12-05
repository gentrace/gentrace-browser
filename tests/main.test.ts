import { Configuration,  } from "../configuration";
import {V2Api} from "../api/v2-api";

const config = new Configuration({
  clientToken: process.env.GENTRACE_CLIENT_TOKEN,
});

const api = new V2Api(config);

describe("Usage of Evaluation functionality", () => {

  it('should property initialize the constructor', () => {
    api.v2FeedbackPost({
    })

    api.v2
  })
});