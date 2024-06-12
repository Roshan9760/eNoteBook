//import 
const Note = require('../models/Notes.js')

// ROUTE 1 : Get all the Notes of loggedIn user using GET method : api/notes/fetchallnotes - Login required
const fetchallnotes = async (req, res) => {      
    try {

        // find function will find all the notes related to the specified user     
        const notes = await Note.find({ user: req.user.id })

        // send the respose 
        res.json(notes)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error While Fetching Notes");
        }

}

// ROUTE 2 : Add a Note using POST method : api/notes/addnotes - Login required
const addnotes = async (req, res) => {      
    try {
            // destructuring of the request body
            const {title, description, tag} = req.body;

            // creating a new Note with title, description, tage and user id
            const note = new Note ({
                title, description, tag, user : req.user.id
            })

            // save the created note
            const savedNote = await note.save();

            // return the saved note as response
            res.json(savedNote)

    } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error While Adding Notes");
    }
}

// ROUTE 3 : Update an existing Note using PUT method : api/notes/updatenotes - Login required
const updatenotes = async (req, res) => {
            
            // destructuring of the request body
            const {title, description, tag} = req.body;

            try{
            // create a newNote object
            const newNote = {}

            //if user updated anything then only update that in your newNote
            if(title){newNote.title = title}
            if(description){newNote.description = description}
            if(tag){newNote.tag = tag}

            // find the note to be updated and update it
            let note = await Note.findById(req.params.id)
            if(!note){return req.status(404).send("Not Found")}

            // if the user id corresponding to the note to be updated is not same as that of
            // the user id of the loggedIn user then don't allow user to do so
            if(note.user.toString() !== req.user.id){
                return res.status(401).send("Not Allowed")
            }

            note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
            res.json({note})
    } catch (error) {
        
        console.error(error.message);
        res.status(500).send("Internal Server Error While Updating Notes");
    }
}

// ROUTE 4 : Delete an existing Note using DELETE method : api/notes/deletenotes - Login required
const deletenotes = async (req, res) => {
    try {
            // find the note to be deleted and delete it
            let note = await Note.findById(req.params.id)
            if(!note){return req.status(404).send("Not Found")}

            // if the user id corresponding to the note to be deleted is not same as that of
            // the user id of the loggedIn user then don't allow user to do so
            if(note.user.toString() !== req.user.id){
                return res.status(401).send("Not Allowed")
            }

            note = await Note.findByIdAndDelete(req.params.id)
            res.json({"Success": "Note has been deleted",note:note})

    } catch (error) {
        
            console.error(error.message);
            res.status(500).send("Internal Server Error While Deleting  Notes");
    }
}


module.exports = {fetchallnotes, addnotes, updatenotes, deletenotes};