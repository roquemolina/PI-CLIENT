import React, {useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { getDetail } from '../../redux/action';
import {NavLink} from "react-router-dom";




function Details() {
  let { detailId } = useParams();
  const countryDetail = useSelector((state) => state.countryDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    axios(`/countries/${detailId}`)
    /* axios(`http://localhost:3001/countries/${detailId}`) */
    .then(({ data }) => {
      console.log(data);
       if (data.name) {
          dispatch(getDetail(data.id));
       } else {
          window.alert('No hay paise con ese ID');
       }
    });
 }, [detailId]);

  return ( 

    <div className='detail-page'>
      {countryDetail.name
        ? <h2>{countryDetail.name}</h2>
        : <h2>Loading...</h2>
      }
      {countryDetail.image
        ? <img src={countryDetail.image} alt={countryDetail.name} />
        : <h2>Loading...</h2>
      }
      {countryDetail.capital
        ? <h2>{countryDetail.capital}</h2>
        : <h2>Loading...</h2>
      }
      {countryDetail.capital
        ? <h2>{countryDetail.capital}</h2>
        : <h2>Loading...</h2>
      }
      {countryDetail.subregion
        ? <h2>{countryDetail.subregion}</h2>
        : <h2>Loading...</h2>
      }
      {countryDetail.area
        ? <h2>{countryDetail.area}</h2>
        : <h2>Loading...</h2>
      }
      {countryDetail.population
        ? <h2>{countryDetail.population}</h2>
        : <h2>Loading...</h2>
      }
      <NavLink
      to="/home"
      className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
      }
    >
      <h2>Back</h2>
    </NavLink>

    </div>
   );
}

export default Details;