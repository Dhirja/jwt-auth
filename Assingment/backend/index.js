const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/userout')
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(cors({credentials:true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());

app.use('/api', router)

// app.use('/', (req,res,next) => {
//     res.send('hello dhiraj')
// });
let url = 'mongodb://localhost:27017/tummoc-auth'
mongoose.connect(url).then(()=>{
    app.listen(8000)
    console.log('database running on port 8000')
}).catch((err)=>{
    console.log(err);
})

