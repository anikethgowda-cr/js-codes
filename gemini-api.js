import { GoogleGenAI } from "@google/genai";

const text = "I am Aniketh. Can you help me learn AI and ML?";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyDzLboHIF44eKMdqBLBA0FCefnismh4edk", // or put your API key here
});

async function main() {
  try{
    const chat = ai.chats.create({ model: "gemini-3.5-flash" });

  let response = await chat.sendMessage({ message: "I have 2 dogs in my house." });
  console.log("Response 1:", response.text);

  response = await chat.sendMessage({ message: "How many paws are in my house?" });
  console.log("Response 2:", response.text);
}
  catch(err){
    console.log(err.message);
}
}
  

main();