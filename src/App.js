
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"

function App() {
  return (
    <>
      <NavBar /> 
      <ItemListContainer greeting = "Acá va item list container" /> 
      <ItemDetailContainer />
      
    </>

  );
}

export default App;
