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
    const divImg2 = $('<div>',{class:'row'})
    const icon    = $('<img>',{src:'img/icons/icon.png',class:'col s4 offset-s1'});
    const pSec2   = $('<p>',{text:'¿Aún no realizas tu primer pago? Es rápido y sencillo',class:'col s5 pSec2'});
    const divCir  = $('<div>',{class:'row divCir'});
    const imgCir1 = $('<img>',{src:'img/icons/send.png',class:'img-cir1 col s3 offset-s1'});
    const imgCir2 = $('<img>',{src:'img/icons/code-qr.png',class:'img-cir2 col s3 offset-s3'});
    const divTextBot = $('<div>',{class:'row divTextBot'});
    const texBot1    = $('<p>',{text:'ENVIAR PAGO',class:'col s4 offset-s1'});
    const texBot2    = $('<p>',{text:'RECIBIR PAGO',class:'col s4 offset-s2'});

    divEng.append(imgEng);
    divImg.append(imgFace);
    divTe.append(pHola);
    pAnc.prepend(imgEye);
    divTe2.append(pAnc);
    divImg2.append(icon);
    divImg2.append(pSec2);
    divCir.append(imgCir1);
    divCir.append(imgCir2);
    divTextBot.append(texBot1);
    divTextBot.append(texBot2);

    divSec1.append(divEng);
    divSec1.append(divImg);
    divSec1.append(divTe);
    divSec1.append(divTe2);
    divSec2.append(h2Pag);
    divSec2.append(imgFle);
    divSec2.append(hr);
    divSec2.append(divImg2);
    divSec2.append(divCir);
    divSec2.append(divTextBot);

    section.append(divSec1);
    section.append(divSec2);




   return section

}
