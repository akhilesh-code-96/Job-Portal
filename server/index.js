import express from "express";
import router from "./router/api.js";
import connectToDB from "./connect.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = 3000;
const app = express();

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
