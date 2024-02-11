import { useState, useEffect } from "react"
import AnimeList from "./AnimeList"
import axios from "axios"
import useAnimeContext from "../hooks/useAnimeContext"

function Animes() {
  const [allAnimes, setAllAnimes] = useState([])
  const [animeName, setAnimeName] = useState("")

  const { showAnime } = useAnimeContext()

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime")
      .then(({data}) => setAllAnimes(data.data));
  }, [])
  
  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-2 rounded-2xl text-lg border">
          <input type="text" className="outline-none" placeholder="Search your anime..." value={animeName} onChange={(e) => setAnimeName(e.target.value) } />
        </div>
      </form>
      <AnimeList animes={allAnimes} showAnime={showAnime} />
    </section>
  )
}

export default Animes