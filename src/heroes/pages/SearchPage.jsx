import { getHeroesByName } from "../helpers";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
//import { HeroCard } from "../components";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  //para navegar entre paginas
  const navigate = useNavigate();

  //?para obtener los parametros de la url
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);
 

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="Find your hero"
              autoComplete="off"
              className="form-control"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-info mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />

          {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
