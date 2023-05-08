import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    firstname:{
        type:String,
        required: [true, "requires first name"]
    },
    lastname:{
        type:String,
        required: [true, "last name is required"]
    },
    email:{
        type:String,
        required: [true, "requires email"]
    },
    password:{
        type:String,
        required: [true, "requires password"]
    },
    profilepicture:{
        type:String   
    },
    isBlock: {
        type:Boolean,
        default: false
    },
    isAdmin: {
        type:Boolean,
        default: false
    },
    role: {
        type:String,
        enum: ["Admin", "Editor", "Guest"]
    },
    views: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    Blocked: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    followers: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    award: {
        type:String,
        enum:["Bronze", "Silver", "Gold"],
        default: "Bronze"
    }

   
}, {
    timestamps: true,
    toJSON:{virtuals:true}
})

const User = mongoose.model("User", userModel);

export default User;