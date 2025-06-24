import "./Club.css";
import "../../components/Club/ClubDetail.jsx";
import { ClubDetail } from "../../components/Club/ClubDetail.jsx";
export function Club() {
  /*lo siguiente, hay que ver como hacer para consumir desde la api, mientras tanto, simularemos los datos desde aqui*/
  const clubs = [
    {
      id: "1",
      name: "Club Racing",
      image: "./images/logoRacing.JPG",
    },
    {
      name: "Club Gimnasia y Esgrima",
      image: "./images/logoEsgrima.png",
    },
    {
      name: "Club Colon",
      image: "./images/logoColon.png",
    },
  ];
  return (
    <>
      <section className="club-section">
        <h2 className="club-title">
          Carta de Clubes: <br /> ¡unite y participá!
        </h2>

        <div className="club-grid">
          {clubs.map((club, index) => (
            <div key={index} className="club-card">
              <h3 className="club-name">{club.name}</h3>
              <a href={`#${club.id}`}>
                <img
                  className="club-image"
                  src={club.image}
                  alt={`Logo de ${club.name}`}
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
