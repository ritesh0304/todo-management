import { User } from "../models/user.model.js"


export const userRegister = async (req, res, next) => {

  const { username, email, password, confirmPassword } = req.body.formData;
  try {
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.json({
        success: false,
        msg: "Passwords don't match"
      });
    }

    // Check if user already exists
    const userExists = await User.exists({ email });
    if (userExists) {
      return res.json({
        success: false,
        msg: "User already exists"
      });
    }
    const userExistsUsername = await User.exists({ username });
    if (userExistsUsername) {
      return res.json({
        success: false,
        msg: "User already exists"
      });
    }
    // Create new user and exclude password from the response
    const newUser = await User.create({ username, email, password });
    
    // Return the user object without the password field
    res.json({
      success: true,
      msg: "User created successfully",
      user: newUser.toObject({ versionKey: false, transform: (doc, ret) => { delete ret.password; } }),
    });

  } catch (error) {
    res.json({
      success: false,
      msg: "Error registering user"
    });
  }
};


export const userLogin = async (req, res, next) => {
  const { email, password } = req.body.formData;

  try {
      const user = await User.findOne({ email });

      if (!user) {
          return res.json({
              success: false,
              msg: "User doesn't exist"
          });
      }
      const isValid = await user.isValidPassword(password);

      if (!isValid) {
        return  res.json({
              success: false,
              msg: "Wrong password"
          });
      }

      // If user and password are valid, prepare response
      const userData = user.toObject({ versionKey: false, transform: (doc, ret) => { delete ret.password; } });

      res.json({
          success: true,
          msg: "User logged in successfully",
          user: userData
      });

  } catch (error) {
      console.error("Error logging in user:", error);
      res.json({
          success: false,
          msg: "Error logging in user"
      });
  }
};