import { useState, useEffect } from "react"
import AnimeList from "./AnimeList"
import axios from "axios"
import useAnimeContext from "../hooks/useAnimeContext"
import { animes as initialAnimes } from "../constants/initialAnimes"

function Animes() {
  const [allAnimes, setAllAnimes] = useState(initialAnimes.data)
  const [animeName, setAnimeName] = useState("")

  const { showAnime } = useAnimeContext()

  const animeByName = allAnimes.filter(anime => anime.title.toLowerCase().includes(animeName))
  
  // useEffect(() => {
  //   axios
  //     .get("https://api.jikan.moe/v4/anime")
  //     .then(({data}) => setAllAnimes(data.data));
  // }, [])
  
  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-2 rounded-2xl text-lg border">
          <input type="text" className="outline-none" placeholder="Search your anime..." value={animeName} onChange={(e) => setAnimeName(e.target.value.toLowerCase()) } />
        </div>
      </form>
      <AnimeList animes={animeByName} showAnime={showAnime} />
    </section>
  )
}

export default Animes