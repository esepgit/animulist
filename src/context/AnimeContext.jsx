import { createContext, useState } from "react";

const AnimeContext = createContext()

const AnimeProvider = ({ children }) => {
  const [animeDetail, setAnimeDetail] = useState(null)
  const [showAnimeDetail, setShowAnimeDetail] = useState(false)

  const showAnime = (animeInfo) => {
    console.log("info", animeInfo)
    setAnimeDetail({
      image: animeInfo.images.webp.image_url,
      title: animeInfo.title,
      synopsis: animeInfo.synopsis
    })

    setShowAnimeDetail(true)
  }

  const closeAnimeDetail = () => {
    setShowAnimeDetail(false)
  }

  return (
    <AnimeContext.Provider value={{
      animeDetail,
      showAnime,
      closeAnimeDetail,
      showAnimeDetail
    }}>
      {children}
    </AnimeContext.Provider>
  )
}

export { AnimeContext, AnimeProvider }