 const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/app').then(()=>{
    console.log('connection established');
}).catch((err) => {
    console.log('connection error  :'+ err);
})


const ms = mongoose.Schema({
name: String ,
age:Number,
designation: String
});

const sk = mongoose.model('details', ms);

// insert data into collection

const db = new sk(
    {
        name:"manish",
        age:22,
        designation:"manager"
    }
)

db.save()

// show all data from collection

sk.find().then((res)=>{
    console.log(res)
}).catch((err) => {
    console.log(err)
})

// update data in collection

sk.findOneAndUpdate({
    name: "manish"
},
{
    name:"maniah"
}

).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

// delete data from collection

sk.findOneAndRemove({
    name: "maniah"
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
