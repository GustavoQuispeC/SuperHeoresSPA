import { getHeroesByPublisher } from "../helpers";
import PropTypes from 'prop-types';


export const HeroList = ({publisher}) => {
    const heroes = getHeroesByPublisher(publisher);
  return (
    <>
    <div>Listado de SuperHeroes</div>
    <hr/>
    <ul>
        {
            heroes.map(hero => (
                <li key={hero.id}>{hero.superhero}</li>
            ))
        }
    </ul>
  

    </>
    

  )
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
    }