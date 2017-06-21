"use strict";

const ScreenTwo = (update) => {

   const section = $('<section>');
   const divImg  = $('<div>',{class: 'row'});
   const img     = $('<img>',{src:'img/icons/phone.png', class:'img-phone col s6 offset-s3'});
   const divText = $('<div>',{class: 'row divText2'});
   const h2_1    = $('<h2>',{text:'Para comenzar validemos tu', class:'col s12'});
   const h2_2    = $('<h2>',{text:'número',class:'col s4 offset-s4 h2-2'});
   const p       = $('<p>',{text: 'Recibirás un SMS con un código de validación',class: 'col s12'});
   const form    = $('<form>',{action:'#'});
   const input   = $('<input>',{type: 'number'});

   divImg.append(img);
   section.append(divImg);
   divText.append(h2_1);
   divText.append(h2_2);
   divText.append(p);
   section.append(divText);
   form.append(input);

   return section

}
