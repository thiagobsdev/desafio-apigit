import "./styles.css";

type Props  = {
  onClick: () => any ;
}


export default function ButtonPage ( {onClick}: Props)  {
  return (
    <div className="d-divButton">
      <button onClick={onClick} className="d-button-pages" type="submit">Começar</button>
    </div>
  );
}
