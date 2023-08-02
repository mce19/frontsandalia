import { useState, useEffect} from 'react'
import '../styles/globals.css'
import { toast } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito'))  ?? [] : []
  const [carrito, setCarrito] = useState(carritoLS)
  const [paginaLista, setPaginaLista] = useState(false) //para lo  de hidratación

  useEffect(() => {
    setPaginaLista(true)
  }, [])

  useEffect(()=>{
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = sandalia => {
    // Comprobar si la sandalia ya esta en el carrito...
    if(carrito.some( sandaliaState =>  sandaliaState.id === sandalia.id )) {
        // Iterar para actualizar la cantidad
        const carritoActualizado = carrito.map( sandaliaState => {
            if( sandaliaState.id === sandalia.id ) {
                sandaliaState.cantidad = sandalia.cantidad;
            } 
            return sandaliaState;
        });
        // Se asigna al array
        setCarrito([...carritoActualizado]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    } else {
        // En caso de que el articulo no exista, es nuevo y se agrega
        setCarrito([...carrito, sandalia]);
        toast.success('Agregado al carrito 🥰')
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    }
}

const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    toast.success('Eliminado del carrito 😭')
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}

const actualizarCantidad = sandalia => {
  const carritoActualizado = carrito.map( sandaliaState => {
    if(sandaliaState.id === sandalia.id ) {
      sandaliaState.cantidad = parseInt( sandalia.cantidad )
    } 
    return sandaliaState
  })
  setCarrito(carritoActualizado)
  toast.success('Carrito actualizado 😄')
  window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}

  return paginaLista ? <Component {...pageProps}
  carrito={carrito}
  agregarCarrito={agregarCarrito}
  eliminarProducto={eliminarProducto}
  actualizarCantidad={actualizarCantidad}
   /> : null
  
}

export default MyApp
