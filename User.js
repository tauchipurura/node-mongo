const mongoose = require("mongoose")


const addressSchema = new mongoose.Schema(
    {
    street: String,
    city: String
    }
)


const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max:100,
        validate:{
            validator: v => v%2 ===0,
            message: props => `${props.value} is not an even number`
        }
    },
    email : {
        type: String,
        minlength: 10,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: ()=> Date.now(),
    },
    updatedAt :{
        immutable:true,
        type: Date,
        default: ()=> Date.now(),
    },
    bestFriend : mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema

})

module.exports=  mongoose.model("User", userSchema)