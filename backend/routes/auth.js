// import the files that require
const {login, register, getUserById,} = require("../controller/userController.js");
const router = require("express").Router();
  
// ceate route
router.post("/login", login);
router.post("/register", register);
router.get("/getuser/:id", getUserById);

// export route
module.exports = router;
