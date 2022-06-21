
import React from "react";
import '../hojas-de-estilo/Testimonio.css';

export function Testimonio({imagen,nombre,pais,cargo,empresa,testimonio}) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${imagen}.png`)}
        alt='Foto de Emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{nombre}</strong> in {pais}
        </p>
        <p className='cargo-testimonio'>
          {cargo} at <strong>{empresa}</strong>
        </p>
        <p className='texto-testimonio'>
          "{testimonio}"
        </p>
      </div>
    </div>
  );
}

export default Testimonio;