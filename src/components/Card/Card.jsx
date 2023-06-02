import { Link } from "react-router-dom";
const Card = ({id, name, image, continent, capital, subregion, area, population}) => {
  return ( 
    <div className="card">
      <h2>{name} - {id}</h2>
      <img src={image} alt={image} />
      <p>Capital: {capital}</p>
      <p>Continent: {continent}</p>
      <p>Subregion: {subregion}</p>
      <p>Aarea: {area}</p>
      <p>Population: {population}</p>
      <Link to={`/detail/${id}`}>See details</Link>
    </div>
   );
}
 
export default Card;