import express from "express";
import { validateRequest } from "../middleware/requestValidate.js";
import { noteSchema } from "../schemas/userSchema.js";
import { createNote, deleteNote, updateNote, viewNote } from "../controllers/noteController.js";
import { isAuthenticated } from "../middleware/authenticate.js";

const noteRouter = express.Router();

noteRouter.get("/", isAuthenticated, viewNote);
noteRouter.post("/create-notes", isAuthenticated, validateRequest(noteSchema), createNote);
noteRouter.put("/update-note/:noteId", isAuthenticated, updateNote);
noteRouter.delete("/delete-note/:noteId", isAuthenticated, deleteNote);



export default noteRouter;
