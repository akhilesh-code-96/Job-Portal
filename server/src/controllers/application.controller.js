import JobApplication from "../models/application.model.js";

export default class ApplicationController {
  async getApplication(req, res) {
    const { job_id } = req.query;

    try {
      const applications = await JobApplication.find({ job_id });

      if (applications.length === 0) {
        return res
          .status(401)
          .json({ message: "No applications found for this job." });
      }
      res.status(200).json({ applications });
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
}
