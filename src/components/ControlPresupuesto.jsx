import React, { Fragment } from "react";
import { revisarPresupuesto } from "../helpers/helper";
const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: S/{presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: S/{restante}
      </div>
    </Fragment>
  );
};

export default ControlPresupuesto;
