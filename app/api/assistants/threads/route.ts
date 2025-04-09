import { openai } from "@/app/openai";

export const runtime = "nodejs";

// Create a new thread
export async function POST() {
  const thread = await openai.beta.threads.create(
tool_resources={
    "file_search": {
      "vector_store_ids": ["vs_67ef900dd7c48191ababf6da629bb287"]
    }
  }
  );
  return Response.json({ threadId: thread.id });
}
