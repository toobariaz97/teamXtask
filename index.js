require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const userRoute = require('./routes/user')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user/api', userRoute)
console.log("I am");

app.listen(port, () => {
    console.log("App is Running", +port);
})