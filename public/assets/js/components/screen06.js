"use strict";

const ScreenSix = (update) =>{

   const section     = $('<section>');
   const img1        = $('<img>',{src:'img/icons/question.png',class:'col s2 offset-s10 img-icon6'});
   const divImg6     = $('<div>',{class:'row divImg6'});
   const img2        = $('<img>',{src:'img/icons/bcp-logo.png',class:'col s4 offset-s4 img2'});
   const divText6    = $('<div>',{class:'row divText6'});
   const h2          = $('<h2>',{text:'Registra tu tarjeta débito BCP',class:'col s12 col m4 offset-m4'});
   const p           = $('<p>',{text:'Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.',class:'col s12'});
   const divRow      = $('<div>',{class:'row'});
   const form        = $('<form>');
   const divRowForm  = $('<div>',{class:'row'});
   const divRowInput = $('<div>',{class:'input-field col s10 offset-s1'});
   const i           = $('<i>',{class:'material-icons prefix'});
   const input1      = $('<input>',{id:'input1',type:'number',class:'validate'});
   const divRowScan  = $('<div>',{class:'row div-row-scan'})
   const imgScan     = $('<img>',{src:'img/icons/scan.png',class:''});
   const a           = $('<a>',{href:'#',text:'Escanear tarjeta',class:''});
   const divDate     = $('<div>',{class:'row'});
   const pDate       = $('<p>',{text:'Fecha de vencimiento'});
   const inpDate1    = $('<input>',{type:'number',min:'1', max:'12',oninput:'maxLengthCheck(this)',maxLength:'2'});
   const inpDate2    = $('<input>',{type:'number',min:'17',max:'24'});

   /*<div class="row">
     <form class="col s12">
       <div class="row">
         <div class="input-field col s6">
           <i class="material-icons prefix">account_circle</i>
           <input id="icon_prefix" type="text" class="validate">
           <label for="icon_prefix">First Name</label>
         </div>
     img+anchor
     Fecha de vencimiento _____/______
       </div>
     </form>
   </div>*/

   divImg6.append(img1);
   divImg6.append(img2);
   divText6.append(h2);
   divText6.append(p);
   divRow.append(form);
   a.prepend(imgScan);
   divRowScan.append(a);
   divDate.append(pDate);
   divDate.append(inpDate1);
   divDate.append(inpDate2);
   form.append(divRowForm);
   form.append(divRowScan);
   form.append(divDate);
   divRowForm.append(divRowInput);
   divRowInput.append(i);
   divRowInput.append(input1);
   section.append(divImg6);
   section.append(divText6);
   section.append(form);

  return section
}
