const mongoose = require("mongoose");

const destinationSchema = mongoose.Schema(
 { 
  userid:{
    type: String,
    required: true,
      ref: "Destination",

  },
  url: {
    type: String,
    required: true,
  },
  http:{
    type: String,
    required: true,
  },
  header: {
    type:Object,
    required:true
  }
},
  {
    timestamps: true,
  }

);

module.exports = mongoose.model("Destination", destinationSchema);