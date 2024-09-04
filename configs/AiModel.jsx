const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a Course Tutorial on Following Detail with Field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level:Basic, Duration:1 hours Chapter:5 in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming Basics\",\n    \"description\": \"This course provides a comprehensive introduction to Python programming, covering fundamental concepts, syntax, and data structures. It is designed for beginners with no prior programming experience.\",\n    \"chapters\": [\n      {\n        \"chapter\": 5,\n        \"about\": \"Loops and Iteration\",\n        \"duration\": \"1 hour\",\n        \"topics\": [\n          \"Introduction to loops\",\n          \"For loop\",\n          \"While loop\",\n          \"Nested loops\",\n          \"Break and continue statements\",\n          \"Iterating over lists, tuples, and dictionaries\",\n          \"Looping with range function\",\n          \"Practical examples and exercises\"\n        ]\n      }\n    ]\n  },\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\"\n}\n```\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "How are you\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "As a large language model, I don't have feelings or experiences like humans do. So, I'm not \"feeling\" anything in the way you might. \n\nHowever, I'm here and ready to assist you with any questions or tasks you might have! What can I do for you today? \n"},
          ],
        },
      ],
    });