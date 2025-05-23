import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon, SearchIcon, CalendarIcon, UserIcon } from 'lucide-react';
import { Button } from './ui/button';

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", icon: HomeIcon, path: "/" },
    { name: "Search", icon: SearchIcon, path: "/search" },
    { name: "Appointments", icon: CalendarIcon, path: "/appointments" },
    { name: "Profile", icon: UserIcon, path: "/profile" },
  ];

  return (
    <div className="flex flex-col h-screen overflow-x-hidden"> {/* ← correction ici */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <nav className="bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={`flex flex-col items-center ${
                location.pathname === item.path ? 'text-blue-500' : 'text-gray-500'
              }`}
              onClick={() => navigate(item.path)}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.name}</span>
            </Button>
          ))}
        </div>
      </nav>
    </div>
  );
};
