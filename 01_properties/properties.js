function setSomePropertiesOn(objReference) {
  objReference.x = 7;
  objReference['y'] = 8;
  
  objReference.onePlus = function(num) {
    return num += 1;
  };
  
}