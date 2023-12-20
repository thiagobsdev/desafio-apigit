
import ButtonPage from "../../../components/ButtonPage";
import ResultCard from "../../../components/ResultCard/Index";
import "./styles.css";

export default function Search() {
  return (
    <>
      <div className="d-input-area">
        <div className="d-inputDivArea">
            <h2 className="d-titleInputArea">Encontre um perfil Github</h2>
            <input type="text" className="d-inputText" placeholder="Usuário Github"/>
            <ButtonPage/>
        </div>
      </div>
      <ResultCard />
    </>
  );
}
