import { Navigate, useParams } from "react-router-dom";

import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = getHeroById(id);
  if (!hero) {
    return <Navigate to="/marvel"/>;
  }


  return (
    <div>
      <h1>Hero Page</h1>
      <hr />
      {hero ? (
        <div>
          <h3>{hero.superhero}</h3>
          <p>{hero.publisher}</p>
          <p>{hero.first_appearance}</p>
          <p>{hero.characters}</p>
          <img src={`../assets/heroes/${hero.id}.jpg`} alt={hero.superhero} />
        </div>
      ) : (
        <h3>Hero not found</h3>
      )}
    </div>
  );
};
