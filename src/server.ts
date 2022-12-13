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

// Create a database and Prisma model
// In this exercise you'll build on what you created 
// in 'Exercise: Create your own HTTP server'.
// Create a database for your application and 
// configure Prisma to use it. Then create a Prisma model 
// and a migration. Choose your own theme for the model.