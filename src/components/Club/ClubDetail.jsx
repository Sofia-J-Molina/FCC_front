import { useParams } from "react-router-dom";

import "./ClubDetail.css";

export function ClubDetail() {
  const clubs = [
    {
      id: "1",
      name: "Racing Club",
      image: "/images/logoRacing.JPG",
      description:
        "Con más de 100 años de historia, Racing es uno de los íconos deportivos de la ciudad. Su sede en Av. F. Suárez 313 ofrece espacios amplios y equipos comprometidos para formarte en lo deportivo y humano.",
      activities: "básquet, fútbol, patín y más",
      schedule:
        "Secretaría: Lunes a viernes de 8 a 12 hs. Actividades: 17 a 22 hs.",
      message: "🔥 No solo venís a entrenar: venís a hacer historia. ¡Sumate!",
    },
    {
      id: "2",
      name: "Club Gimnasia y Esgrima",
      image: "/images/logoEsgrima.png",
      description:
        "Espacio para el bienestar físico y mental. Actividades en un ambiente relajado y armonioso.",
      activities: "yoga, meditación, pilates",
      schedule: "Lunes a sábados de 9 a 21 hs.",
      message: "🧘‍♀️ Equilibrá cuerpo y mente. Sumate a la calma.",
    },
    {
      id: "3",
      name: "Club de Yoga",
      image: "/images/logoColon.png",
      description:
        "Espacio para el bienestar físico y mental. Actividades en un ambiente relajado y armonioso.",
      activities: "yoga, meditación, pilates",
      schedule: "Lunes a sábados de 9 a 21 hs.",
      message: "🧘‍♀️ Equilibrá cuerpo y mente. Sumate a la calma.",
    },
  ];

  const { id } = useParams();
  const club = clubs.find((c) => c.id === id);

  if (!club) {
    return <p style={{ padding: "20px" }}>Club no encontrado.</p>;
  }

  return (
    <section className="club-detail">
      <div className="club-detail-image">
        <img src={club.image} alt={`Logo ${club.name}`} />
      </div>

      <div className="club-detail-content">
        <h2>{club.name}</h2>
        <p>{club.description}</p>
        <p>
          <strong>Actividades:</strong> {club.activities}
        </p>
        <p>
          <strong>Horarios:</strong> {club.schedule}
        </p>
        <p className="club-detail-highlight">{club.message}</p>

        <button className="club-detail-button">Ver actividades</button>
      </div>
    </section>
  );
}
