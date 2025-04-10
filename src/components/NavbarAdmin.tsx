'use client';

import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-[60px] bg-white shadow-sm px-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <User className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
}
