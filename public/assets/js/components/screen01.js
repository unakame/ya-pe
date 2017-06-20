"use strict";

const ScreenOne = (update) => {

  const section        = $('<section>',{class:'row'});
  const divImgCarousel = $('<div>',{class:'owl-carousel owl-theme'})
  const divImg1        = $('<div>');
  const divImg2        = $('<div>');
  const divImg3        = $('<div>');
  const img1           = $('<img>',{src:'img/icons/icon-people.png'});
  const h3_1           = $('<h3>',{text:'Paga a tus amigos'});
  const p_1            = $('<p>',{text:'Paga a quien quieras desde donde quieras, sin usar efectivo'});
  const img2           = $('<img>',{src:'img/icons/happy-person.png'});
  const h3_2           = $('<h3>',{text:'Sin número de cuenta'});
  const p_2            = $('<p>',{text:'Elige a quien pagar desde tu lista de contactos'});
  const img3           = $('<img>',{src:'img/icons/group-people.png'});
  const h3_3           = $('<h3>',{text:'Gratis y seguro'});
  const p_3            = $('<p>',{text:'La transferencia es inmediata y gratuita de una cuenta a otra'});
  const divTextButton  = $('<div>',{class: 'container'});
  const button         = $('<button>',{text: 'REGISTRARME'});


  divImg1.append(img1);
  divImg2.append(img2);
  divImg3.append(img3);
  divImg1.append(h3_1);
  divImg2.append(h3_2);
  divImg3.append(h3_3);
  divImg1.append(p_1);
  divImg2.append(p_2);
  divImg3.append(p_3);
  divImgCarousel.append(divImg1);
  divImgCarousel.append(divImg2);
  divImgCarousel.append(divImg3);
  divTextButton.append(button);
  section.append(divImgCarousel);
  section.append(divTextButton);


  return section;


 }
