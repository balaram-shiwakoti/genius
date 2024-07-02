import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const id = useLocation();
  return (
    <header className="header">
      <Link to={"/"}>
        <button
          className={`header-btn ${id.pathname == "/" && "header-btn-user"} `}
        >
          User subscription
        </button>
      </Link>

      <Link to={"/visualization"}>
        <button
          className={`header-btn ${
            id.pathname == "/visualization" && "header-btn-data"
          } `}
        >
          Data visualization
        </button>
      </Link>
    </header>
  );
}

export default Header;
