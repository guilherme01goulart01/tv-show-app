import { useState } from "react";
import { Episodes } from "../../types/Episodes";
import "./EpisodesList.scss";

interface EpisodesListProps {
  episodes: Episodes[];
}

export default function EpisodesList({ episodes }: EpisodesListProps) {
  const [season, setSeason] = useState(1);
  const [openEpisodeId, setOpenEpisodeId] = useState<string | null>(null);

  const validEpisodes = episodes.filter((ep): ep is Episodes => ep !== null);

  const filteredEpisodes = validEpisodes.filter(
    (ep) => ep.SeasonNumber === season
  );

  const getWatchedTime = (duration: number) =>
    Math.floor(Math.random() * duration);

  const toggleEpisode = (id: string) => {
    setOpenEpisodeId(openEpisodeId === id ? null : id);
  };

  return (
    <section className="episodes-list">
      <div className="episodes-list__tabs">
        {[...new Set(validEpisodes.map((ep) => ep.SeasonNumber))].map((num) => (
          <div
            key={num}
            className={`episodes-list__tab ${
              season === num ? "episodes-list__tab--active" : ""
            }`}
            onClick={() => setSeason(num)}
          >
            T{num}
          </div>
        ))}
      </div>

      {/* Lista de Episódios */}
      <ul className="episodes-list__items">
        {filteredEpisodes.map((ep) => {
          const watchedTime = getWatchedTime(ep.Duration);
          const progress = (watchedTime / ep.Duration) * 100;
          const isOpen = openEpisodeId === ep.ID;

          return (
            <li
              className={`episode ${isOpen ? "episode--open" : ""}`}
              key={ep.ID}
            >
              <div
                className="episode__content"
                onClick={() => toggleEpisode(ep.ID)}
              >
                <div className="episode__info">
                  <span className="episode__number">{ep.EpisodeNumber}</span>
                  <p className="episode__title">{ep.Title}</p>
                </div>
                <button className="episode__play-button">▶</button>
              </div>

              {isOpen && (
                <div className="episode__details">
                  <img
                    className="episode__thumbnail"
                    src={ep.Image}
                    alt={ep.Title}
                  />

                  {/* Barra de progresso */}
                  <div className="episode__progress-bar">
                    <div
                      className="episode__progress"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  {ep.Synopsis ? (
                    <p className="episode__synopsis">{ep.Synopsis}</p>
                  ) : (
                    <p className="episode__synopsis">Sinopse não disponível.</p>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
