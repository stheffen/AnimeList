import AnimeList from "@/components/AnimeList";
import { Header } from "@/components/AnimeList/Header";
import Link from "next/link";

const Page = async ({ params }) => {
  const { keyword } = await params;
  const decodeKeyword = decodeURI(keyword);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`
  );
  const searchAnime = await response.json();

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
