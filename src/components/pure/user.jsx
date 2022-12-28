import PropTypes from "prop-types";
import React from "react";
import {User} from "../../models/user"

export const UserComponent = ({ user }) => {

  return (
    <div>
      BIENVENIDO:
      <h3>NOMBRE: { user.firstName }</h3>
      <h3>LASTNAME: { user.lastName }</h3>
      <h6>CORREO: { user.email }</h6>
      <h6>CONNECCION: { user.connection ? "CONECTADO" : "DESCONECTADO" }</h6>
    </div>
  );
};
User.PropTypes ={
  User: PropTypes.instanceOf(User)
}