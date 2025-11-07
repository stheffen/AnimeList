import { getAnimeResponse } from "@/libs/api-libs";
import React from "react";
import ImageSection from "@/components/Utilities/ImageSection";

const Page = async ({ params }) => {
  const { id } = await params;
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <div>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>RANGKING</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>SCORE</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Anggota</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="flex pt-4 px-4 gap-4 text-color-primary">
        <ImageSection
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
    </div>
  );
};

export default Page;
