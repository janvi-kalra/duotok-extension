// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt:
//     "Return a map  each word  this into 1. French, 2. Spanish and 3. Japanese:\n\nWhat rooms do you have available?\n\n1.",
//   temperature: 0.3,
//   max_tokens: 100,
//   top_p: 1.0,
//   frequency_penalty: 0.0,
//   presence_penalty: 0.0,
// });

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create({
//     id: "context-run",
//     title: "TLDR this",
//     contexts: ["selection"],
//   });
// });

// // Add listener
// chrome.contextMenus.onClicked.addListener(generateCompletionAction);
