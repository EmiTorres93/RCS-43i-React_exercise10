import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaPeliculas from "./ListaPeliculas";

const Formulario = () => {
  let peliculasStorage = JSON.parse(localStorage.getItem("peliculas")) || [];

  const pelicula = {
    nombrePelicula: "",
    descripcion: "",
    genero: "",
  };

  const [listaPeliculas, setListaPeliculas] = useState(peliculasStorage);
  const [show, setShow] = useState(true);

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(listaPeliculas));
  }, [listaPeliculas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaPeliculas([...listaPeliculas, pelicula]);
    if (listaPeliculas.length !== []) {
      setShow(false);
    }
  };

  const handleChange = (e) => {
    pelicula[e.target.name] = e.target.value;
  };

  const borrarPelicula = (peliculaBorrar) => {
    let listaPeliculasFiltrada = listaPeliculas.filter(
      (itemPelicula) => itemPelicula !== peliculaBorrar
    );
    setListaPeliculas(listaPeliculasFiltrada);
    if (listaPeliculas.length == 1) {
      setShow(true);
    }
  };

  return (
    <>
      <Form
        className="p-0 border border-3 shadow p-3 mb-5 bg-body rounded"
        onSubmit={handleSubmit}
      >
        <Form.Label className="p-3 fs-3">
          Llenar el formulario para dar de alta una película.
        </Form.Label>

        <Form.Group
          className="p-3 border border-start-0 border-end-0 border-3"
          style={{ backgroundColor: "lightgray" }}
        >
          <Form.Group
            className="d-flex flex-column mb-3"
            controlId="formNombre"
          >
            <Form.Label className="me-2">Nombre de la película:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de la película"
              name="nombrePelicula"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="d-flex flex-column mb-3"
            controlId="formDescripcion"
          >
            <Form.Label className="me-4">
              Descripción de la película:
            </Form.Label>
            <Form.Control
              type="textarea"
              style={{ height: "150px" }}
              rows="15"
              placeholder="Escriba aquí una breve descripción de la película"
              name="descripcion"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="d-flex mb-3" controlId="formGenero">
            <Form.Label className="me-4">
              Elija el género de la película:
            </Form.Label>
            <select
              className="form-select"
              onChange={handleChange}
              name="genero"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled hidden>
                Elija una opción...
              </option>
              <option value="Comedia">Comedia</option>
              <option value="Drama">Drama</option>
              <option value="Infantil">Infantil</option>
            </select>
          </Form.Group>
        </Form.Group>

        <Form.Group className="d-flex justify-content-center p-3">
          <Button className="btn btn-primary" variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>

      {show ? (
        <div className="container" style={{ backgroundColor: "lightgrey" }}>
          <h3 className="m-3 p-4 text-center">No hay películas</h3>
        </div>
      ) : (
        <div className="d-flex flex-wrap">
          <ListaPeliculas
            propsPeliculas={listaPeliculas}
            propBorrarPelicula={borrarPelicula}
          ></ListaPeliculas>
        </div>
      )}
    </>
  );
};

export default Formulario;
