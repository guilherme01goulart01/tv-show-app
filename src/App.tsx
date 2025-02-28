import { useShow } from "./hooks/useShow/useShow";
import { useEpisodes } from "./hooks/useEpisodes/useEpisodes";
import Loading from "./components/Loading/Loading";

//import CastList from "./components/CastList/CastList";
import EpisodesList from "./components/EpisodesList/EpisodesList";
import NavigationTabs from "./components/NavigationTabs/NavigationTabs";
import "./App.scss";
import Synopsis from "./components/Synopsis/Synopsis";
import { useState } from "react";
import CastList from "./components/CastList/CastList";
import ThophyList from "./components/ThophyList/ThophyList";

export default function App() {
  const { show, loading: showLoading } = useShow();
  const { episodes, loading: episodesLoading } = useEpisodes();

  const [activeTab, setActiveTab] = useState("general");

  if (showLoading || episodesLoading) return <Loading />;

  if (!show) return <p>Erro ao carregar os dados do show.</p>;

  return (
    <div className="container">
      <div className="background">
        <img
          src={show.Images?.Background || "/fallback.jpg"}
          alt="Background"
        />
      </div>

      <header className="show-header">
        <h1>{show.Title}</h1>
        <p>
          {"80% indicado"} / {show.Genres.map((g) => g.Title).join(" - ")} /{" "}
          {show.Year} / {"EUA"} / {"14"}
        </p>
      </header>

      <section className="content">
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "general" && <Synopsis synopsis={show.Synopsis} />}
        {activeTab === "cast" && <CastList cast={show.Cast} />}
        {activeTab === "awards" && <ThophyList />}
      </section>
      {<EpisodesList episodes={episodes} />}
    </div>
  );
}
