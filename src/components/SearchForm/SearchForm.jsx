import React, {useState} from 'react';
import searchValidation from '../../helpers/searchValidation';

let initialForm = {
    name: ""
  };
  
const SearchForm = (props) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);
  const [queryOption, setQueryOption] = useState('country');
    
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
      searchValidation(
        {
          ...form,
          [property]: value
        }
      )
    )
    }
      
  function handleSubmit (e) {
    e.preventDefault();
    if(Object.keys(errors).length === 0){
      props.putQuery(form.name, queryOption);
      setForm(initialForm)
      setErrors(initialForm)
      } else {
        window.alert('Debe llenar todos los campos');
      }
    }
    
  return ( 
    <div className="form-search">
    <form onSubmit={handleSubmit}>
      <select 
      value={queryOption}
      name="query-opt"
      onChange={e => setQueryOption(e.target.value)}
      >
        <option value="country">Country</option>
        <option value="activity">Activity</option>
      </select>
    <input 
      type="text"
      name='name'
      id='name'
      value={form.name}
      onChange={handleChange}
      placeholder='search'
    />
    {errors.name && <p>{errors.name}</p>}
    <button type='submit'>Submit</button>
    </form>
  </div>
   );
}
 
export default SearchForm;