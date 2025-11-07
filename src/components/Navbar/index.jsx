import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-black border border-b-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-color-primary text-2xl">
          AnimeList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
