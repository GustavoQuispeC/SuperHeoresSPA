
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}) => {
  return (
    <div className="card-group">
      <div
        className="card ms-3 shadow-lg border-0"
        style={{ maxWidth: 300, borderRadius: '10px', overflow: 'hidden' }}
      >
        <div className="row no-gutters">
          <div className="col-md-12">
            <img
              src={`/assets/heroes/${id}.jpg`}
              className="card-img-top img-fluid"
              alt={superhero}
              style={{
                objectFit: 'cover',
                height: '400px',
                width: '100%',
                transition: 'transform 0.3s ease-in-out',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title text-primary">{superhero}</h5>
              <p className="card-text text-secondary">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="card-text">
                  <strong>Characters: </strong>
                  {characters}
                </p>
              )}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`} className="btn btn-outline-primary mt-2">
                Más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
};
HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
