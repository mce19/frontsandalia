import Layout from "../components/layout"
import Curso from "../components/showrom";


export default function Tienda({curso}) {
  return (
    <Layout
      title={'Tienda virtual'}
      description="Descubre nuestras sandalias, elegantes, cómodas y llenas de estilo!"
    >
        <Curso curso={curso.attributes} />
    </Layout>
  )
}

export async function getStaticProps() {
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;
  const [resCurso] = await Promise.all([
    fetch(urlCurso),
  ]);
  
  const [{ data: curso }] =
    await Promise.all([resCurso.json()])
  return {
    props: {
      curso
    },
  };
}
