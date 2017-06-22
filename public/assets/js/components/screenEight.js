"use strict";

const ScreenEight = (update) => {

    const section = $('<section>',{class:'divSection'});
    const divSec1 = $('<div>');
    const divEng  = $('<div>',{class:'divPurple row'});
    const imgEng  = $('<img>',{src:'img/icons/engine.png',class:'col s2 offset-s8'});
    const divImg  = $('<div>',{class:'row'});
    const imgFace = $('<img>',{src:'img/icons/happy-face.png',class:'col s4 offset-s3'});
    const pHola   = $('<h2>',{text:'Hola',class:'col s3 offset-s3 hola'});
    const divTe   = $('<div>',{class:'row divTe'});
    const divTe2  = $('<div>',{class:'row'});
    const pAnc    = $('<a>',{href:'#',text:'Mostrar Saldo',class:'p-anc col s5 offset-s3'});
    const imgEye  = $('<img>',{src:'img/icons/eye.png'});
    const divMov  = $('<div>');
    const divSec2 = $('<div>',{class:'divPurpleDark row'});
    const h2Pag   = $('<h2>',{text:'ÚLTIMOS MOVIMIENTOS',class:'h2-pag col s6 ult-mov'})
    const imgFle  = $('<img>',{src:'img/icons/right-arrow-circular-button.png',class:'col s2 offset-s2'})
    const hr      = $('<hr>');

    divEng.append(imgEng);
    divImg.append(imgFace);
    divTe.append(pHola);
    pAnc.prepend(imgEye);
    divTe2.append(pAnc);
    divSec1.append(divEng);
    divSec1.append(divImg);
    divSec1.append(divTe);
    divSec1.append(divTe2);
    divSec2.append(h2Pag);
    divSec2.append(imgFle);
    divSec2.append(hr);

    section.append(divSec1);
    section.append(divSec2);




   return section

}
