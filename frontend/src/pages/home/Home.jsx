import React, { useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import Layout from "../../components/Layout";
import NotesGrid from "../../components/Notes";

const Home = () => {
  const [note, setNote] = useState({ title: "", content: " " });
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, note]);
    setNote({ title: "", content: "" });
  };

  return (
    <Layout>
      <div className="flex-1 mx-auto">
        {/* Main content area */}
        <div className="flex-1 p-4 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Add a Note</h1>
            <div className="bg-white p-4 shadow-md rounded-md">
              {/* Quill Editor */}
              <QuillEditor
                value={note.content}
                onChange={(content) => setNote({ ...note, content })}
              />
              <button
                className="mt-4 p-2 bg-blue-600 text-white rounded"
                onClick={addNote}
              >
                Add Note
              </button>
            </div>

            {/* Notes Display Section */}
            <NotesGrid notes={note} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
