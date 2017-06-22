"use strict"

const ScreenFive = (update) =>{

    const section = $('<section>',{class:'section5'});
    const row     = $('<div>',{class:'row divRow5'});
    const img     = $('<img>',{src:'img/icons/check.png',class:'col s4 offset-s4'});
    const h2_1    = $('<h2>',{text:'¡Bien!',class:'col s4 offset-s4 h2_1'});
    const h2_2    = $('<h2>',{text:'Ahora puedes usar YaPe',class:'col s10 offset-s1 h2_2'});

    row.append(img);
    row.append(h2_1);
    row.append(h2_2);
    section.append(row);







   return section

}
