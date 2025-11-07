import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-5 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="flex flex-col justify-center items-center m-2 cursor-pointer text-color-primary hover:text-color-accent text-center transition-all"
            key={index}
          >
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={1000}
              height={1000}
              className="w-52 max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-md text-sm pt-1 h-5 text-wrap ">
              {anime.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
