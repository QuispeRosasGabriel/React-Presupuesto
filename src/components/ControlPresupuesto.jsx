import React, { Fragment } from "react";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: S/{presupuesto}</div>
      <div className="alert ">Restante: S/{restante}</div>
    </Fragment>
  );
};

export default ControlPresupuesto;
