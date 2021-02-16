const express = require('express');
const cors = require('cors');

const  apiRouter = require('./routes');
const app = express();

app.use(express.json());

app.use('/api/weather', apiRouter);

app.listen(process.env.port || '8080', ()=>{
    console.log('server is running on port 8080')
});



