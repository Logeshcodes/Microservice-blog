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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmU4ZGZjNWZjOTJhNDEyOTMxZmIxNyIsImVtYWlsIjoibG9nZXNoY0BleGFtcGxlLmNvbSIsImlhdCI6MTczNTI5ODYxNSwiZXhwIjoxNzM1MzAyMjE1fQ.aP1JDS4mZKD571fh9r8iGZb_tUNouCOdvC7GL3nQScw