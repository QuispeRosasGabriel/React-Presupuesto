import React, { useState } from "react";

const Formulario = () => {
  return (
    <form action="">
      <h2>Agregar tus gastos aquí</h2>
      <div className="campo">
        <label htmlFor="">Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
        />
        <label htmlFor="">Cantidad del gasto</label>
        <input type="number" className="u-full-width" placeholder="Ej. 300" />
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
