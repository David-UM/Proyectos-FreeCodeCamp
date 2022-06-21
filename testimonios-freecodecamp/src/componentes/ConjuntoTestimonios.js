import React from 'react';

import Testimonio from './Testimonio';

export default function ConjuntoTestimonios ({perfiles}){

  return (
    <>
      {perfiles.map((persona) => (
        <Testimonio
         key={persona.id}
         imagen={persona.imagen}
         nombre={persona.nombre}
         pais={persona.pais}
         cargo={persona.cargo}
         empresa={persona.empresa}
         testimonio={persona.testimonio}        
        />
      ))}
    </>
  )
  
};
