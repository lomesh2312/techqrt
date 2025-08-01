import React from 'react';
import { Search, Bell, RefreshCw, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Menu button */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <div className="w-4 h-4 flex flex-col justify-between">
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side - Notifications and Profile */}
        <div className="flex items-center space-x-4">
          {/* Notification icons */}
          <div className="flex items-center space-x-2">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></span>
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <RefreshCw size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></span>
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></span>
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-800">Louis Anderson</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center">
              <User size={20} className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;