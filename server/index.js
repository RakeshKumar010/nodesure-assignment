const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors())
app.use(express.json())
dotenv.config({ path: './config.env' })
require('./db/conn')
app.use(require('./router/router'))

const PORT= process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`SERVER IS OPEN AT localhost:${PORT}`);

})