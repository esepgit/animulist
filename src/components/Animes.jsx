import { useState, useEffect } from "react"
import AnimeList from "./AnimeList"
import axios from "axios"
import useAnimeContext from "../hooks/useAnimeContext"
import { animes as initialAnimes } from "../constants/initialAnimes"
import Navigation from "./Navigation"

let lastPage = 1000

function Animes() {
  const [allAnimes, setAllAnimes] = useState(initialAnimes.data)
  const [animeName, setAnimeName] = useState("")
  const [page, setPage] = useState(1)

  const { showAnime } = useAnimeContext()

  const animeByName = allAnimes.filter(anime => anime.title.toLowerCase().includes(animeName))
  

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime")
      .then(({data}) => {
        setAllAnimes(data.data)
        lastPage = data.pagination.last_visible_page
      })
      .catch(err => console.log(err))
  }, [])

  const handleClickPrev = () => {
    if (page > 1) {
      axios
        .get(`https://api.jikan.moe/v4/anime?page=${page - 1}`)
        .then(({ data }) => {
          setAllAnimes(data.data)
          setPage(data.pagination.current_page)
        })
        .catch((err) => console.log(err));
    }  
  }

  const handleClickNext = () => {
    if (page < lastPage) {
      axios
        .get(`https://api.jikan.moe/v4/anime?page=${page + 1}`)
        .then(({ data }) => {
          setAllAnimes(data.data);
          setPage(data.pagination.current_page);
        })
        .catch((err) => console.log(err));
    } 
  }

  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-2 rounded-2xl text-lg border">
          <input
            type="text"
            className="outline-none"
            placeholder="Search your anime..."
            value={animeName}
            onChange={(e) => setAnimeName(e.target.value.toLowerCase())}
          />
        </div>
      </form>
      <AnimeList animes={animeByName} showAnime={showAnime} />
      <Navigation onClickPrev={handleClickPrev} onClickNext={handleClickNext} page={page} />
    </section>
  );
}

export default Animes