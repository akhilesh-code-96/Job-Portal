import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  job_id: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  resume: { type: String, required: true },
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;
