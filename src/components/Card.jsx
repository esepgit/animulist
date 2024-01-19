
import Title from "./Title";

export default function Card({ animes }) {

 console.log('an',animes)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        {/* Título */}
        <Title
          text="Animes en emisión"
          colorStroke="stroke-orange-400"
          size="text-3xl"
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {animes.map((anime) => (
            <a key={anime.mal_id} href={anime.url} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={anime.images.webp.large_image_url}
                  alt="anime image"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <p className="mt-3 text-center text-sm text-gray-700">
                {anime.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
