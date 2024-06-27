import mongoose from "mongoose";

const userSchema =mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    newsLetterIsSubscribed: {
        type: Boolean,
        default: false,
    },
    reviews:[{
         type:String
    }],
    location:{
       city:{
        type:String,
        required:true
       },
       State:{
        type:String,
        required:true
       }
    },
    gender:String,
    age:Number,
    profilePic:{
        type:String,
        default:"https://shorturl.at/clkzX"
    }
});
const User=mongoose.model("User",userSchema);

export default User;
    
