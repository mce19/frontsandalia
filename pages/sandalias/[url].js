import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/chema.module.css";
import Layout from "../../components/layout";
import Link from "next/link";
export default function Producto({ sandalia, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0);
  const { nombre, descripcion, imagen, precio } = sandalia[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Cantidad no valida");
      return;
    }

    //creamos un objeto para almacenar en el localStorage
    const sandaliaSeleccionada = {
      id: sandalia[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    //pasando la información
    agregarCarrito(sandaliaSeleccionada);
  };

  return (
    <Layout title={`Sandalia ${nombre}`}>
      <div className="contenedor">
        <div className={styles.contenido}>
          <Image
            src={imagen.data.attributes.url}
            width={600}
            height={800}
            alt={`Imagen sandalia ${nombre}`}
            className={styles.zoomable}
          />
          <div>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>₡{precio}</p>

            <form className={styles.formulario} onSubmit={handleSubmit}>
              <label htmlFor="cantidad">Cantidad:</label>

              <select
                onChange={(e) => setCantidad(Number(e.target.value))}
                id="cantidad"
              >
                <option value="0">Seleccione la cantidad</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <input type="submit" value="Agregar al carrito" />
              <Link href='/'>
            <a className={styles.volver}>
                Volver a tienda
            </a>
        </Link>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/sandaliases`);
  const { data } = await respuesta.json();

  const paths = data.map((sandalia) => ({
    params: {
      url: sandalia.attributes.url
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(`${process.env.API_URL}/sandaliases?
filters[url]=${url}&populate=imagen`);
  const { data: sandalia } = await respuesta.json();
  return {
    props: {
      sandalia,
    },
  };
}
