import { Card, Button } from "react-bootstrap";

const ItemPelicula = ({ propsPeliculas, propBorrarPelicula }) => {
  return (
    <>
      <Card className="m-3" style={{ width: "18rem" }}>
        <div className="d-flex">
          <div className="p-3">
            <Card.Title className="fs-5 text-centered">
              {propsPeliculas["nombrePelicula"]}
            </Card.Title>
          </div>
        </div>
        <Card.Body style={{ backgroundColor: "lightblue" }}>
          <Card.Title>Descripción</Card.Title>
          <Card.Text className="px-2">
            {propsPeliculas["descripcion"]}
          </Card.Text>
          <Card.Title className="px-2">Género:</Card.Title>
          <Card.Text className="px-2">{propsPeliculas["genero"]}</Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => propBorrarPelicula(propsPeliculas)}
            variant="primary"
            className="m-3 btn btn-danger"
          >
            Eliminar
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ItemPelicula;
