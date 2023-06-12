const asyncHandler = require("express-async-handler");
const Destination = require("../models/destinationModel");


//@desc Create New Destination
//@route POST /api/Destination
//@access private
const createDestination = asyncHandler(async (req, res) => {
 
    try {
        const newDestination = Destination({
            userid:req.body.userid,
            url:req.originalUrl, 
            http: req.hostname,
            header:{
              app_id:req.headers.app_id,
              app_secret_token:req.headers.app_secret_token,
              accept:req.headers.accept,
              contentType:req.headers["content-type"]
            }         
        });

        const destination = await newDestination.save();
        res.status(200).json(destination)
    } catch (err) {
         res.status(500).json(err)
    }
});

//@desc Get Destination
//@route GET /api/Destination/:id
//@access private
const getDestination = asyncHandler(async (req, res) => {
 try{
  const destination = await Destination.find({userid: req.params.id})
    res.status(200).json(destination);

 }catch(err){
  res.status(404).json(err);
 }
 
  
});

//@desc Update Destination
//@route PUT /api/Destination/:id
//@access private
const updateDestination = asyncHandler(async (req, res) => {
  const Destination = await Destination.findById(req.params.id);
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
  
    res.status(200).json(updatedDestination);
    
  } catch (err) {
    res.json(err);
  }


});

//@desc Delete Destination
//@route DELETE /api/Destination/
//@access private
const deleteDestination = asyncHandler(async (req, res) => {
  console.log("deleted",req.body)
const {userid}=req.body
 try {
  Destination.remove( userid)
  
 } catch (err) {
  res.status(404).json(err)
 }
  
});

module.exports = {
  getDestination,
  createDestination,
  updateDestination,
  deleteDestination,
};