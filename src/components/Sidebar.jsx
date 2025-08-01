import React from 'react';
import { 
  LayoutDashboard, 
  Megaphone, 
  BarChart3, 
  Users, 
  DollarSign, 
  BookOpen, 
  MessageSquare, 
  Settings 
} from 'lucide-react';

const Sidebar = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'campaign', label: 'Campaign', icon: Megaphone, badge: '1' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: '4' },
    { id: 'social', label: 'Social Network', icon: Users },
    { id: 'revenue', label: 'Revenue', icon: DollarSign },
  ];

  const otherItems = [
    { id: 'guide', label: 'Guide', icon: BookOpen },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: '16' },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const MenuItem = ({ item, isActive, onClick }) => {
    const Icon = item.icon;
    return (
      <button
        onClick={() => onClick(item.id)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
          isActive 
            ? 'bg-orange-100 text-orange-600 shadow-sm' 
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }`}
      >
        <div className="flex items-center space-x-3">
          <Icon size={20} className={`${isActive ? 'text-orange-600' : 'text-gray-500 group-hover:text-gray-700'}`} />
          <span className="font-medium">{item.label}</span>
        </div>
        {item.badge && (
          <span className={`px-2 py-1 text-xs rounded-full font-medium ${
            isActive 
              ? 'bg-orange-600 text-white' 
              : 'bg-orange-500 text-white'
          }`}>
            {item.badge}
          </span>
        )}
      </button>
    );
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">In</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Inpostly</span>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex-1 px-4 py-6">
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Main Menu</p>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
                onClick={onSectionChange}
              />
            ))}
          </div>
        </div>

        {/* Others Section */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Others</p>
          <div className="space-y-1">
            {otherItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
                onClick={onSectionChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;