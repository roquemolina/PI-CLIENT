let numRegExp = /\d/g,
charRegExp = /[°!"#$%&/()=?¡¿'|¬´+}{_[*^¨~`:;]/g;

export default function validation (obj) {
  let errors = {};
  if(!obj.name){
    errors.name = 'Se requiere un nombre';
  }
  if(obj.name && numRegExp.test(obj.name)) {
    errors.name = 'El nombre no puede tener nros';
  }
  if(obj.name && charRegExp.test(obj.name)) {
    errors.name = 'El nombre no puede contener símbolos';
  }
  if(obj.name.length > 12) {
    errors.name = 'Mas de 36 characters'
  }
  if(obj.difficulty === null) {
    errors.difficulty = 'Se requiere una dificultad'
  }
  if(obj.length === null) {
    errors.length = 'Se requiere una duration'
  }
  if(obj.season === "") {
    errors.season = 'Se requiere una season'
  }
  
  return errors;
};