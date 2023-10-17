AFRAME.registerComponent('car', {
    schema: {
      model:{type:"string",default:"../models/CAR.glb"}
    },
    init: function(){
      console.log("car")
      this.el.setAttribute("gltf-model",this.data.model)
      const position = {x:0 ,y:-20,z:0}
      const rotation = {x:0 , y:-100,z:0}
      this.el.setAttribute("position",position)
      this.el.setAttribute("rotation",rotation)
    }
  }
);
