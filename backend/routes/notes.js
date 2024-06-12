// import the files that require 
const { fetchallnotes, addnotes, updatenotes, deletenotes} = require("../controller/noteController.js");
const router = require("express").Router();
const { body}= require('express-validator');
const fetchuser = require('../middleware/fetchuser.js');

// some minimum condition 
const authVerify = [
    body('title', 'Title must be of atleast 2 characters').isLength({ min: 2 }),
    body('description', 'Description must be of atleast 5 characters').isLength({ min: 5 })
]


// ceate route 
router.get('/fetchallnotes', fetchuser, fetchallnotes)
router.post('/addnotes', fetchuser,authVerify, addnotes)
router.put('/updatenotes/:id', fetchuser, updatenotes)
router.delete('/deletenotes/:id', fetchuser, deletenotes)

// export route
module.exports = router