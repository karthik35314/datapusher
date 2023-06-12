const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  try {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
      
    if (!token) {
      res.status(401).json(("User is not authorized or token is missing"));
    }
      jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, decoded) => {
        req.user = decoded.user;
        next();
      });
    
  } else{
    res.status(401).json(("User is not authorized1"));

  }
}catch (err) {

    res.status(500).json(("internal server error"));
    
  }
 

  }
);

module.exports = validateToken;