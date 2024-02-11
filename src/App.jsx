
import AnimeModal from "./components/AnimeModal";
import Animes from "./components/Animes";
import useAnimeContext from "./hooks/useAnimeContext";


function App() {
  const { showAnimeDetail, closeAnimeDetail, animeDetail } = useAnimeContext()

  return (
    <>
      <section>
        <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
          <Animes />
          <AnimeModal
            showModal={showAnimeDetail}
            closeModal={closeAnimeDetail}
            anime={animeDetail}
          />
        </main>
      </section>
    </>
  );
}

export default App
