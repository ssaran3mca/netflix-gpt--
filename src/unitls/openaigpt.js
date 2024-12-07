import OpenAI from "openai";
import { REACT_APP_OPENAI_API_KEY } from "./constants";

const openaigpt = new OpenAI({
  apiKey: REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
export default openaigpt;
