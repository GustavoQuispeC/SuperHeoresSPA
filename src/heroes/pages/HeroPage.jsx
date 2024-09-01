import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const hero = getHeroById(id);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  // Estilos para la animación de desenrollado
  const imageStyles = {
    animation: "unroll 1s ease-out forwards",
    transformOrigin: "top center",
    opacity: 0,
  };

  return (
    <div className="container mt-5">
      {/* Definimos los estilos de animación dentro del componente */}
      <style>
        {`
          @keyframes unroll {
            0% {
              transform: scaleY(0);
              opacity: 0;
            }
            100% {
              transform: scaleY(1);
              opacity: 1;
            }
          }
        `}
      </style>
      <div className="row">
        <div className="col-md-4">
          <img
            src={`../assets/heroes/${hero.id}.jpg`}
            alt={hero.superhero}
            className="img-fluid rounded shadow"
            style={imageStyles} // Aplicamos el estilo de animación aquí
          />
        </div>
        <div className="col-md-8">
          <h3 className="mb-3">{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego:</b> {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance:</b> {hero.first_appearance}
            </li>
          </ul>
          <h5 className="mt-4">Characters</h5>
          <p>{hero.characters}</p>
          <button
            className="btn btn-outline-info mt-3"
            onClick={onNavigateBack}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
