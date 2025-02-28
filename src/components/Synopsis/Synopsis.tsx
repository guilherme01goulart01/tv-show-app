import { IoShareOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { CiFaceFrown } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";

import "./Synopsis.scss";

interface SynopsisProps {
  synopsis: string;
}

export default function Synopsis({ synopsis }: SynopsisProps) {
  return (
    <div className="synopsis">
      <div className="synopsis__buttons">
        <div className="synopsis__button">
          <div className="synopsis__icon-circle">
            <AiOutlinePlus />
          </div>
          <p className="synopsis__button-text">Minha Lista</p>
        </div>
        <div className="synopsis__button">
          <CiFaceFrown
            className="synopsis__icon"
            style={{ margin: "-2px", color: "#626365" }}
            size={32}
          />
          <p className="synopsis__button-text">Avaliar</p>
        </div>
        <div className="synopsis__button">
          <div className="synopsis__icon-circle">
            <GoDotFill />
          </div>
          <p className="synopsis__button-text">Gravar</p>
        </div>
        <div className="synopsis__button">
          <div className="synopsis__icon-circle">
            <IoShareOutline />
          </div>
          <p className="synopsis__button-text">Compartilhar</p>
        </div>
      </div>
      <div className="synopsis__content">
        <h2 className="synopsis__title">SINOPSE</h2>
        <p className="synopsis__text">{synopsis}</p>
      </div>
    </div>
  );
}
