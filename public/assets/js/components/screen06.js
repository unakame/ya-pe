"use strict";

const ScreenSix = (update) =>{

   const section  = $('<section>');
   const img1     = $('<img>',{src:'img/icons/question.png',class:'col s2 offset-s10 img-icon6'});
   const divImg6  = $('<div>',{class:'row divImg6'});
   const img2     = $('<img>',{src:'img/icons/bcp-logo.png',class:'col s4 offset-s4 img2'});
   const divText6 = $('<div>',{class:'row divText6'});
   const h2       = $('<h2>',{text:'Registra tu tarjeta débito BCP',class:'col s12 col m4 offset-m4'});
   const p        = $('<p>',{text:'Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.',class:'col s12'});

   divImg6.append(img1);
   divImg6.append(img2);
   divText6.append(h2);
   divText6.append(p);
   section.append(divImg6);
   section.append(divText6);

  return section
}
