import JobModel from "../models/job.model.js";
import uploadImageToCloudinary from "../utils/cloudinary.js";

export default class JobController {
  async getJobs(req, res) {
    const { job, location } = req.query;
    if (job && location) {
      console.log(`Job: ${job}, Location: ${location}`);
    }
    try {
      res.status(200).json({ message: "Successfully send the job data." });
    } catch (error) {
      res.status(401).json({ message: "Data not found." });
    }
  }

  async postJobs(req, res) {
    const { companyName, position, companyDescription, jobDescription, category } =
      req.body;
    const imagePath = req.file.path;
    try {
      const uploadResult = await uploadImageToCloudinary(imagePath);
      const logoUrl = uploadResult.secure_url;

      const record = new JobModel({
        company: companyName,
        companyLogo: logoUrl,
        position: position,
        company_description: companyDescription,
        job_description: jobDescription,
        category: category,
      });

      await record.save();
      res.status(200).json({ message: "Job posted successfully." });
    } catch (error) {
      res
        .status(501)
        .json({ message: "Failed to post the job with error: ", error });
    }
  }
}
