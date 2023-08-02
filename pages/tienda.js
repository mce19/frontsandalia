import Sandalia from "../components/sandalia"
import Layout from "../components/layout"
import styles from  "../styles/grid.module.css"


export default function Tienda({sandalias}) {
  
  return (
    <Layout
      title={'Tienda virtual'}
      description="Descubre nuestras sandalias, elegantes, cómodas y llenas de estilo!"
    >

          <main className="contenedor">
            <h1 className="heading">Mi Colección</h1>

           <div className={styles.grid}>
               {sandalias?.map(sandalia => (
                <Sandalia 
                key={sandalia.id}
                sandalia = {sandalia.attributes}
                />
               ))}
           </div>
        </main>
    </Layout>
  )
}


export async function getServerSideProps() {
  const respuesta =  await fetch(`${process.env.API_URL}/sandaliases?populate=imagen`);
    const {data: sandalias} = await respuesta.json() 
    return {
      props: {
        sandalias
      }
    }
}