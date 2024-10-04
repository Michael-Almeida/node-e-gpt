const { Configuration, OpenIaApi } = require("openai");

module.exports = class openai {
  static configuration() {
    const configuration = new Configuration({
      apikey: process.env.OPENAI_KEY,
    });
    return new OpenIaApi(configuration);
  }

  static textCompletion({ prompt }) {
    return {
      model: "text-davubci-003",
      prompt: `${prompt}`,
      temperatura: 0,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };
  }
};
