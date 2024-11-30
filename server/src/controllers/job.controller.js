import JobModel from "../models/job.model.js";
import ApplicationModel from "../models/application.model.js";
import uploadImageToCloudinary from "../utils/cloudinary.js";

export default class JobController {
  async getJobs(req, res) {
    const { job, location, category } = req.query;

    const queryObject = {}; // universal query object

    if (category) {
      queryObject.category = category;
    }

    if (job && location) {
      // regex would be able to find the word even if it's in the middle of a sentence
      queryObject.$and = [];
      if (job.trim() !== "") {
        queryObject.$and.push({ position: { $regex: job, $options: "i" } });
      }
      if (location.trim() !== "") {
        queryObject.$and.push({
          location: { $regex: location, $options: "i" },
        });
      }
    }

    // sending the response
    if (Object.keys(queryObject).length > 0) {
      try {
        const jobs = await JobModel.find(queryObject);
        res.status(200).json({ jobs });
      } catch (error) {
        res.status(401).json({ message: "Data not found." });
      }
    }
  }

  async postJobs(req, res) {
    const {
      companyName,
      position,
      companyDescription,
      jobDescription,
      category,
      location,
    } = req.body;
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
        location: location,
      });

      await record.save();
      res.status(200).json({ message: "Job posted successfully." });
    } catch (error) {
      res
        .status(501)
        .json({ message: "Failed to post the job with error: ", error });
    }
  }

  async postApplication(req, res) {
    const { application, user_id, job_id } = req.body;
    console.log("File", req.file);
    console.log("User id", user_id);
    console.log("Job id", job_id);

    const resumePath = req.file.path;
    console.log("Path", resumePath);
    try {
      const uploadResult = await uploadImageToCloudinary(resumePath, true);
      const resumeUrl = uploadResult.secure_url;
      console.log("Secure url", resumeUrl);
      const record = new ApplicationModel({
        user_id: user_id,
        job_id: job_id,
        firstname: application.firstname,
        lastname: application.lastname,
        email: application.email,
        resume: resumeUrl,
      });
      console.log();
      await record.save();
      res.status(200).json({ message: "Application submitted successfully." });
    } catch (error) {
      res.status(501).json({
        message: "Failed to upload the application with error: ",
        error,
      });
    }
  }
}
