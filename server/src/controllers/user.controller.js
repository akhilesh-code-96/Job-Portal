import UserModel from "../models/user.model.js";

export default class UserController {
  async registerUser(req, res) {
    const { firstname, lastname, email, password, role } = req.body;
    console.log("Body", req.body);
    const emailExists = await UserModel.findOne({ email });
    if (emailExists) {
      return res.status(401).json({ message: "User already exists!" });
    }
    try {
      const record = new UserModel({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        role: role,
      });

      await record.save();
      res.status(200).json({ message: "Successfully registered the user." });
    } catch (error) {
      res
        .status(401)
        .json({ message: "Failed to register the user with error: ", error });
    }
  }

  async authUser(req, res) {
    const { email, password, pathname } = req.body;

    let role;
    if (pathname === "/jobseeker-login") {
      role = "Job Seeker";
    } else {
      role = "Recruiter";
    }

    try {
      const user = await UserModel.findOne({ email, role });

      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      if (password === user.password) {
        return res.status(200).json({ user });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ message: "An error occurred. Please try again." });
    }
  }
}
