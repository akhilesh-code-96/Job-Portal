import express from "express";
import router from "./router/api.js";
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/job-portal");

const PORT = 3000;
const app = express();

// api level middleware.
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
