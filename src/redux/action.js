import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL";
export const SEARCH_ACTIVITIES = "SEARCH_ACTIVITIES";
export const BY_CONTINENT = 'BY_CONTINENT';
export const BY_NAME = 'BY_NAME';
export const ORDER = 'ORDER';

/* using thunk middleware to use  async axios method. Then, ----DISPATCH to the reducer--- to change redux global state */
/* dispatch  */
export const getCountries = () => {
  const endpoint = '/countries';
  /* const endpoint = 'http://localhost:3001/countries'; */
  return async (dispatch) => {
     let {data} = await axios.get(endpoint);
        return dispatch({
           type: GET_COUNTRIES,
           payload: data,
        });
    };
};
export const getActivities = () => {
  const endpoint = '/activities';
  /* const endpoint = 'http://localhost:3001/activities'; */
  return async (dispatch) => {
     let {data} = await axios.get(endpoint);
        return dispatch({
           type: GET_ACTIVITIES,
           payload: data,
        });
    };
};
export const getDetail = (id) => {
  const endpoint = `/countries/${id}`;
  /* const endpoint = `http://localhost:3001/countries/${id}`; */
  return async (dispatch) => {
     let {data} = await axios.get(endpoint);
        return dispatch({
           type: GET_DETAIL,
           payload: data,
        });
    };
};
export const searchCountries = (countryName) => {
  return {
    type: SEARCH_COUNTRIES,
    payload: countryName,
  }
};

export const searchActivities = (activityName) => {
  return {
    type: SEARCH_ACTIVITIES,
    payload: activityName,
    };
};

export function getByContinent(continent) {
  return {
    type: BY_CONTINENT,
    payload: continent,
  }
};
export function getByPopulation(order) {
  return {
    type: ORDER,
    payload: order,
  }
};
export function getByName(flow) {
  return {
    type: BY_NAME,
    payload: flow,
  }
};

export const createAct = (activity) => {
  const endpoint = '/activities';
  /* const endpoint = 'http://localhost:3001/activities'; */
  return async (dispatch) => {
    await axios.post(endpoint, activity);
  }
}