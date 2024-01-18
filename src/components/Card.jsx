import requests from "../services/requests";
import { useState, useEffect } from "react";

export default function Card() {
    const [animes, setAnimes] = useState([]);

useEffect(() => {
  requests.getAll()
  .then(animes => 
    setAnimes(animes.data)
  )
  .catch(err => console.log(err))
}, [])
 console.log('an',animes)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Animes</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {animes.map(anime => (
            <a key={anime.mal_id} href={anime.url} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={anime.images.webp.large_image_url}
                  alt='anime image'
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{anime.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
