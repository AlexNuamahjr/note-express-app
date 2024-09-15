import React, { useState } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-col">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <main className="flex-1 p-4 bg-gray-100">{children}</main>
    </div>
  );
};

export default Layout;
