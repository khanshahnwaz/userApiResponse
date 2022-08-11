
import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
const app = express();
app.use(cors())
app.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const temp = await response.json();
    res.send(temp)
})
app.get(cors())
app.listen(3001)