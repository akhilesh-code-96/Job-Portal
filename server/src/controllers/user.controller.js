import UserModel from "../models/user.model.js";

export default class UserController {
  async registerUser(req, res) {
    const { firstname, lastname, email, password } = req.body;
    try {
      const record = new UserModel({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
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
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (user) {
        if (password === user.password) {
          res.status(200).json({ user });
        }
      }
    } catch (error) {
      res.status(401).json({ message: "User not found with error: ", error });
    }
  }
}
