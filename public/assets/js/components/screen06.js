"use strict";

const ScreenSix = (update) =>{

   const section = $('<section>');
   const divImg  = $('<div>',{class:'row'});
   const img     = $('<img>',{src:'img/icons/bcp-logo.png',class:'col s4 offset-s4'});
   const divText6 = $('<div>',{class:'row'});
   const h2      = $('<h2>',{text:'Registra tu tarjeta débito BCP'});
   const p       = $('<p>',{text:'Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.'})

   divImg.append(img);
   divText6.append(h2);
   divText6.append(p);
   section.append(divImg);
   section.append(divText6);

  return section
}
