import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header className="d-header">
      <Link to="/">
        <div className="d-title">Github API</div>
      </Link>
    </header>
  );
}
