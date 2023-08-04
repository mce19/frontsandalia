import Layout from "../components/layout";
import Sandalia from "../components/sandalia";
import Curso from "../components/curso";
import styles from "../styles/grid.module.css";

export default function Home({ sandalias, curso }) {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Sandalias de calidad con una selección elegante y duradera para los clientes más exigentes"}
      >
        <main className="contenedor">
          <h1 className="heading">Sandalias</h1>
          <div className={styles.grid}>
            {sandalias?.map((sandalia) => (
              <Sandalia key={sandalia.id} sandalia={sandalia.attributes} />
            ))}
          </div>
        </main>

        <Curso curso={curso.attributes} />

        {/* <section className="contenedor">
          <h2 className="heading">Sandalias</h2>

          <div className={styles.grid}>
            {sandalias?.map((sandalia) => (
              <Sandalia key={sandalia.id} sandalia={sandalia.attributes} />
            ))}
          </div>
        </section> */}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlSandalias = `${process.env.API_URL}/sandaliases?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/oferta?populate=imagen`;

  const [resSandalias, resCurso] = await Promise.all([
    fetch(urlSandalias),
    fetch(urlCurso),
  ]);
  
  const [{ data: sandalias }, { data: curso }] =
    await Promise.all([resSandalias.json(), resCurso.json()]);

  return {
    props: {
      sandalias,
      curso,
    },
  };
}
