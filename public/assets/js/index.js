'use strict';

const render = (root) =>{

  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const update = function(){
    render(root);
  }
  //wrapper.append(ScreenOne(update));

  /*if(state.pantalla1 == "true"){
    wrapper.append(ScreenOne(update));
  }else if (state.pantalla2== "true") {
    wrapper.append(ScreenTwo(update));
  }*/
  wrapper.append(ScreenFour(update));
  root.append(wrapper);
}


const state = {

  pantalla1: null,
  pantalla2: null
}


$( _ => {

     state.pantalla1= "true";

    const root = $('#root');
    render(root);

});
