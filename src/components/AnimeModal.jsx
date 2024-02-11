import AnimeDetail from "./AnimeDetail"
import { IconX } from "@tabler/icons-react";

function AnimeModal({ showModal , closeModal, anime }) {
  console.log("modal", anime)
  return (
    <section
      className={`bg-slate-400 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      } fixed lg:hidden top-0 left-0 right-0 h-screen transition-all duration-500`}
    >
      <button
        onClick={closeModal}
        className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity"
      >
        <IconX size={32} stroke={4} />
      </button>
      <article
        className={`${
          showModal ? "bottom-0" : "-bottom-full"
        } bg-white h-[85%] transition-all duration-500 absolute w-full rounded-tl-3xl rounded-tr-3xl text-center p-4`}
      >
        <AnimeDetail anime={anime} />
      </article>
    </section>
  );
}

export default AnimeModal