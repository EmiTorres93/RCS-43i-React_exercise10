import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import ListaPeliculas from "./components/ListaPeliculas";

function App() {
  return (
    <>
      <Container className="mainPage m-5">
        <h1 className="text-center">Alta de películas</h1>
        <Formulario></Formulario>
      </Container>
    </>
  );
}

export default App;
