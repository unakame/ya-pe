"use strict";

const ScreenEight = (update) => {

    const section = $('<section>',{class:'divSection'});
    const divEng  = $('<div>',{class:'divPurple row'});
    const imgEng  = $('<img>',{src:'img/icons/engine.png',class:'col s2 offset-s8'});
    const divImg  = $('<div>',{class:'row'});
    const imgFace = $('<img>',{src:'img/icons/happy-face.png',class:'col s4 offset-s3'});
    const pHola   = $('<h2>',{text:'Hola',class:'col s3'});
    const divTe   = $('<div>',{class:'row divTe'})
    const pAnc    = $('<a>',{href:'#',text:'Mostrar Saldo'});
    const imgEye  = $('<img>',{src:'img/icons/eye.png'})
    const divMov  = $('<div>');


    divEng.append(imgEng);
    divImg.append(imgFace);
    divTe.append(pHola);
    pAnc.prepend(imgEye);
    divTe.append(pAnc);

    section.append(divEng);
    section.append(divImg);
    section.append(divTe);




   return section

}
