const User = require('../models/User.Schema');


/*********************************
 @GET
 @getUsersList
 gets list of all users in DB.
*********************************/
exports.getUserController = async(req, res)=>{
    try {
        const users = await User.find();
    
        res.status(200).json({
            success: true,
            message: "succesfully retrived list of user",
            users
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ 
            success: false,
            message: 'Server error'
         });
      }
}

/*********************************
 @POST
 @createUser
 Add user in DB.
*********************************/
exports.createUserController = async (req, res) => {
    try {
      const newUser = new User(req.body);
  
      await newUser.save();
  
      res.status(201).json({
        success: true,
        message: 'Successfully created a new user',
        user: newUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Server error',
       });
    }
  }