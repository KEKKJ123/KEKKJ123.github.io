(function(){
  function createChristmasTree() {
  var treeDiv = document.getElementById('christmas-tree');
  
  var layerWidths = [100, 80, 60, 40, 20];
  
  for (var i = 0; i < layerWidths.length; i++) {
    var layer = document.createElement('div');
    layer.style.width = layerWidths[i] + 'px';
    layer.style.height = '20px';
    layer.style.backgroundColor = 'green';
    layer.style.margin = '50 auto';
    layer.style.position = 'relative';
    
    addOrnaments(layer, 3);
    
    treeDiv.appendChild(layer);
  }
  
  var trunk = document.createElement('div');
  trunk.style.width = '30px';
  trunk.style.height = '60px';
  trunk.style.backgroundColor = 'brown';
  trunk.style.margin = '50 auto';
  trunk.style.position = 'relative';
  trunk.style.bottom = '10px';
  
  decorateTrunk(trunk, 3);
  
  treeDiv.appendChild(trunk);
  
  addGifts(treeDiv, 5);
}

function addOrnaments(layer, numberOfOrnaments) {
  for (var j = 0; j < numberOfOrnaments; j++) {
    var ornament = document.createElement('div');
    ornament.style.width = '10px';
    ornament.style.height = '10px';
    ornament.style.backgroundColor = getRandomColor();
    ornament.style.borderRadius = '50%';
    ornament.style.position = 'absolute';
    ornament.style.top = (Math.random() * 20) + 'px';
    ornament.style.left = (Math.random() * (layerWidths[i] - 10)) + 'px';
    
    layer.appendChild(ornament);
  }
}

function getRandomColor() {
  var colors = ['red', 'blue', 'yellow', 'purple', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function decorateTrunk(trunk, numberOfStripes) {
  for (var k = 0; k < numberOfStripes; k++) {
    var stripe = document.createElement('div');
    stripe.style.width = '2px';
    stripe.style.height = '100%';
    stripe.style.backgroundColor = 'white';
    stripe.style.position = 'absolute';
    stripe.style.left = (k * 10) + 'px';
    
    trunk.appendChild(stripe);
  }
}

function addGifts(treeDiv, numberOfGifts) {
  for (var m = 0; m < numberOfGifts; m++) {
    var gift = document.createElement('div');
    gift.style.width = '20px';
    gift.style.height = '20px';
    gift.style.backgroundColor = getRandomColor();
    gift.style.position = 'absolute';
    gift.style.bottom = '10px';
    gift.style.left = ((100 - (numberOfGifts * 20)) / 2) + (m * 20) + 'px';
    
    treeDiv.appendChild(gift);
  }
}})()