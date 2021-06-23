require("dotenv").config({ path: "./configg.env" });

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const connectionDB = require('./config/db');
const errorHandler = require('./middleware/Erro');


//Database collection....
connectionDB();

app.use(express.json());

app.use('/api/admin', require('./routes/auth'));
app.use('/api/tailor', require('./routes/tailor'));
app.use('/api/users', require('./routes/users'));

app.use('/api/private', require('./routes/private'));
app.use('/api/tailorprivate', require('./routes/TailorPrivate'));
app.use('/api/userprivate', require('./routes/userprivate'));

app.use('/api/product', require("./routes/product"));

app.use(express.static('./public'));


app.use(errorHandler);

app.get('/', (req, res)=>{
    res.send(`<h1>Hi this is the home page of backend (API's) of Final project</h1>`);
})
const server = app.listen(port, ()=>{
    console.log(`your website hosting at port no ${port}`);  
});

console.log("Hi Application, how are you");

process.on("unhandledRejection", (err, Promise)=>{
    console.log(`Logged Error: ${err}`);
})
