const mongoose = require('mongoose');

const subSchema = new mongoose.Schema({   
    subCode:{
        type:String,
        required:true
    },
    subName:{
        type:String,
    },  
    credit:{
        type:Number,
        required:true
    }, 
    year:{
        type:Number,
        required:true
    },
    semester:{
        type:Number,
        required:true
    },
    grade:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('subjects', subSchema);