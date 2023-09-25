const User = require('../models/User.Schema');


/***************************************************************************************
 @GET
 @getUsersList
 gets list of all users in DB.
***************************************************************************************/
exports.getUserController = async(req, res)=>{
    try {
        const users = await User.find(); //getting all users from DB
    
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

/***************************************************************************************
 @POST
 @createUser
 takes: name
 Add user in DB.
***************************************************************************************/
exports.createUserController = async (req, res) => {
    try {
      const newUser = new User(req.body); //taking name from req.body
  
      await newUser.save(); //saving user in DB
  
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
  
  
  /***************************************************************************************
   @DELETE
   @deleteUser
   takes: Id of user from params
   removes user.
  ***************************************************************************************/
 exports.deleteUserController = async(req, res)=>{
    try {
        const userId = req.params.id;
    
        // using id to find user
        const deletedUser = await User.findByIdAndDelete(userId);
    
        if (!deletedUser) {
          return res.status(404).json({
            success: false,
            message: 'User not found',
          });
        }
    
        res.status(200).json({
          success: true,
          message: 'Successfully deleted the user',
          user: deletedUser,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: 'Server error',
        });
      }
 }

 /***************************************************************************************
   @PUT
   @editUser
   takes: Id of user from params , updated data from req.body
   edits user.
  ***************************************************************************************/
 exports.editUserCotroller = async(req, res)=>{
    try {
        const userId = req.params.id;
        const updatedUserData = req.body; // updated data from req.body
    
        // findinge user by id and updating data
        const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
          new: true
        });
    
        if (!updatedUser) {
          return res.status(404).json({
            success: false,
            message: 'User not found',
          });
        }
    
        res.status(200).json({
          success: true,
          message: 'Successfully updated the user',
          user: updatedUser,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: 'Server error',
        });
      }
 }