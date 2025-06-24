import { useState } from "react";

export default function FilterBlock({ original, setFiltered }: any) {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const applyFilter = () => {
    let filtered = original;
    if (category)
      filtered = filtered.filter((a: any) => a.category === category);
    if (location)
      filtered = filtered.filter((a: any) => a.location === location);
    setFiltered(filtered);
  };

  return (
    <div className="w-full md:w-64 border p-4 rounded space-y-4">
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border rounded p-2"
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="DJ">DJ</option>
        <option value="Dancer">Dancer</option>
        <option value="Speaker">Speaker</option>
      </select>
      <input
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="w-full border p-2 rounded"
      />
      <button
        onClick={applyFilter}
        className="w-full bg-black text-white py-2 rounded"
      >
        Filter
      </button>
    </div>
  );
}
