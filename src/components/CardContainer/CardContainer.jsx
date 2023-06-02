import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCountries, getActivities, getByContinent, getByPopulation, searchCountries, searchActivities, getByName } from "../../redux/action";
import paginate from "../../helpers/paginate";
import SearchForm from "../SearchForm/SearchForm";
import ActCard from "../ActCard/ActCard";

const CardContaner = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getCountries());
      dispatch(getActivities());
   }, [dispatch]);

   const countries = useSelector((state) => state.countries);
   const activities = useSelector((state) => state.activities);
   const searchQuery = useSelector((state) => state.searchQuery);
   const continentFilter = useSelector((state) => state.byContinent);
   const [displayed, setDisplayed] = useState([]);
   const [displayedObj, setDisplayedObj] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [maxPage, setMaxPage] = useState(null);
   let pagination = paginate(countries);
   
   useEffect(() => {
         setDisplayed(pagination.items);
         setMaxPage(pagination.totalPages);
         setDisplayedObj(countries);
         // eslint-disable-next-line
      }, [countries]);
   
   const putActivities = (event) => {
      if(event.target.id === "get-activities") {
         setCurrentPage(1);
         setDisplayedObj(activities);
         pagination = paginate(activities);
         setDisplayed(pagination.items);
         setMaxPage(pagination.totalPages);
      }
      if(event.target.id === "get-countries") {
         setCurrentPage(1);
         setDisplayedObj(countries);
         pagination = paginate(countries);
         setDisplayed(pagination.items);
         setMaxPage(pagination.totalPages);
      }
   }

   const putQuery = (name, option) => {
      if(option === "country"){
         dispatch(searchCountries(name));
      } else {
         dispatch(searchActivities(name));
      }
   }

   useEffect(() => {
      setCurrentPage(1);
      setDisplayedObj(searchQuery);
      // eslint-disable-next-line
      pagination = paginate(searchQuery);
      setDisplayed(pagination.items);
      setMaxPage(pagination.totalPages);
    }, [searchQuery])
    
    useEffect(() => {
       setCurrentPage(1);
       setDisplayedObj(continentFilter);
       // eslint-disable-next-line
       pagination = paginate(continentFilter);
       setDisplayed(pagination.items);
       setMaxPage(pagination.totalPages);
     }, [continentFilter])
     
     const handlePages = (event) => {
      if(event.target.id === "prev-btn") {
         if(currentPage === 1) return;
         pagination = paginate(displayedObj, currentPage -1);
         setCurrentPage(currentPage - 1)
         setDisplayed(pagination.items);
      }
      if(event.target.id === "next-btn") {
         if(currentPage === maxPage) return;
         setCurrentPage(currentPage + 1);
         pagination = paginate(displayedObj, currentPage + 1);
         setDisplayed(pagination.items);
      }
      if(event.target.id === "last-btn") {
         if(currentPage === maxPage) return;
         setCurrentPage(maxPage);
         pagination = paginate(displayedObj, maxPage);
         setDisplayed(pagination.items);
      }
      if(event.target.id === "first-btn") {
         if(currentPage === 1) return;
         setCurrentPage(1);
         pagination = paginate(displayedObj, 1);
         setDisplayed(pagination.items);
      }
   }

   const byContinents = (event) => {
      dispatch(getByContinent(event.target.value));
   }
   const byPopulatioin = (event) => {
      if(event.target.id === 'byPop') {
         dispatch(getByPopulation('A'));
      }
      if(event.target.id === 'byPop2') {
         dispatch(getByPopulation());
      }
   }
   const byName = (event) => {
      if(event.target.id === 'nameAZ') {
         dispatch(getByName('AZ'));
      }
      if(event.target.id === 'nameZA') {
         dispatch(getByName());
      }
   }

  return ( 
    <div>
      <SearchForm putQuery={putQuery}/>
      <div className="card-filters">
         <button id="get-activities" onClick={putActivities}>Get Act</button>
         <button id="get-countries" onClick={putActivities}>Get Cuontries</button>
         <button id="byPop" onClick={byPopulatioin}>POP1</button>
         <button id="byPop2" onClick={byPopulatioin}>POP2</button>
         <button id="nameAZ" onClick={byName}>Asc.</button>
         <button id="nameZA" onClick={byName}>Desc.</button>
      </div>
      <div className="continent-filter">
      <label>
      Filter by continent:
      <select name="continents" onChange={byContinents}>
        <option value="All" >All</option>
        <option value="Asia">Asia</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
      </select>
    </label>
      </div>
      <div className="grid-fluid">
      {displayed.map((el) => {
         if(typeof el.id === 'string') {
            return (
               <Card 
                  key={el.name}
                  id={el.id}
                  name={el.name}
                  image={el.image}
                  continent={el.continent}
                  capital={el.capital}
                  subregion={el.subregion}
                  area={el.area}
                  population={el.population}
               />
            )
         } else {
            return (
               <ActCard 
               key={el.id}
               id={el.id}
               name={el.name}
               length={el.length}
               difficulty={el.difficulty}
               season={el.season}

               paises={el.countries}
            />
            )
         }
      }
      )}
      </div>
      <div className="pagination">
      <button id="first-btn" onClick={handlePages}>First</button>
      <button id="prev-btn" onClick={handlePages}>Prev</button>
      <p>{currentPage} of {maxPage}</p>
      <button id="next-btn" onClick={handlePages}>Next</button>
      <button id="last-btn" onClick={handlePages}>Last</button>
      </div>
    </div>
   );
}
export default CardContaner;