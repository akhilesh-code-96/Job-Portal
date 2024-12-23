import express from "express";
import router from "./router/api.js";
import connectToDB from "./connect.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const PORT = 3000;
const app = express();

// congifure cors
app.use(
  cors({
    origin: [
      "https://job-portal-frontend-brown.vercel.app",
      "https://67561187e257910ad1b162f6--hr-portal-frontend.netlify.app",
      "http://localhost:5173",
    ],
    methods: ["POST", "GET", "DELETE", "PUT"], // Specify allowed HTTP methods
    credentials: true,
  })
);

// api level middleware.
app.use(express.json());
app.use("/api", router);

app.listen(PORT, async () => {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) {
    console.error("MONGO_URI is not defined in the .env file");
    process.exit(1);
  }

  await connectToDB(mongoURI);
  console.log(`Server running at http://localhost:${PORT}`);
});
