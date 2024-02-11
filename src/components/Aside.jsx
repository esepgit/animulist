import AnimeDetail from "./AnimeDetail";

function Aside({ anime, isLoading }) {
  return (
    <section className="hidden lg:block sticky top-0 h-screen">
      <div className="grid ">
        <div className="justify-center w-[80%]  text-white font-bold capitalize my-5">
          <h2 className="lg:text-black text-2xl">{anime?.title}</h2>
          <span className="lg:text-black text-sm">{anime?.["title-jp"]}</span>
        </div>
        <article
          className={`z-20 px-2 w-full h-[85%] rounded-tl-3xl rounded-tr-3xl transition-all duration-500 bg-white ${
            anime && !isLoading ? "left-0" : "left-[50vw]"
          }`}
        >
          <AnimeDetail anime={anime} />
        </article>
      </div>

      <article
        className={`z-20 grid place-content-center text-center absolute w-full h-[85%] bottom-0 rounded-tl-3xl rounded-tr-3xl bg-white ${
          anime ? "left-[50vw]" : "left-0"
        } transition-all duration-500`}
      >
        <span className="text-lg text-slate-400 px-20">
          Select a anime to display here.
        </span>
      </article>
    </section>
  );
}

export default Aside