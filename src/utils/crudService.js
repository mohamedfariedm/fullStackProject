export const fetchData = async (dataType, setData) => {
    try {
      const response = await fetch(`/api/data?type=${dataType}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      setData(result.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  export const addItem = async (dataType, data, newItem, setData, setNewItem) => {
    if (!newItem.name || !newItem.email) return alert("Name and Email are required!");
  
    // Ensure images array exists
    newItem.images = newItem.images || [];
  
    const updatedData = { items: [...data, newItem] };
  
    try {
      const response = await fetch(`/api/data?type=${dataType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) throw new Error("Failed to update data");
  
      fetchData(dataType, setData);
      setNewItem({});
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  
  export const editItem = (item, setEditingItem) => {
    setEditingItem(item);
  };
  
  export const updateItem = async (dataType, data, editingItem, setData, setEditingItem) => {
    const updatedItems = data.map((item) =>
      item.id === editingItem.id ? editingItem : item
    );
  
    try {
      const response = await fetch(`/api/data?type=${dataType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: updatedItems }),
      });
  
      if (!response.ok) throw new Error("Failed to update data");
  
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
      const formData = new FormData();
      formData.append("file", file);
  
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) throw new Error("Failed to upload image");
  
      const result = await response.json();
      return result.url; // This is the stored image URL
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
  