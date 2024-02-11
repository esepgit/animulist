import { useEffect, useState } from "react"
import AnimeList from "./AnimeList"
import axios from "axios"

function Animes() {
  const [allAnimes, setAllAnimes] = useState([])

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime")
      .then(({data}) => setAllAnimes(data.data));
  }, [])

  return (
    <section>
      <form>
        <div>
          <input />
        </div>
      </form>
      <AnimeList animes={allAnimes} />
    </section>
  )
}

export default Animes