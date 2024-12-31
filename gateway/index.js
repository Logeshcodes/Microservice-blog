const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();


app.use(cors());
app.use(express.json());

const authenticate = require('./middleware/authMiddleware')

app.use('/post' ,  authenticate, proxy('http://localhost:3001/'))
app.use('/auth' ,  proxy('http://localhost:3000/')) //auth service
app.use('/comment', authenticate, proxy('http://localhost:3002/'));

app.listen(8000 , ()=> {
    console.log('Running on 8000')
})

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzM2YjE2YTU2ODg2NTIyYzQ3NjcwNiIsImVtYWlsIjoibG9nZXNoY0BleGFtcGxlLmNvbSIsImlhdCI6MTczNTYxNzM4NCwiZXhwIjoxNzM1NjIwOTg0fQ.x0hjSwMbQGrAVSSUmqwdEZn5SOmI9j-1WgH2doPR918