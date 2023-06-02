import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import {Details, Error404, Form, Home, Landing} from './views/index';
import NavBar from './components/NavBar/NavBar';

function App() {
  let location = useLocation();
  return (
    <div className="App">
      
      {location.pathname !== '/' && <NavBar />}
      
      <Switch>
        <Route exact path="/" render={() => <Landing />}/>
        <Route exact path="/home" render={() => <Home />}/>
        <Route exact path="/form" render={() => <Form />}/>
        <Route exact path="/detail/:detailId" render={() => <Details />}/> {/* AGREGAR EL DETAILLLL ID COMO PARAM */}
        {/* acá arriba ^^^^va el :id xq el id lo pasa el elemento Detail x medio del useParam */}
        <Route path="*" render={() => <Error404/>}/>
        {/* el * acá ^^^^ arriba es como decir cualquiera en RegExp */}

      </Switch>
    </div>
  );
}

export default App;
