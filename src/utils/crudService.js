import { supabase } from "@/lib/supabaseClient";

export const fetchData = async (dataType, setData) => {
  try {
    const { data, error } = await supabase.from(dataType).select("*");
    if (error) throw error;
    setData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const addItem = async (dataType, data, newItem, setData, setNewItem) => {
  if (!newItem.name || !newItem.email) return alert("Name and Email are required!");

  newItem.images = newItem.images || [];
  newItem.id = "1";

  try {
    const { error } = await supabase.from(dataType).insert(newItem);
    if (error) throw error;

    fetchData(dataType, setData);
    setNewItem({ id: '', images: [] });
  } catch (error) {
    console.error("Error adding data:", error);
  }
};

export const editItem = (item, setEditingItem) => {
  setEditingItem(item);
};

export const updateItem = async (dataType, data, editingItem, setData, setEditingItem) => {
  try {
    const { error } = await supabase.from(dataType).update(editingItem).eq("id", editingItem.id);
    if (error) throw error;

    fetchData(dataType, setData);
    setEditingItem(null);
  } catch (error) {
    console.error("Error updating data:", error);
  }
};

export const deleteImage = (editingItem, imageIndex, setEditingItem) => {
  const updatedImages = editingItem.images.filter((_, idx) => idx !== imageIndex);
  setEditingItem({ ...editingItem, images: updatedImages });
};

export const uploadImage = async (file) => {
  try {
    const fileName = `${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage.from("uploads").upload(fileName, file);

    if (error) throw error;

    const { data: publicUrlData } = supabase.storage.from("uploads").getPublicUrl(fileName);
    return publicUrlData?.publicUrl || null;
  } catch (error) {
    console.error("Image upload failed:", error);
    return null;
  }
};

export const handleImageUpload = async (event, editingItem, setEditingItem) => {
  const files = event.target.files;
  if (files.length > 0) {
    const uploadedImages = await Promise.all(
      Array.from(files).map((file) => uploadImage(file))
    );

    setEditingItem({
      ...editingItem,
      images: [...(editingItem.images || []), ...uploadedImages.filter(Boolean)],
    });
  }
};

export const deleteItem = async (dataType, id, setData) => {
  const { error } = await supabase.from(dataType).delete().eq("id", id);
  if (error) console.error("Delete error:", error);
  fetchData(dataType, setData);
};
