import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-[5rem] h-[calc(100vh] flex flex-col items-center py-4 border-r-4">
      <div className="flex flex-col items-center gap-6 mt-8">
        {/* Icons will be added here */}
        <div className="w-8 h-8 bg-black rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
