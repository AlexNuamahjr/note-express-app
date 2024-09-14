import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-gray-800" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-gray-800" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transform lg:transform-none lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:w-64 h-screen`}
      >
        <div className="p-4">
          {/* Sidebar content */}
          <h2 className="text-2xl font-semibold">My Sidebar</h2>
          <ul className="mt-6 space-y-4">
            <li className="hover:bg-gray-700 p-2 rounded">Dashboard</li>
            <li className="hover:bg-gray-700 p-2 rounded">Notes</li>
            <li className="hover:bg-gray-700 p-2 rounded">Recycle Bin</li>
            <li className="hover:bg-gray-700 p-2 rounded">Profile</li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-64 p-4">
        
        <h1 className="text-2xl font-bold">Welcome to My Notes App</h1>
      </div>
    </div>
  );
}

export default Sidebar;
