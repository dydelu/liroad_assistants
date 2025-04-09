import { openai } from "@/app/openai";

export const runtime = "nodejs";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const vectorStore = urlParams.get('vectorStore');
//const assistantId = urlParams.get('assistantId');


// Create a new thread
export async function POST() {
  const thread = await openai.beta.threads.create(
messages=[ { "role": "user", "content": "How do I cancel my subscription?"} ],
  tool_resources={
    "file_search": {
      "vector_store_ids": [`${vectorStore}`]
    }
  }
  );
  return Response.json({ threadId: thread.id });
}
