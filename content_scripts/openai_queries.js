async function queryOpenAi(word, language, sentence) {
  const url = "https://api.openai.com/v1/completions";

  const prompt = languageSpecificPrompt(word, language, sentence);
  const completionResponse = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt,
      temperature: 0.2,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }),
  });

  const parsedResponse = await completionResponse.json();
  return parsedResponse;
}

function languageSpecificPrompt(word, language, sentence) {
  let prompt;
  if (language.includes("Chinese")) {
    prompt = `Given the ${language} sentence "${sentence}". 
    Return the list of strings: 
    ["Short English definition", "New example ${language} sentence", 
    "part of speech", "Pinyin"] for the word "${word}"`;
  } else if (isNonwesternLanguage(language)) {
    prompt = `Given the ${language} sentence "${sentence}". 
    Return the list of strings: 
    ["Short English definition", "New example ${language} sentence", 
    "part of speech", "Romanization with spaces"] for the word "${word}"`;
  } else {
    prompt = `Given the ${language} sentence "${sentence}". 
      Return the list of strings: ["Short English definition", 
      "New example ${language} sentence", "part of speech"] for the word "${word}"`;
  }
  return prompt;
}

function isNonwesternLanguage(lang) {
  const nwlangs = [
    "Arabic",
    "Simplified Chinese",
    "Traditional Chinese",
    "Greek",
    "Hebrew",
    "Hindi",
    "Korean",
    "Russian",
    "Swahili",
    "Tamil",
    "Ukrainian",
    "Thai",
  ];
  return nwlangs.includes(lang);
}
