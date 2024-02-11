
function AnimeDetail({ anime }) {
  console.log("detail", anime)
  return (
    <>
      <header className="absolute left-1/2 -translate-x-1/2">
        <img src={anime.image} />
      </header>
      <div>
        <h2>{anime.title}</h2>
        <p>{anime.description}</p>
        <p>{anime.synopsis}</p>
      </div>
    </>
  );
}

export default AnimeDetail