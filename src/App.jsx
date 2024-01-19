import requests from "./services/requests";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import MiddleSection from "./components/MiddleSection";
import Footer from "./components/Footer";

function App() {
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    requests
      .getAll()
      .then((animes) => setAnimes(animes.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <Card animes={animes} />
      <div className="flex flex-wrap flex-col items-center justify-center md:flex-row py-10">
        <MiddleSection animes={animes} genre='4' />
        <MiddleSection animes={animes} genre='1' />
        <MiddleSection animes={animes} genre='10' />
      </div>

      <Footer />
    </>
  );
}

export default App
