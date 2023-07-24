import ItemPelicula from "./ItemPelicula";

const ListaPeliculas = ({ propsPeliculas, propBorrarPelicula }) => {
  return (
    <>
      {propsPeliculas.map((pelicula, index) => (
        <ItemPelicula
          key={index}
          propsPeliculas={pelicula}
          propBorrarPelicula={propBorrarPelicula}
        ></ItemPelicula>
      ))}
    </>
  );
};

export default ListaPeliculas;
