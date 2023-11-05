// import 
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


// create login handler 
const login = async (req, res, next) => {
      try {
              // fetch the data from req body
              const { email, password } = req.body;

              // find the user in database
              const user = await User.findOne({ email });

              // if not found then return status 
              if (!user)
                return res.json({ massage: "Incorrect Email or Password", status: false });
              
              // compare the password
              const isPasswordValid = await bcrypt.compare(password, user.password);

              // if password not match return status
              if (!isPasswordValid)
                return res.json({ message: "Incorrect Email or Password", status: false });

              // dlete the user password and create a jwt token
              delete user.password;
              const data = { user: {id: user.id} }
              const authToken = jwt.sign(data, process.env.JWT_SECRET);

              // send the respose with jwt token
              return res.status(200).json({ 
                message:"Login Sucessfully ",
                status: true, authToken 
              });

      } catch (error) {
            res.status(401).json({ 
              meaage: "Failed To Login", 
              status: false ,error
            });
      }
};

// create register handler 
const register = async (req, res, next) => {
      try {
                // get user info from req body
                const { username, email, password } = req.body;

                // find its email from database
                const emailCheck = await User.findOne({ email });

                // if already register send the status 
                if (emailCheck)
                  return res.status(200).json({ 
                          message: "This Email is already Register ",
                           status: false 
                        });

                // hash the password
                const hashedPassword = await bcrypt.hash(password, 10);

                // create the new user
                const user = await User.create({
                  email,
                  username,
                  password: hashedPassword,
                });

                // delete the password and generate the jwt token 
                delete user.password;
                const data = { user: {  id: user.id}}
                const authToken = jwt.sign(data, process.env.JWT_SECRET);

                // send the status and token 
                return res.status(200).json({
                  message: "Registration Successful",
                  status: true,
                  authToken,
                });
      } catch (error) {
            return res.status(400).json({
              error: "Error while register the user or this username already taken by someone so pls choose some other",
            });
      }
    };

// create get user by ID handler 
const getUserById = async (req, res, next) => {
          try {
            // get the user from database using ID
            const user = await User.findById(req.params.id);

            // send the status and user details
            res.status(200).json({ user });

          } catch (error) {
            return res.status(400).json({
              error: "Error while getting  the user",
            });
          }
};

// export 
module.exports = { login, register, getUserById };