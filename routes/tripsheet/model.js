const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const tripsheetSchema = mongoose.Schema({
    tripsheetno:{
        type:String,
        required:true
    },
     slno:{
        type:Number,
        required:true
    },    
    trip_date:{
        type:String,
        default:Date.now()
    }
})

/*const counterSchema = Schema({
    id:{
        type:String
    },
    seq:{
        type:Number
    }
})


const seq = mongoose.seq('counter',counterSchema)*/
const tripsheetModel = mongoose.model('tripsheet',tripsheetSchema)

module.exports = tripsheetModel