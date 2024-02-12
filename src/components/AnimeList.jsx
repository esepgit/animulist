import { animes as initialAnimes } from "../constants/initialAnimes"

function AnimeList({ animes=initialAnimes.data, showAnime }) {
  console.log(animes)
  return (
    <section className="justify-items-center pt-14 mx-4 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-10">
      {animes.map(anime => (
        <article key={anime.mal_id} onClick={() => showAnime(anime)} className="relative max-w-[225px] overflow-hidden cursor-pointer border-2 hover:border.slate-200 border-transparent shadow-slate-400/10 shadow-lg capitalize text-center bg-white rounded-[30px] font-semibold pb-4 group">
          <header className="max-h-[256px]">
            <img src={anime.images.webp.image_url} className=" group-hover:scale-110 transition-transform" />
          </header>
          <span className="absolute bottom-0 left-0 w-full bg-white">
            {anime.title}
          </span>
        </article>
      ))}
    </section>
  )
}

export default AnimeList