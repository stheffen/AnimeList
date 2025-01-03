import AnimeList from "@/components/AnimeList";
import { Header } from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
  shuffleArray,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  // menggunakan 2 cara berbeda untuk melakukan random
  // CARA 1
  // recommendedAnime = { data: shuffleArray(recommendedAnime).slice(0, 8) };
  // CARA 2
  recommendedAnime = reproduce(recommendedAnime, 4);
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
// ada tugas di menit 13.17 sesi 6 nextjs afrizal
export default Page;
