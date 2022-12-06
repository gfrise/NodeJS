import express from 'express'
// require('dotenv').config()
import "dotenv/config"

const app = express()

const port = process.env.PORT 

app.get("/", (request, response) => {
    response.json('Hola a todos')
})
app.listen(port, () => {
    console.log('server running at port '+ port)
})

export default app