import { User } from "../models/user.model.js"


export const userRegister = async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;
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

    // Create new user and exclude password from the response
    const newUser = await User.create({ username, email, password });
    
    // Return the user object without the password field
    res.json({
      success: true,
      msg: "User created successfully",
      user: newUser.toObject({ versionKey: false, transform: (doc, ret) => { delete ret.password; } }),
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      msg: "Error registering user"
    });
  }
};


export const userLogin=async (req,res,next)=>{
    const {email,password}=req.body;
    try {
         const user= await User.findOne({email});
         if(!user){
              res.json({
             success:false,
             msg:"user doesn't exist"
              })
         }
         console.log("1")
        //  console.log(email, password)
         const isValid=await user.isValidPassword(password);
         if(!isValid){
            res.json({
                success:false,
                msg:"wrong password"
                })
         }
        console.log(isValid)
         res.json({
            success:true,
            msg:"User login successfully",
            user: user.toObject({ versionKey: false, transform: (doc, ret) => { delete ret.password; } }),
        })
         
    } catch (error) {
     res.json({
         success:false,
         msg:"Error login user"
     })
    }
 
 }