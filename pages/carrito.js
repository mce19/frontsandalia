import { useEffect, useState } from "react";
import Layout from "../components/layout";
import styles from "../styles/carrito.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Carrito({
  carrito,
  actualizarCantidad,
  eliminarProducto,
}) {
  const [total, setTotal] = useState(0);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [comentarioUsuario, setComentarioUsuario] = useState("");
  const [formaEntrega, setFormaEntrega] = useState("");
  const [telefonoUsuario, setTelefonoUsuario] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [botonWhatsappHabilitado, setBotonWhatsappHabilitado] = useState(false);

  useEffect(() => {
    const calcularTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calcularTotal);
  }, [carrito]);

  const generarMensaje = () => {
    const mensajesProductos = carrito.map(
      (producto) =>
        `Necesito: *${producto.cantidad}*\n\n ` +
        `Imagen: *${producto.imagen}*\n\n`
    );
    const mensaje =
    `*¡Hola! esta es la informacion de mi pedido:*\n\n` +
    mensajesProductos.join("\n") +
    `Cliente: *${nombreUsuario}*\n\n` +
    `Teléfono: *${telefonoUsuario}*\n\n` +
    `Total a pagar: *₡${total}*\n\n` +
    `Método de pago: *${metodoPago}*\n\n` +
    `Forma de entrega: *${formaEntrega}*\n\n` +
    `¿Podemos conversar al respecto?`;
  return mensaje;
};


  return (
    <Layout title="Carrito de compras">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {carrito.length === 0
              ? "Carrito Vacio"
              : carrito.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        width={250}
                        height={300}
                        src={producto.imagen}
                        alt={producto.nombre}
                        className={styles.img}
                      />
                    </div>
                    <div className={styles.cantidad}>
                      <p className={styles.nombre}>{producto.nombre}</p>
                      <div>
                        <p>Cantidad:</p>
                        <select
                          className={styles.select}
                          onChange={(e) =>
                            actualizarCantidad({
                              id: producto.id,
                              cantidad: e.target.value,
                            })
                          }
                          value={producto.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <p className={styles.precio}>₡{producto.precio}</p>
                      <p className={styles.subtotal}>
                        Subtotal: ₡{producto.cantidad * producto.precio}
                      </p>
                    </div>
                    <button
                      className={styles.eliminar}
                      type="button"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <form>
              <div>
                <label htmlFor="nombre" className={styles.formul}>
                  Nombre
                </label>
                <input
                  className={styles.imput}
                  id="nombre"
                  type="text"
                  value={nombreUsuario} // Vincula el valor del input al estado nombreUsuario
                  onChange={(e) => {
                    setNombreUsuario(e.target.value);
                    setBotonWhatsappHabilitado(e.target.value !== ""); // Habilita el botón si el input no está vacío
                  }} // Actualiza el estado cuando el usuario escriba en el input
                />
              </div>
              <div>
                <label htmlFor="telefono" className={styles.formul}>
                  Teléfono
                </label>
                <input
                  className={styles.imput}
                  id="telefono"
                  type="text"
                  value={telefonoUsuario} // Vincula el valor del input al estado nombreUsuario
                  onChange={(e) => {
                    setTelefonoUsuario(e.target.value);
                    setBotonWhatsappHabilitado(e.target.value !== ""); // Habilita el botón si el input no está vacío
                  }} // Actualiza el estado cuando el usuario escriba en el input
                />
              </div>
              <div>
                <label htmlFor="met-pago" className={styles.formul}>
                  Método de pago
                </label>
                <select
                  className={styles.imput}
                  id="met-pago"
                  value={metodoPago}
                  onChange={(e) => {
                    setMetodoPago(e.target.value);
                    setBotonWhatsappHabilitado(e.target.value !== "");
                  }}
                >
                  <option value="">Opciones</option>
                  <option value="Pago simpe">Pago con simpe</option>
                  <option value="Pago contra entrega">Pago contra entrega</option>
                  <option value="Tarjeta de crédito">Tarjeta de crédito</option>
                  <option value="Transferencia bancaria">Transferencia bancaria</option>
                </select>
              </div>

              <div>
                <label htmlFor="form-entrega" className={styles.formul}>
                  Forma de entrega
                </label>
                <select
                  className={styles.imput}
                  id="form-entrega"
                  value={formaEntrega}
                  onChange={(e) => {
                    setFormaEntrega(e.target.value);
                    setBotonWhatsappHabilitado(e.target.value !== "");
                  }}
                >
                  <option value="">Opciones</option>
                  <option value="Envío por correo">Envío por correos</option>
                  <option value="Paso a retirar">Paso a retirar</option>
                  <option value="Envío privado">Envío privado</option>
                </select>
              </div>
              <div>
                <label htmlFor="comentario" className={styles.formul}>
                  Comentarios
                </label>
                <input
                  className={styles.imput}
                  id="comentario"
                  type="text"
                  value={comentarioUsuario} // Vincula el valor del input al estado nombreUsuario
                  onChange={(e) => {
                    setComentarioUsuario(e.target.value);
                    setBotonWhatsappHabilitado(e.target.value !== ""); // Habilita el botón si el input no está vacío
                  }} // Actualiza el estado cuando el usuario escriba en el input
                />
              </div>
            </form>

            <p className={styles.formul}>Total a pagar: ₡{total}</p>
            <Link
              href={`https://wa.me/50672495763?text=${encodeURIComponent(
                generarMensaje()
              )}`}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                disabled={!botonWhatsappHabilitado} // Vincula el atributo "disabled" al estado
                style={{
                  pointerEvents: botonWhatsappHabilitado ? "auto" : "none",
                }} // Deshabilita el clic en el enlace cuando esté deshabilitado
              >
                <Image
                  className={styles.flotar}
                  src="/img/whattsapp.webp"
                  width={80}
                  height={70}
                  alt="whatsapp de Cerezo rojo"
                />
              </a>
            </Link>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
