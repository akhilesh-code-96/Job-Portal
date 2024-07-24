import express from "express";
import UserController from "../src/controllers/user.controller.js";
import JobController from "../src/controllers/job.controller.js";
import { uploadFile } from "../src/middlewares/file-upload.middleware.js";

const router = express.Router();

const userController = new UserController();
const jobController = new JobController();

router.post("/register-user", userController.registerUser);
router.post("/auth-user", userController.authUser);
router.get("/get-jobs", jobController.getJobs);
router.post(
  "/post-job",
  uploadFile.single("companyLogo"),
  jobController.postJobs
);

export default router;
