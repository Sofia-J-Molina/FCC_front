import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src="Título.png" alt="Logo FCC" className="logo-title" />
        </Link>

        <nav className="nav-bar">
          <Link to="/">INICIO</Link>

          <div className="submenu">
            <button
              className="submenu-button"
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              CLUBES
            </button>
            {submenuOpen && (
              <div className="submenu-content">
                <Link to="/club/1">Club Colon</Link>
                <Link to="/club/2">Yoga</Link>
                <Link to="/club/3">Tenis</Link>
              </div>
            )}
          </div>

          <Link to="/actividades">ACTIVIDADES</Link>
          <Link to="/contacto">CONTACTO</Link>
        </nav>
      </div>
    </header>
  );
}
