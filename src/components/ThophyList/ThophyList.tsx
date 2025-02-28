import { CiTrophy } from "react-icons/ci";

import "./ThophyList.scss";

const ThophyListMock = [
  {
    title: "Emmy Awards 2023",
    category: "Melhor roteiro em uma série dramática",
  },
  {
    title: "Emmy Awards 2022",
    category: "Melhor minissérie ou antologia",
  },
];

export default function ThophyList() {
  return (
    <section className="thophy">
      {ThophyListMock.length === 0 ? (
        <p className="thophy__empty">Sem prêmios</p>
      ) : (
        <div className="thophy__list">
          {ThophyListMock.map((thophy) => (
            <div className="thophy__card">
              <div className="icondiv">
                <CiTrophy size={23} />
              </div>

              <div className="contentdiv">
                <p className="thophy__name">{thophy.title}</p>
                <p className="thophy__character">{thophy.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
