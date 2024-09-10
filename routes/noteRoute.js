import express from "express";
import { validateRequest } from "../middleware/requestValidate.js";
import { noteSchema } from "../schemas/userSchema.js";
import { createNote, deleteNote, updateNote } from "../controllers/noteController.js";

const noteRouter = express.Router();

noteRouter.post("/create-notes", validateRequest(noteSchema), createNote);
noteRouter.put("/update-note/:noteId", updateNote);
noteRouter.delete("/delete-note/:noteId", deleteNote);



export default noteRouter;
