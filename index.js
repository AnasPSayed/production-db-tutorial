require('dotenv').config()

const express = require('express')

const cors = require('cors')

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.get('/', (request, response)=>{
    response.send('<h1>This is a test application</h1>')
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

