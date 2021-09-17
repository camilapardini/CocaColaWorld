import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import "./App.css"

function App() {
  return (
    <BrowserRouter>

      <div className= "App">
        <NavBar /> 
          <Switch> 

              <Route  exact path= '/' >
                <ItemListContainer greeting = "Acá va item list container" /> 
              </Route>

              <Route  path= '/categoria/:idCategoria' component= {ItemListContainer} />

              <Route exact path= '/detalle/:id'>
                <ItemDetailContainer />
              </Route>

        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
