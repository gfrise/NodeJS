import "dotenv/config";

import app from "./app";

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

// Create a database and Prisma model
// In this exercise you'll build on what you created 
// in 'Exercise: Create your own HTTP server'.
// Create a database for your application and 
// configure Prisma to use it. Then create a Prisma model 
// and a migration. Choose your own theme for the model.