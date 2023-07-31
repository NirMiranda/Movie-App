const { Router } = require("express"); 
const userRouter=Router();
const{addUser ,getUsers,getUsersById,updateUser,deleteUser,loginUser,refreshT,logOutUser}=require('../Controllers/userController')



// User actions
userRouter.post('/register',addUser);
userRouter.post('/login',loginUser);
userRouter.post('/refresh-token',refreshT);
userRouter.delete('/logout',logOutUser);


// CRUD

userRouter.get("/users/:id", getUsersById);
userRouter.get("/users", getUsers);
userRouter.post('/updateUser',updateUser);
userRouter.post('/deleteUser',deleteUser);


module.exports=userRouter;

