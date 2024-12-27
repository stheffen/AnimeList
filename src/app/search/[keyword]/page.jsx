import { getAnimeResponse } from "@/app/libs/apis";
import AnimeList from "@/components/AnimeList";
import { Header } from "@/components/AnimeList/Header";
import Link from "next/link";

const Page = async ({ params }) => {
  const { keyword } = await params;
  const decodeKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <>
      {/* Anime Pencarian */}
      <section>
        <Header title={`Pencarian untuk ${decodeKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
