import userModel from "../models/userModel.js";
import { signinSchema, signupSchema } from "../utils/validationSchema.js";

export async function signup(req, res) {
  const { email, password, firstName, lastName } = req.body;

  const parsedBody = signupSchema.safeParse(req.body);

  if (!parsedBody.success) {
    return res.status(401).json({
      message: "Input is incorrect",
      error: parsedBody.error.errors,
    });
  }

  try {
    const alreadyExist = await userModel.find({ email });
    console.log(alreadyExist);
    if (alreadyExist.length > 0) {
      return res.status(400).json({
        message: "User already Exist",
      });
    }

    const user = new userModel({
      email,
      password,
      firstName,
      lastName,
    });
    await user.save();

    res.status(201).json({
      message: "Signed up successfully!",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export async function signin(req, res) {
  const { email, password } = req.body;

  const parsedBody = signinSchema.safeParse(req.body);
  if (!parsedBody.success) {
    return res.status(400).json({
      message: "Input is incorrect",
      errors: parsedBody.error.errors,
    });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({
        message: "User does not exist or credentials invalid",
      });
    }

    req.session.userId = user._id;

    res.status(200).json({
      message: "Signed in successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
