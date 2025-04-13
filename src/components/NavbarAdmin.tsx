'use client';

import { Bell, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    document.cookie = "auth=; Max-Age=0; path=/"; // ✅ remove auth cookie
    const locale = window.location.pathname.split('/')[1]; // ✅ get current locale
    window.location.href = `/${locale}/admin/login`; // ✅ redirect properly
  };

  return (
    <header className="h-[60px] bg-white shadow-sm px-4 flex items-center justify-between relative">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4 relative">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />

        <div ref={dropdownRef}>
          <User
            className="w-5 h-5 text-gray-600 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border shadow rounded z-50">
              <button
                onClick={() => {
                  setShowDropdown(false);
                  setOpenDialog(true);
                }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Radix Dialog for confirmation */}
      <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 shadow-lg focus:outline-none">
            <Dialog.Title className="text-lg font-semibold mb-2">
              Confirm Logout
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-500 mb-4">
              Are you sure you want to log out?
            </Dialog.Description>
            <div className="flex justify-end gap-4">
              <Dialog.Close asChild>
                <button className="px-4 py-2 bg-gray-200 text-sm rounded hover:bg-gray-300">
                  Cancel
                </button>
              </Dialog.Close>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700"
              >
                OK
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
