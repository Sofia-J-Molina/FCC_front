import "./Footer.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="top">
          <div className="column">
            <h2>FCC</h2>
            <p>El deporte nos une, FCC te impulsa</p>
            <Link to="/">
              <img src="Título.png" alt="Logo FCC" className="logo-title" />
            </Link>
          </div>

          <div className="column">
            <h2>Links</h2>
            <nav>
              <Link to="/">Inicio</Link>
              <Link to="/">Clubes</Link>
              <Link to="/">Actividades</Link>
              <Link to="/">Contacto</Link>
            </nav>
          </div>

          <div className="column">
            <h2>Contacto</h2>

            <p>
              <strong>Dirección:</strong>
              <br />
              Av. siempreviva 742
              <br />
              Chivilcoy, Buenos Aires
              <br />
              <a
                href="https://maps.app.goo.gl/5bLMUB2b7Mj9uJYo8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en el mapa
              </a>
            </p>

            <p>
              <strong>Correo electrónico:</strong>
              <br />
              <a href="FCC@gmail.com">FCC@gmail.com</a>
            </p>

            <p>
              <strong>Teléfono:</strong>
              <br />
              <a href="tel:+542346432493">+54 (2346) 431493</a>
            </p>
          </div>
        </div>

        <hr />

        <div className="bottom">
          <p>© Copyright 2025. Todos los Derechos Reservados</p>

          <nav>
            <a
              href="https://www.instagram.com/clubcolonchivilcoy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colon
            </a>
            <a
              href="https://www.instagram.com/clubgimnasiach/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gimnasia y Esgrima
            </a>
            <a
              href="https://www.instagram.com/racingchivilcoy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Racing
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
