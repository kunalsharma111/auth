const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const fs = require('fs');
require('./config/config');
require('./startup/prod') (app);
require('./models/db');

require('./startup/routes') (app);

app.listen( process.env.PORT,err=>{
    if(err){console.log(err);}
    console.log(`Server Started On Port : ${process.env.PORT}`);
})