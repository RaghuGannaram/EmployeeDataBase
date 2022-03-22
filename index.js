const express = require('express');
const mysql = require('mysql');

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.listen(3000, ()=> console.log("App started at localhost:3000"))