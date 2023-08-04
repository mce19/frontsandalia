import Image from 'next/image'
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"


export default function Nosotros() {
  return (
    <Layout
      title={'Sobre mí'}
      description="Sobre mi, Andres Vargas, Blog de crecimiento"
    >
   <main className="contenedor">
            <h1 className="heading">Showroom</h1>

            <div className={styles.contenido}>
                {/* <Image src="/img/andres.webp" width={500} height={800} alt="Foto personal sobre mi" /> */}

                <div>
                  <p>In suscipit tincidunt justo, quis faucibus neque pulvinar in. Maecenas lacus libero, imperdiet id urna nec, fringilla euismod sem. In aliquet molestie sapien, aliquam interdum ipsum mollis et. Suspendisse interdum dictum pretium. Vivamus vel hendrerit est. Maecenas non accumsan enim. Aliquam faucibus nisl non erat mattis facilisis. Integer suscipit lobortis lectus id sollicitudin. </p>

                  <p>Suspendisse sollicitudin faucibus maximus. Ut risus lorem, commodo et tortor vehicula, semper consequat nisi. Donec pretium sit amet purus eget vehicula. Nulla non malesuada eros. Duis vehicula volutpat nunc, nec consequat dui viverra sollicitudin. Sed vel augue cursus, hendrerit nisi ut, commodo nibh. Vestibulum ante ipsum primis in.</p>
                </div>
            </div>
        </main>
    </Layout>
  )
}
