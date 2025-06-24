import { useEffect, useState } from "react";
/**import { fetchActivities } from "../../data/activitiesAPI"; */

import "./Activities.css";

export function Activities() {
  const fetchActivities = () =>
    Promise.resolve([
      {
        id: "basquet",
        name: "Básquet",
        icon: "🏀",
        image: "/images/basquet.jpg",
        description:
          "Un deporte dinámico que fortalece la agilidad, la estrategia y el compañerismo. ¡Perfecto para quienes disfrutan de la velocidad y el trabajo en equipo!",
        horarios: [
          "Infantiles: martes y jueves de 18:00 a 19:30 hs",
          "Juveniles: lunes, miércoles y viernes de 20:00 a 21:30 hs",
        ],
      },
      {
        id: "futbol",
        name: "Fútbol",
        icon: "⚽",
        image: "/images/futbol.jpg",
        description:
          "Trabajamos en equipo, aprendemos a competir sanamente y nos divertimos en cada pase.",
        horarios: [
          "Infantiles: lunes, miércoles y viernes de 17:30 a 19:00 hs",
          "Juveniles: martes y jueves de 20:00 a 21:30 hs",
        ],
      },
      {
        id: "patin",
        name: "Patín",
        icon: "🛼",
        image: "/images/patin.jpg",
        description:
          "El patinaje artístico desarrolla equilibrio, expresión corporal y disciplina. Actividad divertida y elegante.",
        horarios: [
          "Nivel inicial: lunes y miércoles de 17:00 a 18:30 hs",
          "Nivel intermedio/avanzado: martes y jueves de 18:30 a 20:00 hs",
        ],
      },
    ]);

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities().then((data) => setActivities(data));
  }, []);

  return (
    <section className="activities-section">
      <h2 className="activities-title">Actividades deportivas</h2>

      {activities.map((act) => (
        <div className="activity-container" key={act.id}>
          <div className="activity-image-box">
            <img src={act.image} alt={act.name} />
            <h3>{act.name}</h3>
          </div>
          <div className="activity-info">
            <p>
              <strong>
                {act.icon} {act.name}:
              </strong>{" "}
              {act.description}
            </p>
            <p>
              <strong>Horarios:</strong>
            </p>
            <ul>
              {act.horarios.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
