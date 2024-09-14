import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const RecycleBin = () => {
  const [deletedNotes, setDeletedNotes] = useState([]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-4 w-full">
        <h1 className="text-3xl font-bold mb-4">Recycle Bin</h1>
        <div>
          {deletedNotes.length === 0 ? (
            <p>No deleted notes.</p>
          ) : (
            deletedNotes.map((note) => (
              <div key={id} className="p-4 bg-red-100 mb-4 rounded shadow">
                <div dangerouslySetInnerHTML={{ __html: note }} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RecycleBin;
