import styles from "../styles/show.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Curso({ curso }) {
  const { contenido, imagen, titulo } = curso;
  const generarMensaje = () => {
    const mensaje = `Hola Andres, te hablo desde el sitio web y me interesa un producto!  ¿Podemos hablar sobre ello?`;
    return mensaje;
  };

  return (
    <section className={`${styles.curso} curso`}>
      <style jsx>{`
        .curso {
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.45),
              rgb(0 0 0 / 0.4)
            ),
            url(${imagen?.data?.attributes?.url});
        }
      `}</style>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p>{contenido}</p>
        </div>
        <div className={styles.flotarContainer}>
  <Link href={`https://wa.me/50661612818?text=${generarMensaje()}`}>
    <a target="_blank" rel="noopener noreferrer">
        <Image
          src="/img/whattsapp.webp"
          width={70}
          height={70}
          alt="whatsapp de cerezo rojo"
        />
    </a>
  </Link>
</div>
      </div>
    </section>
  );
}
