import React, {useState} from 'react';
import validation from '../../helpers/validation';
import {useDispatch, useSelector} from "react-redux"
import { createAct } from '../../redux/action';

let initialForm = {
    name: "",
    difficulty: null,
    length: null,
    season: ""
  };
  
  
  const Form = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(initialForm);
    const [selectedCountries, setSelectedCountries] = useState([]);
    
    function handleChange (e) {
      let property = e.target.name,
      value = e.target.value;
      setForm(
        {
          ...form,
          [property]: value
        }
      )
      setErrors(
        validation(
          {...form, [property]: value}
          )
        )
    }


      
    function handleSubmit (e) {
      e.preventDefault();
      if(selectedCountries.length === 0) window.alert("llenar bien")
      if(Object.keys(errors).length === 0){
        window.alert('Form enviado');
        setForm(initialForm)
        setErrors(initialForm)
        setSelectedCountries([]);
        dispatch(createAct(form));
      }
    }
    
  return ( 
    <div className='form-view'>
    <h2>Add your activity</h2>
    <form onSubmit={handleSubmit} className='form-validation'>
    <label htmlFor="name">Name:</label>
    <input 
      type="text"
      name='name'
      value={form.name}
      onChange={handleChange}
    />
    {errors.name && <p>{errors.name}</p>}
    <p>
        Difficulty:
        <label>
          <input type="radio" name="difficulty" value="1" onChange={handleChange} />
          Very-Easy
        </label>
        <label>
          <input type="radio" name="difficulty" value="2" onChange={handleChange}/>
          Easy
        </label>
        <label>
          <input type="radio" name="difficulty" value="3" onChange={handleChange}/>
          Medium
        </label>
        <label>
          <input type="radio" name="difficulty" value="4" onChange={handleChange}/>
          Hard
        </label>
        <label>
          <input type="radio" name="difficulty" value="5" onChange={handleChange}/>
          Nightmare
        </label>
      </p>
      {errors.difficulty && <p>{errors.difficulty}</p>}
      <p>
        Length:
        <label>
          <input type="radio" name="length" value="1" onChange={handleChange}/>
          1 hr.
        </label>
        <label>
          <input type="radio" name="length" value="2" onChange={handleChange}/>
          2 hr.
        </label>
        <label>
          <input type="radio" name="length" value="3" onChange={handleChange}/>
          3 hr.
        </label>
        <label>
          <input type="radio" name="length" value="4" onChange={handleChange}/>
          4 hr.
        </label>
        <label>
          <input type="radio" name="length" value="5" onChange={handleChange}/>
          5 hs.
        </label>
      </p>
      {errors.length && <p>{errors.length}</p>}
      <p>
        Season:
        <label>
          <input type="radio" name="season" value="winter" onChange={handleChange}/>
          Winter
        </label>
        <label>
          <input type="radio" name="season" value="summer" onChange={handleChange}/>
          Summer
        </label>
        <label>
          <input type="radio" name="season" value="Spring" onChange={handleChange}/>
          Spring
        </label>
        <label>
          <input type="radio" name="season" value="fall" onChange={handleChange}/>
          Fall
        </label>
      </p>
      {errors.season && <p>{errors.season}</p>}

      <label>Country: </label>
        <select
          multiple={true}
          value={selectedCountries}
          name="countries"
          onChange={e => {
            const options = [...e.target.selectedOptions];
            const values = options.map(option => option.value);
            setSelectedCountries(values);
            setForm(
              {
                ...form,
                countries: values
              }
            )
          }}
        >
        <option value="" hidden>Select country</option>
        {countries.map(e => (
        <option value={e.id} name="countries" key={e.id} >{e.name}</option>
        ))}
        </select>
        {selectedCountries.length === 0 && <p>A country must be selected</p>}
        
    <button type='submit'>Submit</button>
  </form>


    </div>
   );
}
 
export default Form;