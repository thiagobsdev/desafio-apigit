import { useNavigate } from "react-router-dom";
import ButtonPage from "../../../components/ButtonPage";
import "./styles.css";


export default function Home() {
    
  const navigate = useNavigate();

  const handleClick = () => {
    // Use a função navigate para redirecionar para outra rota
    navigate("/search");
  };
  return (
    <div className="d-homePage">
      <h1 className="d-tilePage">Desafio Github API</h1>
      <p className="d-subtitlePage">DevSuperior - Escola de programação</p>
      <ButtonPage onClick={handleClick} />
    </div>
  );
}
