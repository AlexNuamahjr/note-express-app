import app from "./app.js";
import dotEnv from "dotenv";
dotEnv.config();

const port = process.env.PORT || 4563;

const startServer = ()=>{
    app.listen(port, ()=>{
        console.log(`Server is running on http://localhost:${port}`);
        
    })
}

startServer();