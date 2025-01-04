"use client";

import React from "react";
import { ArrowCircleLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <button className="text-color-primary" onClick={handleBack}>
        <ArrowCircleLeft size={32} color="#fafafa" />
      </button>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
};

export default Header;
