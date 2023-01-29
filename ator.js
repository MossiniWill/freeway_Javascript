//ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, largura1, altura1, cx, cy, diâmetro);
  for(let i = 0; i < imagemCarros.length; i += 1) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      voltaAtorParaPosicaoInicial();
    }
  }
}

function voltaAtorParaPosicaoInicial () {
  yAtor = 366;
}

function incluiPontos (){
  textSize(25);
  textAlign(CENTER);
  fill(color(255, 69, 0))
    text(meusPontos, width / 5, 26);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}
