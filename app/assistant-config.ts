export let assistantId = "asst_PeSpSgZpWHgVgPoBoDiFSUtN"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
