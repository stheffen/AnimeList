"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const InputSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      if (inputValue.trim() === "") {
        // Jika kosong, fokus kembali ke input
        if (searchRef.current) {
          searchRef.current.focus();
        }
        return; // Tidak melanjutkan ke halaman berikutnya
      }
      router.push(`/search/${keyword}`);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari Anime"
        className="w-full p-2 rounded"
        value={inputValue}
        ref={searchRef}
        onKeyDown={handleSearch}
        onChange={handleChange}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} color="#0a0a0a" />
      </button>
    </div>
  );
};

export default InputSearch;
//https://youtu.be/t0OVq8nKKe4?si=SV1pkSs_RYU2mILH&t=1846
