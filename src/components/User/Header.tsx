import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to={"/"}>
        <button className="header-btn">User subscription</button>
      </Link>

      <Link to={"/visualization"}>
        <button className="header-btn">Data visualization</button>
      </Link>
    </header>
  );
}

export default Header;
