import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

const NotesGrid = ({ notes = [] }) => {
  const [defaultNotes, setDefaultNotes] = useState([
    {
      title: "Meeting Notes",
      content:
        "Discuss project timelines and deliverables. We need to ensure the project is on track and deliverables are completed on time. Don't forget the milestones.",
    },
    {
      title: "Grocery List",
      content:
        "Milk, Eggs, Bread, Butter, and other household essentials. Also, consider adding a few items like fruits and vegetables for the week's meals.",
    },
    {
      title: "Workout Plan",
      content:
        "Monday: Chest, Tuesday: Legs, Wednesday: Back, and Thursday: Shoulders. Ensure you're consistent and track your progress for better results.",
    },
    {
      title: "Ideas for App",
      content:
        "Consider a new UI/UX design for the mobile app. Focus on improving user experience and simplifying the navigation.",
    },
    {
      title: "Travel Plans",
      content:
        "Book flights and hotels for the upcoming trip. Check deals and offers to ensure budget-friendly travel. Pack essentials for the journey.",
    },
  ]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {defaultNotes.map((note, index) => (
        <NoteCard key={index} note={note} />
      ))}
    </div>
  );
};

const NoteCard = ({ note }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: note.title,
    content: note.content,
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openViewModal = () => {
    setIsViewModalOpen(true);
    setIsMenuOpen(false);
  };
  const openEditModal = () => {
    setIsEditModalOpen(true);
    setIsMenuOpen(false);
  };
  const closeModals = () => {
    setIsViewModalOpen(false);
    setIsEditModalOpen(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg relative h-60 flex flex-col justify-between">
        <div className="absolute top-2 right-2">
          <button
            className="text-gray-600"
            onClick={toggleMenu}
            aria-label="Options"
          >
            <FaEllipsisV />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
              <ul>
                <li
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={openViewModal}
                >
                  View
                </li>
                <li
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={openEditModal}
                >
                  Edit
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Delete</li>
              </ul>
            </div>
          )}
        </div>
        <h3 className="text-lg font-bold">{note.title}</h3>
        <p className="text-gray-600 mt-1 overflow-hidden text-ellipsis">
          {note.content.substring(0, 80)}...
        </p>
      </div>

      {/* View Modal */}
      {isViewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
            <h3 className="text-xl font-bold mb-4">{note.title}</h3>
            <p>{note.content}</p>
            <button
              className="mt-4 p-2 bg-blue-600 text-white rounded"
              onClick={closeModals}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Edit {note.title}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editedNote.title}
                  onChange={handleEditChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Content</label>
                <textarea
                  name="content"
                  value={editedNote.content}
                  onChange={handleEditChange}
                  className="w-full p-2 border rounded h-32"
                />
              </div>
            </div>
            <button
              className="mt-4 p-2 bg-blue-600 text-white rounded"
              onClick={closeModals}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesGrid;
