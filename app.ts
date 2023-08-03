import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
app.use(express.json());

// Replace this with your actual chatbot logic and questions
const questions: string[] = [
  "What should i call you?",
  "can i also get your email?",
];

let currentQuestionIndex = 0;

app.post("/chat", (req: Request, res: Response) => {
  const userMessage: string = req.body.message;

  // Save the user's response here or perform any desired processing
  console.log("User:", userMessage);

  // Get the next question or end the conversation
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    currentQuestionIndex++;
    res.json({ message: question });
  } else {
    res.json({ message: "Thank you for chatting with me!" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
