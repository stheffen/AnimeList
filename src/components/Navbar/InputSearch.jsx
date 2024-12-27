"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const InputSearch = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari Anime"
        className="w-full p-2 rounded focus:outline-color-accent text-color-dark"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} color="#000000" />
      </button>
    </div>
  );
};

export default InputSearch;
//https://youtu.be/t0OVq8nKKe4?si=SV1pkSs_RYU2mILH&t=1846
