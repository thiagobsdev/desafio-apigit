import { useEffect, useState } from "react";
import ButtonPage from "../../../components/ButtonPage";
import ResultCard from "../../../components/ResultCard/Index";
import { ProfileDTO } from "../../../models/profiles";
import "./styles.css";
import { findByName } from "../../../services/profiles-services";

export default function Search() {
  const [nameSearched, setNameSearched] = useState("");
  const [erro, setErro] = useState<boolean>(false);

  const [profile, setProfile] = useState<ProfileDTO>({
    avatar_url: "",
    followers: 0,
    location: "",
    name: "",
    url: "",
  });

  useEffect(() => {
    if (nameSearched !== "") {
      setErro(false);
    }
  }, [nameSearched]);

  function SearchProfile() {
    if (nameSearched !== "") {
      findByName(nameSearched)
        .then((response) => {
          setProfile(response.data);
          setErro(false);
        })
        .catch(() => {
          setErro(true);
        });
    }
  }

  function handleNameInput(event: any) {
    setNameSearched(event.target.value);
  }

  return (
    <>
      <div className="d-input-area">
        <div className="d-inputDivArea">
          <h2 className="d-titleInputArea">Encontre um perfil Github</h2>
          <form
            onSubmit={() => {
              event?.preventDefault();
            }}
          >
            <input
              name="name"
              value={nameSearched}
              type="text"
              onChange={handleNameInput}
              className="d-inputText"
              placeholder="Usuário Github"
            />
          </form>

          <ButtonPage onClick={SearchProfile} />
        </div>
      </div>
      {console.log(erro)}
      {nameSearched !== "" && erro == true && (
        <h1 className="tagErro">Erro ao buscar usuário</h1>
      )}
      {erro == false && profile.name != "" && <ResultCard profile={profile} />}
    </>
  );
}
