const mongoose = require('mongoose')
const DB = process.env.DATABASE_URL;
mongoose.connect(DB).then(()=>{
    console.log('Database is connected');
}).catch((err)=>{
    console.log('Database is not connected');
})