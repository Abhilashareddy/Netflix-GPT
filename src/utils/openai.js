import Groq from "groq-sdk";
import { OPENAI_KEY } from './constants';
const openai = new Groq({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser:true,
});

export default openai;