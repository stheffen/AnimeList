import AnimeList from "@/components/AnimeList";
import { Header } from "@/components/AnimeList/Header";
import Pagination from "@/components/Utilities/Pagination";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
  reproduces,
  shuffleArray,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=5");

  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduces(recommendedAnime, 20);
  return (
    <>
      {/* Anime Terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
