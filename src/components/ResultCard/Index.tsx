import "./styles.css";

import imgteste from "../../assets/nelio.png";

export default function ResultCard() {
  return (
    <div className="d-resultArea">
      <div className="d-result-divArea">
        <div>
          <img className="d-imgResult" src={imgteste} alt="" />
        </div>
        <div className="d-information">
            <div className="d-information-card">
                  <h3 className="title-card-information" >Informações</h3>
                  <div className="d-line-information" ><span>Perfil </span>: <p> https://api.github.com/users/acenelio</p></div>
                  <div className="d-line-information"><span>Seguidores </span>: <p> https://api.github.com/users/acenelio</p></div>
                  <div className="d-line-information"><span>Nacionalidade </span>: <p> https://api.github.com/users/acenelio</p></div>
                  <div className="d-line-information"><span>Nome </span>: <p> https://api.github.com/users/acenelio</p></div>
            </div>
        </div>
      </div>
    </div>
  );
}
