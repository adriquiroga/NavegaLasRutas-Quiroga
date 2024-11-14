import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <NavBar/>
      <Routes>
        <Route 
          path="/" 
          element={<ItemListContainer text="Bienvenido a Nature House" 
            mensaje="Explora nuestro catálogo de productos." />} 
        />
        <Route 
          path="category/:id" 
          element={<ItemListContainer text="Productos por Categoría" 
            mensaje="Encuentra lo que buscas por categoría." />} 
        />
        <Route 
          path="/item/:id" 
          element = {<ItemDetailContainer text="Productos por Categoría" 
            mensaje="Encuentra lo que buscas por categoría." />}         
        />
      </Routes>
    </BrowserRouter>     
  );
}
export default App;
