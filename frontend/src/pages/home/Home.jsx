import React, { useState } from 'react';
import QuillEditor from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Layout from '../../components/Layout';

const Home = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, note]);
    setNote('');
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
            <QuillEditor />
          </div>

          {/* Notes Display Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Your Notes</h2>
            <div className="space-y-4">
              {/*note card */}
              <div className="p-4 bg-gray-100 shadow-md rounded-md">
                This is an example note.
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Home;
