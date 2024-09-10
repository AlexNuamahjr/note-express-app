import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// create note
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { userId } = req.session;
    const newNote = await prisma.note.create({
      data: {
        title,
        content,
        author: {
          connect: { id: Number(userId) },
        },
      },
    });
    return res
      .status(200)
      .json({ message: "note created successfully", newNote });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occur while creating note" });
  } finally {
    await prisma.$disconnect();
  }
};

// update note
export const updateNote = async (req, res) => {
  try {
    const { userId } = req.session;
    const { title, content } = req.body;
    const { noteId } = req.params;

    // check if note exists
    const isNoteExists = await prisma.note.findUnique({
      where: { id: Number(noteId) },
    });

    if (!isNoteExists) {
      return res.status(404).json({ error: "Note not found" });
    }

    // ensure the note belongs to the user
    if (isNoteExists.authorId !== userId) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // update note
    const updatedNote = await prisma.note.update({
      where: { id: Number(noteId) },
      data: {
        title: title ? `${isNoteExists.title}\n${title}` : isNoteExists.title,
        content: content ? `${isNoteExists.content}\n${content}` : isNoteExists.content
      },
    });

    return res
      .status(200)
      .json({ message: "Note updated successfully", note: updatedNote });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occur while updating note" });
  } finally {
    await prisma.$disconnect();
  }
};

// delete note
export const deleteNote = async (req, res)=>{
    try {
        const {userId} = req.session;
        const {noteId} = req.params;

        // check if note exists
        const isNoteExists = await prisma.note.findUnique({
            where: {id: Number(noteId)}
        });

        if (!isNoteExists){
            return res.status(404).json({error: "Note not found"});
        }

        // ensure the user is the owner of the note
        if (isNoteExists.authorId !== userId){
            return res.status(400).json({error: "Unauthorize"});
        }

        // delete note
        await prisma.note.delete({
            where: {id: Number(noteId)}
        })

        return res.status(200).json({message: "Note deleted successfully"});

    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "An error occur while deleting note"})
    }finally{
        await prisma.$disconnect();
    }
}