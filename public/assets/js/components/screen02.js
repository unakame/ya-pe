"use strict";

const ScreenTwo = (update) => {

   const section = $('<section>');
   const divImg  = $('<div>',{class: 'row'});
   const img     = $('<img>',{src:'img/icons/phone.png', class:'img-phone col s6 offset-s3'});
   const divText = $('<div>',{class: 'row divText2'});
   const h2_1    = $('<h2>',{text:'Para comenzar validemos tu', class:'col s12'});
   const h2_2    = $('<h2>',{text:'número',class:'col s4 offset-s4 h2-2'});
   const p       = $('<p>',{text: 'Recibirás un SMS con un código de validación',class: 'col s12'});
   const divForm = $('<div>',{class:'row'})
   const form    = $('<form>',{action:'#',class: 'col s12'});
   const divRowForm = $('<div>', {class: 'row'});
   const divInputForm = $('<div>', {class: 'input-field col s10 offset-s1'});
   const icon    = $('<i>',{class: 'material-icons prefix'});
   const input   = $('<input>',{type: 'tel',class: 'validate',id: 'icon_prefix'});
   const pCh     = $('<p>');
   const inputCh = $('<input>',{type:'checkbox',id:'test6',class:'filled-in'});
   const label   = $('<label>',{for: 'test6',text: 'Acepto los'});
   const a       = $('<a>',{text:' Términos y condiciones', href:'#'})
   const button  = $('<button>', {text:'CONTINUAR',class: 'btn disabled col s6 offset-s3'});

   divImg.append(img);
   section.append(divImg);
   divText.append(h2_1);
   divText.append(h2_2);
   divText.append(p);
   section.append(divText);
   section.append(divForm);
   divForm.append(form);
   form.append(divRowForm);
   divRowForm.append(divInputForm);
   divInputForm.append(icon);
   divInputForm.append(input);
   pCh.append(inputCh);
   label.append(a);
   pCh.append(label);
   divInputForm.append(pCh);
   divInputForm.append(button);

   return section

}
