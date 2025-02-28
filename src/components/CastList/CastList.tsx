import { Cast } from "../../types/TvShows";
import "./CastList.scss";

interface CastListProps {
  cast: Cast[];
}

export default function CastList({ cast }: CastListProps) {
  return (
    <section className="cast">
      {cast.length === 0 ? (
        <p className="cast__empty">Elenco não disponível</p>
      ) : (
        <div className="cast__list">
          {cast.map((actor) => (
            <div key={actor.ID} className="cast__card">
              <p className="cast__name">{actor.Name}</p>
              <p className="cast__character">Atriz ou Ator</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
