import { Club } from "../Club/Club";

export function HomePage() {
  return (
    <>
      <main className="home-container">
        <section>
          <h1 className="home-title">“El deporte nos une, FCC te impulsa”</h1>

          <div className="home-content">
            <div className="home-image">
              <img
                src="../images/home.JPG"
                alt="Cartel Chivilcoy"
                className="imghome"
              />
            </div>

            <div className="home-text">
              <p>
                En FCC te abrimos las puertas a una comunidad llena de energía,
                compañerismo y pasión por el deporte. Ofrecemos una amplia red
                de clubes en Chivilcoy donde podés elegir entre múltiples
                actividades deportivas y recreativas para todas las edades y
                niveles.
                <br />
                <br />
                Ya sea que busques competir, entrenar o simplemente disfrutar en
                equipo, acá encontrarás tu lugar. Porque no se trata solo de
                moverse, sino de crecer juntos, de hacer amistades y sentir que
                pertenecés.
                <br />
                <br />
                El deporte nos une, FCC te impulsa.
              </p>
            </div>
          </div>
        </section>

        <Club />
      </main>
    </>
  );
}
