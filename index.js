
function info() {
  setTimeout(function() {
    document.getElementById('description').classList.toggle('show');
  }, 10);  
  
}

function reset() {
  for (var x = 1; x < 5; x++) {
    for (var y = 1; y < 5; y++) {
      var resetter = document.getElementById(''+x +y);
      if (resetter.className == 'grid_cell active') {
        var tile = document.getElementById('tile_'+x +y);
        resetter.removeChild(tile);
      }
    }
  }
  document.getElementById('status').className = '';
  document.getElementById(' ').dataset.value = 0;
  score();
  cellReset();
  cellCreator(2, 0);
}
