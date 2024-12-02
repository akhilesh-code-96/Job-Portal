import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, requierd: true },
  role: { type: String, required: true, enum: ["Recruiter", "Job Seeker"] },
});

const User = mongoose.model("User", userSchema);
export default User;
