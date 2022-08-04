// const mongoose = require('mongoose');

// var urlSchema = new mongoose.Schema({
//     sr_no: {
//         type: Number,
//         required: 'This field is required.'
//     },
//     url_title: {
//         type: String,
//         required: 'This field is required.'
//     },
//     url_desc: {
//         type: String,
//         required: 'This field is required.'
//     },
//     video_file :
//     {
//         type: String,
//         unique : false
//     }
// },{
//     versionKey: false
// });



const mongoose=require('mongoose')
const urlSchema=new mongoose.Schema({
    PoolID:{
        type:Number,
        required:true,
        unique:true
    },
    PoolName:{
        type:String,
        //required:true,
        trim:true
    },
    Hemper1:{
        
        type: String,
        unique : false
    },
   
    Hemper1Worth:{
        type:Number,
       // required:true,
     },
     Hemper2:{
        type:String,
        unique : false
     },
   
    Hemper2Worth:{
        type:Number,
        //required:true,
     },
     Hemper3:{
        type:String,
        unique : false
    },
   
    Hemper3Worth:{
        type:Number,
        //required:true,
     },
    
    CoinsNeededToParticipate:{
        type:Number,
        //required:true,
    },
    PoolStartDate:{
        type:Date
    },
    PoolEndDate:{
        type:Date
    }

})
const url_schema = new mongoose.model('video1Schema', urlSchema);

module.exports = url_schema

// const poolsData=new mongoose.model("Pools",poolSchema)
// module.exports=poolsData