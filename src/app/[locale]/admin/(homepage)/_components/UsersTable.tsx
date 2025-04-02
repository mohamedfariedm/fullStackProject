"use client";
import { useState, useEffect } from "react";
import { fetchData, addItem, editItem, updateItem, deleteImage, handleImageUpload } from "@/utils/crudService";
type Item = {
  id: string | number;
  images?: string[];
  [key: string]: any;
};

interface DataTableProps {
  dataType: string;
}
const DataTable = ({ dataType }: DataTableProps) => {
  const [data, setData] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Item>({ id: '', images: [] });
    const [editingItem, setEditingItem] = useState<Item | null>(null);

  useEffect(() => {
    fetchData(dataType, setData);
  }, []);

  return (
    <div>
      <div className="mb-4">
        {Object.keys(newItem).map((key) =>
          key !== "images" ? (
            <input
              key={key}
              type="text"
              placeholder={key}
              className="border p-2 mr-2"
              value={newItem[key] || ""}
              onChange={(e) => setNewItem({ ...newItem, [key]: e.target.value })}
            />
          ) : null
        )}
        <button
          onClick={() => addItem(dataType, data, newItem, setData, setNewItem)}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add {dataType}
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="border-b">
            {data.length > 0 && Object.keys(data[0]).map((key) => <th key={key} className="p-2">{key}</th>)}
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b">
              {Object.keys(item).map((key) =>
                key === "images" ? (
                  <td key={key} className="p-2">
                    {item.images?.map((img, idx) => (
                      <img key={idx} src={img} alt={`img-${idx}`} className="w-12 h-12 object-cover inline-block mr-2" />
                    ))}
                  </td>
                ) : (
                  <td key={key} className="p-2">{item[key]}</td>
                )
              )}
              <td className="p-2">
                <button onClick={() => editItem(item, setEditingItem)}
                        className="bg-yellow-500 text-white px-2 py-1 mr-2">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingItem && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-bold">Edit {dataType}</h2>
          {Object.keys(editingItem).map((key) =>
            key !== "images" ? (
              <input
                key={key}
                type="text"
                className="border p-2 mr-2"
                value={editingItem[key]}
                onChange={(e) => setEditingItem({ ...editingItem, [key]: e.target.value })}
              />
            ) : null
          )}

          {/* Image Upload */}
          <input type="file" multiple onChange={(e) => handleImageUpload(e, editingItem, setEditingItem)} />

          {/* Display & Delete Images */}
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

          <button onClick={() => updateItem(dataType, data, editingItem, setData, setEditingItem)}
                  className="bg-green-500 text-white px-4 py-2 mt-4">
            Save
          </button>
          <button onClick={() => setEditingItem(null)}
                  className="bg-red-500 text-white px-4 py-2 ml-2">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
