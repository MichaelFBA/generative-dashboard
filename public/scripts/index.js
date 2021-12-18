for (var i = 0; i < 40; i++) {
  var randomWidth = getRandomInt(200, 800);
  var randomHeight = getRandomInt(200, 800);
  document.getElementById('imgGrid').innerHTML += '<div><img src="https://picsum.photos/' + randomWidth + '/' + randomHeight + '/" alt="randomPic" /></div>';
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}