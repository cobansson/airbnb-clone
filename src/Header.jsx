import "./App.css";
import navImage from "./nav-images/Vector.png";

function Navbar() {
  return (
    <nav>
      <img className="navbar-img" src={navImage}></img>
    </nav>
  );
}

export default function Header() {
  return (
    <header>
      <Navbar />
    </header>
  );
}
