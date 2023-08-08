import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
  <div className={`contenedor ${styles.barra}`}>
    <div className={styles.logo}>
      <Link href={"/"}>
        <a>
          <Image
            src="/logo.webp"
            width={100}
            height={100}
            alt="logo de Andres Vargas"
          />
        </a>
      </Link>
    </div>
    <input type="checkbox" className={styles.nav_checkbox} id="menu-toggle" />
    <label htmlFor="menu-toggle" className={styles.nav_icon}>
      <Image src="/icon.svg" width={35} height={30} alt="#" />
    </label>
    <Link href="/carrito">
        <a  className={styles.nav_carrito}>
          <Image
            className={styles.carrito_icon}
            width={30}
            height={25}
            src="/img/carrito1.webp"
            alt="imagen carrito"
          />
        </a>
      </Link>
    <nav className={styles.navegacion}>
      <Link href="/">
        <a className={router.pathname === "/" ? styles.active : ""}>
          Inicio
        </a>
      </Link>
      <Link href="/showroom">
        <a className={router.pathname === "/showroom" ? styles.active : ""}>
          Showroom
        </a>
      </Link>
      {/* <Link href="/nosotros">
        <a className={router.pathname === "/nosotros" ? styles.active : ""}>
          Showroom
        </a>
      </Link> */}
    <Link href="/carrito">
        <a className={router.pathname === "/carrito" ? styles.active : ""}>
          <Image
            className={styles.carritoImage}
            width={30}
            height={25}
            src="/img/carrito1.webp"
            alt="imagen carrito"
          />
        </a>
      </Link>
    </nav>
  </div>
</header>

  );
}
