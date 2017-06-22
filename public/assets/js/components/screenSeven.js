"use strict"

const ScreenSeven = (update) =>{

   const section         = $('<section>');
   const divQuestion     = $('<div>',{class:'row'});
   const pM              = $('<p>',{text:'< Volver',class:'col s4 pm-text'});
   const imgQu           = $('<img>',{src:'img/icons/question.png',class:' col s2 offset-s6'})
   const divImg7         = $('<div>',{class:'row div-img-7'});
   const img             = $('<img>',{src:'img/icons/bcp-logo.png',class:'col s4 offset-s4'});
   const h2              = $('<h2>',{text:'Ingresa la clave de tu tarjeta',class:'col s12'});
   const p               = $('<p>',{text:'Tarjeta ',class:'col s3 offset-s2'});
   //const pRes            = $('<p>'); p de respuesta de tarjeta
   const row             = $('<div>',{class:'row'});
   const form            = $('<form>',{class:'col s12'});
   const divRow          = $('<div>',{class:'row'});
   const divForm         = $('<div>',{class:'input-field'});
   const i               = $('<i>',{class:'material-icons prefix'});
   const input           = $('<input>',{class:'validate',type:'password',id:"input7",class:'col s10 offset-s1'});
   const button          = $('<button>',{class:'btn disabled col s4 offset-s4',text:'REGISTRAR'});


   divQuestion.append(pM);
   divQuestion.append(imgQu);
   divImg7.append(img);
   divImg7.append(h2);
   divImg7.append(p);
   row.append(form);
   form.append(divRow);
   divRow.append(divForm);
   divForm.append(i);
   divForm.append(input);
   divForm.append(button);
   section.append(divQuestion);
   section.append(divImg7);
   section.append(row);


   return section;


}
