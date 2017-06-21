"use strict";

const ScreenFour = (update) => {

  const section    = $('<section>');
  const divImg     = $('<div>',{class:'row divImg4'});
  const img        = $('<img>',{src:'img/icons/lockone.png', class:'col s6 offset-s3'});
  const divText    = $('<div>',{class: 'row divText4'});
  const h2         = $('<h2>',{text: 'Crea tu usuario YaPe',class:'col s8 offset-s2'});
  const p          = $('<p>',{text:'Ingresa un nombre, email y clave de usuario.',class:'col s10 offset-s1'});


  divImg.append(img);
  divText.append(h2);
  divText.append(p);
  section.append(divImg);
  section.append(divText);

 return section

}
