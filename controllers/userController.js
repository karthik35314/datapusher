const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const Destination = require("../models/destinationModel");


//@desc Create New user
//@route POST /api/User
//@access private
const createUser = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
   const availUser = await User.findOne({username: req.body.username})
   const availEmail = await User.findOne({username: req.body.email})
    try {
        if(availUser || availEmail) {
            return res.status(400).json({msg: 'Email or account name already exists'})
        }

        const newUser = User({
            userid:req.body.userid, 
            username: req.body.username,
            email: req.body.email,
            token:req.body.token
        });

        const user = await newUser.save();
        res.status(200).json(user)
    } catch (err) {
         res.status(500).json(err)
    }
});

//@desc Get user
//@route GET /api/User/:id
//@access private
const getUser = asyncHandler(async (req, res) => {
 try{
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
 }catch(err){
  res.status(404).json(err);
 }
 
  
});

//@desc Update user
//@route PUT /api/User/:id
//@access private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
  
    res.status(200).json(updatedUser);
    
  } catch (err) {
    res.json(err);
  }


});

//@desc Delete user
//@route DELETE /api/User/:id
//@access private
const deleteUser = asyncHandler(async (req, res) => {
 try {
  const user = await User.findById(req.params.id);
  await User.deleteOne({ _id: req.params.id });
  await Destination.remove({userid:req.body})
  res.status(200).json(user);
  
 } catch (err) {
  res.status(404).json(err)
 }
  
});

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};