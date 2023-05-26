const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

run()
async function run(){
    
    try {
        const user = await User.create({
            name: "Tau",
            age: 27,
            email:"taurai@gmail.com",
            hobbies: ["Weight lifting", "Bowling"],
            address:{
                street: "Main Street",
            },
        })
        // const user = new User({ name: "Tau", age:26})
        // await user.save()
        console.log(user)   
    }catch (e){
        console.log(e.message)
    }
}
