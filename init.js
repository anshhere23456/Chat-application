const mongoose = require("mongoose");
const chat = require("./models/chat");


main()
  .then(() => {console.log("connection sucess");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats=[
    {
        from:"neha",
        to:"priya",
        msg:"hello",
        created_at: new Date()
    },
    {
        from:"rohit",
        to:"monu",
        msg:"hello",
        created_at: new Date()
    },
    {
        from:"nonu",
        to:"sonu",
        msg:"hello",
        created_at: new Date()
    },
    {
        from:"ram",
        to:"preeti",
        msg:"hello",
        created_at: new Date()
    },
];


chat.insertMany(allchats);
