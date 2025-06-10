import React from 'react';
import { LogOut } from 'lucide-react';
export const Header = () => {
  return <header className="flex justify-between items-center pb-6 border-b border-zinc-200">
      <div>
        <div className="h-12 flex items-center">
          <img src="/logo_transparent_background.png" alt="WN CP Logo" className="h-full w-auto" />
        </div>
      </div>
      <div className="header-controls">
        <button className="flex items-center gap-2 px-4 py-2 bg-red-700 text-white font-semibold rounded-lg shadow-sm hover:bg-red-800 transition-colors duration-200">
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </header>;
};