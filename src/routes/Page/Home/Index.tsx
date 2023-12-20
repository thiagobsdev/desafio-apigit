import ButtonPage from "../../../components/ButtonPage";
import "./styles.css"


export default function Home() {
    return ( 
        <div className="d-homePage">
            <h1 className="d-tilePage">Desafio Github API</h1>
            <p className="d-subtitlePage">DevSuperior - Escola de programação</p>
            <ButtonPage/>
        </div>
    );
}