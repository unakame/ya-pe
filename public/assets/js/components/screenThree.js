"use strict";

const ScreenThree = (update) =>{

   const section  = $('<section>');
   const divImg3  = $('<div>',{class: 'row divImg3'});
   const img      = $('<img>',{src:'img/icons/message.png',class:'col s4 offset-s4'});
   const divText  = $('<div>',{class:'row divText3'});
   const h2       = $('<h2>',{text:'Ahora ingresa tu código',class:'col s9 offset-s2'});
   const p1       = $('<p>',{text: 'Enviamos un SMS con el código de validación',class:'col s11 offset-s1'});
   const p2       = $('<p>', {text:'al número ',class:'col s4 offset-s3'});
   //const p3      = $() donde debe ir el input celular
   const row      = $('<div>');
   const form     = $('<form>',{class:'col s12 col m12'});
   const rowForm  = $('<div>',{class:'row'});
   const divInput = $('<div>',{class:'input-field col s12 col m12 divInput3'});
   const i        = $('<i>',{class:'material-icons prefix'});
   const input    = $('<input>',{id:'number-cel',type:'number', class:'validate col s8 col m8 offset-s2',placeholder:'- - - - - -'});
   const p4       = $('<p>',{text: 'Reintentar en '});
   //const p5       = $('<input>',{id:'contador'});
  // const but      = $('<button>',{onclick: 'timedText()'});
  // const  inp        = $('<input>',{id:'txt',type:'text'});


   divImg3.append(img);
   divText.append(h2);
   divText.append(p1);
   divText.append(p2);
   //append p3
   row.append(form);
   form.append(rowForm);
   rowForm.append(divInput);
   divInput.append(i);
   divInput.append(input);
   divInput.append(p4);
  //divInput.append(but);
   //divInput.append(inp);
   
   //divInput.append(p5);

   section.append(divImg3);
   section.append(divText);
   section.append(row);

   return section

}
