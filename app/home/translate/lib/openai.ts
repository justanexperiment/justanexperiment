const { OpenAI } = require('openai');

// Initialize OpenAI client with your API key from the environment variables
const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

type Message = {
  role: 'user' | 'system' | 'assistant',
  content: string,
};

export const sendMessageToOpenAI = async (
  inputText: string, 
  responseCallback: (messageChunk: string) => void, 
  model: string,
  systemMessage?: string,
  ) => {
    
  try {
    const messages: Message[] = [
      { role: 'user', content: inputText }, 
    ];
    if (systemMessage) {
      messages.unshift({
        role: "system",
        content: systemMessage
      });
    }
    console.log(model, messages)
    const completion = await openai.chat.completions.create({
      model: model,
      messages: messages,
      stream: true,
    });


    let fullMessage = '';
    for await (const chunk of completion) {
      const messageChunk = chunk.choices[0].delta.content;
      if (messageChunk) { // Skip empty or undefined message chunks
        fullMessage += messageChunk;
        responseCallback(fullMessage); // Changed onMessagePart to responseCallback
      }
    }
  } catch (error) {
    console.error('Error querying OpenAI:', error);
    throw error;
  }
}
