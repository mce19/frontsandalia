import Image from "next/image";
import Link from "next/link";
import styles from "../styles/chemas.module.css";

export default function Sandalia({ sandalia }) {
  const { descripcion, imagen, nombre, precio, url } = sandalia;

  return (
    <div  className={styles.contenido}>
      <Link href={`/sandalias/${url}`}>
        <div className={styles.chemas}>
          <Image
            src={imagen.data.attributes.formats.medium.url}
            width={400}
            height={500}
            alt={`Imagen sandalia ${nombre}`}
            className={styles.img}
          />
          <div>
            <h3 className={styles.palabra}>{nombre}</h3>
            {/* <p className={styles.descripcion}>{descripcion}</p> */}
            <p className={styles.precio}>₡{precio}</p>
            {/* <Link href={`/sandalias/${url}`}>
          <a className={styles.enlace}>
            Ver Producto</a>
        </Link> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
