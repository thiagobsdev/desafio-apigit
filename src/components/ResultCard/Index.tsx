import "./styles.css";



import { ProfileDTO } from "../../models/profiles";

type Props = {
  profile: ProfileDTO
}

export default function ResultCard({ profile }: Props) {
  return (
    <div className="d-resultArea">
      <div className="d-result-divArea">
        <div>
          <img className="d-imgResult" src={profile.avatar_url} alt="" />
        </div>
        <div className="d-information">
            <div className="d-information-card">
                  <h3 className="title-card-information" >Informações</h3>
                  <div className="d-line-information" ><span>Perfil </span>: <p> {profile.url}</p></div>
                  <div className="d-line-information"><span>Seguidores </span>: <p> {profile.followers}</p></div>
                  <div className="d-line-information"><span>Nacionalidade </span>: <p> {profile.location}</p></div>
                  <div className="d-line-information"><span>Nome </span>: <p> {profile.name}</p></div>
            </div>
        </div>
      </div>
    </div>
  );
}
