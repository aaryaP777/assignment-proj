"use client";
import { useState } from "react";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import { artists } from "@/lib/data";

export default function ArtistListPage() {
  const [filtered, setFiltered] = useState(artists);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <FilterBlock original={artists} setFiltered={setFiltered} />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-1">
        {filtered.map((artist) => (
          <ArtistCard key={artist.id} {...artist} />
        ))}
      </div>
    </div>
  );
}
