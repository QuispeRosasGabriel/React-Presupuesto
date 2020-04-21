import React, { useState } from "react";
import Modal from "./Modal";
import shortid from "shortid";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    //construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    //pasar el gasto principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    //resetear el form
    guardarNombre("");
    guardarCantidad(0);
  };

  return (
    <form action="" onSubmit={agregarGasto}>
      <h2>Agregar tus gastos aquí</h2>
      {error && <Modal mensaje="Complete todos los campos del gasto" />}
      <div className="campo">
        <label htmlFor="">Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
        <label htmlFor="">Cantidad del gasto</label>
        <input
          type="number"
          className="u-full-width"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value))}
          placeholder="Ej. 300"
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
      </div>
    </form>
  );
};
export default Formulario;
