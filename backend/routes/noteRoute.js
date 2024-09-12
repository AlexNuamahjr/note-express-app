import express from "express";
import { validateRequest } from "../middleware/requestValidate.js";
import { noteSchema } from "../schemas/validationSchema.js";
import { createNote, deleteNote, getDeletedNotes, restoreDeletedNotes, updateNote, viewNote } from "../controllers/noteController.js";
import { isAuthenticated } from "../middleware/authenticate.js";

const noteRouter = express.Router();
// veiw all notes
noteRouter.get("/", isAuthenticated, viewNote);
// view notes in the bin
noteRouter.get("/bin", isAuthenticated, getDeletedNotes);
// create notes
noteRouter.post("/create-notes", isAuthenticated, validateRequest(noteSchema), createNote);
// restore notes from the bin
noteRouter.post("/restore/:noteId", isAuthenticated, restoreDeletedNotes);
// update notes
noteRouter.put("/update-note/:noteId", isAuthenticated, updateNote);
// delete notes
noteRouter.delete("/delete-note/:noteId", isAuthenticated, deleteNote);

export default noteRouter;
