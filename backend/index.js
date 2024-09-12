import app from "./app.js";
import dotEnv from "dotenv";
dotEnv.config();
import userRoutes from "./routes/index.js";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoute.js";
import profileRoutes from "./routes/profileRoutes.js";

const port = process.env.PORT;

app.use("/", userRoutes);
app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);
app.use("profile", profileRoutes);
// handle invalid endpoints
app.use("*", function(req, res){
    if (req.accepts('json')){
        return res.status(404).json({status: 404, message: "Invalid Endpoint"})
    }
})

const startServer = ()=>{
    app.listen(port, ()=>{
        console.log(`Server is running on http://localhost:${port}`);        
    })
}
startServer();
