const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 4563;

const startServer = ()=>{
    app.listen(port, ()=>{
        console.log(`Server is running on http://localhost:${port}`);
        
    })
}

startServer();