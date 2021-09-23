import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import "./App.css"
import Cart from "./components/Cart/Cart";
import Footer from './components/Footer/Footer'

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

              <Route exact path= '/cart'>
                <Cart />
              </Route>

        </Switch>

        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
