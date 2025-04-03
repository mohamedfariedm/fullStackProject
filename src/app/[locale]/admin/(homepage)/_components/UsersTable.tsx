"use client";

import { useState, useEffect } from "react";
import {
  fetchData,
  addItem,
  editItem,
  updateItem,
  deleteItem,
  deleteImage,
  handleImageUpload,
} from "@/utils/crudService";

type Item = {
  id: string | number;
  name?: string;
  email?: string;
  images?: string[];
  [key: string]: any;
};

interface DataTableProps {
  dataType: string;
}

const DataTable = ({ dataType }: DataTableProps) => {
  const [data, setData] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Item>({ id: '', name: '', email: '', images: [] });
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  useEffect(() => {
    fetchData(dataType, setData);
  }, [dataType]);

  return (
    <div className="p-4">
      {/* Add New Item */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 mr-2"
          value={newItem.name || ""}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mr-2"
          value={newItem.email || ""}
          onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
        />
        <button
          onClick={() => addItem(dataType, data, newItem, setData, setNewItem)}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add User
        </button>
      </div>

      {/* Data Table */}
      <table className="w-full border">
        <thead>
          <tr className="border-b">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Images</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.email}</td>
              <td className="p-2">
                {item.images?.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`img-${idx}`}
                    className="w-12 h-12 object-cover inline-block mr-2"
                  />
                ))}
              </td>
              <td className="p-2">
                <button
                  onClick={() => editItem(item, setEditingItem)}
                  className="bg-yellow-500 text-white px-2 py-1 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteItem(dataType, item.id, setData)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Item */}
      {editingItem && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-bold">Edit User</h2>
          <input
            type="text"
            className="border p-2 mr-2"
            value={editingItem.name || ""}
            onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="email"
            className="border p-2 mr-2"
            value={editingItem.email || ""}
            onChange={(e) => setEditingItem({ ...editingItem, email: e.target.value })}
            placeholder="Email"
          />

          {/* Image Upload */}
          <input type="file" multiple onChange={(e) => handleImageUpload(e, editingItem, setEditingItem)} />

          <div className="mt-2 flex gap-2">
            {editingItem.images?.map((img, index) => (
              <div key={index} className="relative">
                <img src={img} alt="Uploaded" className="w-16 h-16 object-cover rounded" />
                <button
                  onClick={() => deleteImage(editingItem, index, setEditingItem)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 text-xs"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => updateItem(dataType, data, editingItem, setData, setEditingItem)}
            className="bg-green-500 text-white px-4 py-2 mt-4"
          >
            Save
          </button>
          <button
            onClick={() => setEditingItem(null)}
            className="bg-red-500 text-white px-4 py-2 ml-2"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
