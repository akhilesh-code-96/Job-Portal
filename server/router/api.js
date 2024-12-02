import express from "express";
import UserController from "../src/controllers/user.controller.js";
import JobController from "../src/controllers/job.controller.js";
import ApplicationController from "../src/controllers/application.controller.js";
import { uploadFile } from "../src/middlewares/file-upload.middleware.js";

const router = express.Router();

const userController = new UserController();
const jobController = new JobController();
const applicationController = new ApplicationController();

router.get("/", (req, res) => res.send("We are live!"));

router.post("/register-user", userController.registerUser);
router.post("/auth-user", userController.authUser);
router.get("/get-jobs", jobController.getJobs);
router.post(
  "/post-job",
  uploadFile.single("companyLogo"),
  jobController.postJobs
);
router.post(
  "/post-application",
  uploadFile.single("resume"),
  jobController.postApplication
);
router.get("/get-job-application", applicationController.getApplication);

export default router;
