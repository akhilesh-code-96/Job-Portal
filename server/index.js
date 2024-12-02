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
    origin: "", // Allow requests from any origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
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
