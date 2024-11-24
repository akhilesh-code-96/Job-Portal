import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  company: { type: String, required: true },
  companyLogo: { type: String },
  position: { type: String, required: true },
  company_description: { type: String, required: true },
  job_description: { type: Array, required: true },
  category: {
    type: String,
    enum: ["frontend", "backend", "fullstack"],
    required: true,
  },
  location: { type: String, required: true },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
