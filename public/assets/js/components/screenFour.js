
"use strict";

const ScreenFour = (update) => {

  const section    = $('<section>');
  const divImg     = $('<div>',{class:'row divImg4'});
  const img        = $('<img>',{src:'img/icons/lockone.png', class:'col s4 offset-s4'});
  const divText    = $('<div>',{class: 'row divText4'});
  const h2         = $('<h2>',{text: 'Crea tu usuario YaPe',class:'col s8 offset-s2'});
  const p          = $('<p>',{text:'Ingresa un nombre, email y clave de usuario.',class:'col s10 offset-s1'});
  const row        = $('<div>',{class:'row'});
  const form       = $('<form>',{class:'col s12'});
  const divRow     = $('<div>',{class: 'row'});
  const divRowForm = $('<div>',{class:'input-field col s10 offset-s1 divRowForm4'});
  const i1         = $('<i>',{class: 'material-icons prefix'});
  const input1     = $('<input>',{class: 'validate', type:'text', id:'input1'});
  const i2         = $('<i>',{class: 'material-icons prefix'});
  const input2     = $('<input>',{class: 'validate', type:'email', id:'input2'});
  const i3         = $('<i>',{class: 'material-icons prefix'});
  const input3     = $('<input>',{class: 'validate', type:'password', id:'input3'});
  const pBot       = $('<p>',{text:'Cuida esta clave como oro, es tu acceso a Yape.'});
  const button     = $('<button>',{text:'CREAR CUENTA',class:'btn disabled col s6 offset-s3'});





  divImg.append(img);
  divText.append(h2);
  divText.append(p);
  row.append(form);
  form.append(divRow);
  divRow.append(divRowForm);
  divRowForm.append(i1);
  divRowForm.append(input1);
  divRowForm.append(i2);
  divRowForm.append(input2);
  divRowForm.append(i3);
  divRowForm.append(input3);
  divRowForm.append(pBot);
  divRowForm.append(button);

  section.append(divImg);
  section.append(divText);
  section.append(row);

 return section

}
