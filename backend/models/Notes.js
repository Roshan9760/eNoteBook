// import
const mongoose = require('mongoose');
const {Schema} = require('mongoose')

// create or define  schema
const NotesSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    tag : {
        type : String,
        default : "General"
    },

    date : {
        type : Date,
        default : Date.now
    }
})

// export schema
module.exports = mongoose.model('notes', NotesSchema);