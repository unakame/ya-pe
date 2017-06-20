"use strict";

const ScreenOne = (update) => {

  const section        = $('<section>',{class:'row'});
  const divImgCarousel = $('<div>',{class:'owl-carousel'})
  const divImg1        = $('<div>');
  const divImg2        = $('<div>');
  const divImg3        = $('<div>');
  const img1           = $('<img>',{src:'img/icons/icon-people.png'});
  const img2           = $('<img>',{src:'img/icons/happy-person.png'});
  const img3           = $('<img>',{src:'img/icons/group-people.png'});
  const divTextButton  = $('<div>',{class: 'container'});
  const h3             = $('<h3>',{text:'Paga a tus amigos'});
  const p              = $('<p>',{text:'Paga a quien quieras desde donde quieras, sin usar efectivo'});
  const button         = $('<button>',{text: 'REGISTRARME'});



  divImgCarousel.append(img1);
  divImgCarousel.append(img2);
  divImgCarousel.append(img3);
  divTextButton.append(h3);
  divTextButton.append(p);
  divTextButton.append(button);
  section.append(divImgCarousel);
  section.append(divTextButton);


  return section;


 }
