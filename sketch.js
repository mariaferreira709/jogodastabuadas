var imgfundo;
var fotoaluna;
var num0;
var num1;
var num2;
var num3;
var num4;
var num5;
var num6;
var num7;
var num8;
var num9;
var fase1;
var fase2;
var fase3;
var xbotao = 205
var largura = 200;
var altura = 60;
var tela = 1;

function setup() {
  createCanvas(600, 450);
  imgfundo = loadImage('Imagens/imgjogo.jpg');
  fotoaluna = loadImage('Imagens/fotoaluna.jpg');
  num0 = loadImage('Imagens/num0.png');
  num1 = loadImage('Imagens/num1.png');
  num2 = loadImage('Imagens/num2.png');
  num3 = loadImage('Imagens/num3.png');
  num4 = loadImage('Imagens/num4.png');
  num5 = loadImage('Imagens/num5.png');
  num6 = loadImage('Imagens/num6.png');
  num7 = loadImage('Imagens/num7.png');
  num8 = loadImage('Imagens/num8.png');
  num9 = loadImage('Imagens/num9.png');
  fase1 = loadImage('Imagens/fase1.png');
  fase2 = loadImage('Imagens/fase2.png');
  fase3 = loadImage('Imagens/fase3.png');
}

function draw(){
if(tela==1){
    background(imgfundo);
  
//Titulo
    fill('##483D8B');
    textSize(45);
    noStroke();
    text('JOGO DAS TABUADAS', 55, 100);
  
//Botão Jogar
    fill('#E0FFFF');
    noStroke();
    rect(xbotao, 170, largura, altura, 20);
    fill('#4682B4');
    textSize(35);
    text('Jogar',259,210);
  
//Click Jogar
    if(mouseX> xbotao && mouseX< xbotao+largura &&   mouseY> 170 && mouseY < 170+altura){
    noFill();
    stroke('#217aad');
    strokeWeight(2);
    rect(xbotao, 170, largura, altura, 20);
    if(mouseIsPressed){
      tela=2}
    }
  
//Botão Instruções
  fill('#E0FFFF');
  noStroke();
  rect(xbotao, 250, largura, altura, 20);
  fill('#4682B4');
  textSize(35);
  text('Instruções', 225,290)  
  
//Click Instruções
if(mouseX> xbotao && mouseX< xbotao+largura &&   mouseY> 250 && mouseY < 250+altura){
  noFill();
  stroke('#217aad');
  strokeWeight(2);
  rect(xbotao, 250, largura, altura, 20);
  if(mouseIsPressed){
    tela=3}
  }
  
//Botão Créditos
    fill('#E0FFFF');
    noStroke();
    rect(xbotao, 330, largura, altura, 20);
    fill('#4682B4');
    textSize(35);
    text('Créditos', 240, 370)
  
//Click Créditos
    if(mouseX> xbotao && mouseX< xbotao+largura &&   mouseY> 330 && mouseY < 330+altura){
    noFill();
    stroke('#217aad');
    strokeWeight(2);
    rect(xbotao, 330, largura, altura, 20);
    if(mouseIsPressed){
      tela=4}
    }
} 
//Tela 2: Nivel 1
else if(tela==2){
  background(imgfundo);
  fill('##483D8B');
  textSize(40);
  noStroke();
  text('Nivel 1',245, 80);
//Botão Voltar
  fill('#E0FFFF');
  noStroke();
  rect(25,20,100,50,20);
  fill('#4682B4');
  textSize(25);
  text('Sair',52,53);
  if(mouseX> 25 && mouseX< 25+100 &&   mouseY> 20 && mouseY < 20+50){
    noFill();
    stroke('#217aad');
    rect(25,20,100,50,20);
    if(mouseIsPressed){
      tela = 1}
  }
  image(fase1,140,90);
  fill('#E0FFFF')
  noStroke();
  //Quadrado 1
  rect(100,300,120,130,20);
  image(num4,105,310);
  //Quadrado 2
  rect(250,300,120,130,20);
  image(num8,255,310);
  //Quadrado 3
  rect(400,300,120,130,20);
  image(num5,405,310);
  if(mouseX>100 && mouseX<100+120 && mouseY>300 && mouseY<300+130){
    noFill();
    stroke('#217aad');
    rect(100,300,120,130,20);
    if(mouseIsPressed){
      tela=6;
    }
  }
  if(mouseX>250 && mouseX<250+120 && mouseY>300 && mouseY<300+130){
    noFill();
    stroke('#217aad');
    rect(250,300,120,130,20);
    if(mouseIsPressed){
      tela=5;
    }
  }
  if(mouseX>400 && mouseX<400+120 && mouseY>300 && mouseY<300+130){
    noFill();
    stroke('#217aad');
    rect(400,300,120,130,20);
    if(mouseIsPressed){
      tela=6;
    }
  }
}
//Tela 3: Instruções
else if(tela==3){
  background(imgfundo);
  fill('##483D8B');
  textSize(40);
  noStroke();
  text('Instruções',220, 90);
  
//Texto Instruções
  fill('#E0FFFF');
  noStroke();
  rect(50,130,500,300,20);
  fill('#4682B4');
  textSize(20);
  text("  Este jogo foi desenvolvido para crianças do ensino",73,170);
  text("fundamental. Seu principal intuito é ajudar no estudo", 70, 198);
  text("das tabuadas.",70,226);
  text("O jogo é dividido em três níveis de dificuldade,",70,260);  text("sendo eles:",70,288);
  text("Fácil - soma e subtração",70,316);
  text("Médio - multiplicação",70,344);
  text("Difícil - divisão",70,372)
  
//Botão Voltar
  fill('#E0FFFF');
  noStroke();
  rect(25,20,100,50,20);
  fill('#4682B4');
  textSize(25);
  text('Voltar',43,53);
  if(mouseX> 25 && mouseX< 25+100 &&   mouseY> 20 && mouseY < 20+50){
    noFill();
    stroke('#217aad');
    rect(25,20,100,50,20);
    if(mouseIsPressed){
      tela = 1}
  }
}
//Tela 4: Créditos
else if(tela==4){
  background(imgfundo);
  fill('##483D8B');
  textSize(40);
  noStroke();
  text('Créditos',220, 90);
  
//Texto Créditos
  fill('#E0FFFF');
  noStroke();
  rect(150,150,430,180,20);
  image(fotoaluna,20, 160);
  textSize(20)
  fill('#4682B4');
  text('PROGRAMADORA',285,180);
  textSize(20)
  text('Maria Clara Ferreira dos Santos',230,215)
  textSize(17)
  text('Técnica em Redes de Computadores pelo IMD/UFRN,',155,245);
  text('Graduanda em Ciência e Tecnologia pela Universidade',155,270);
  text('Federal do Rio Grande do Norte.',155,295);
  
//Botão Voltar
  fill('#E0FFFF');
  noStroke();
  rect(25,20,100,50,20);
  fill('#4682B4');
  textSize(25);
  text('Voltar',43,53);
  if(mouseX> 25 && mouseX< 25+100 &&   mouseY> 20 && mouseY < 20+50){
    noFill();
    stroke('#217aad');
    rect(25,20,100,50,20);
    if(mouseIsPressed){
      tela = 1}
  }
}
//Tela 5: Nivel 2
else if(tela==5){
  background(imgfundo);
  fill('##483D8B');
  textSize(40);
  noStroke();
  text('Nivel 2',245, 80);
//Botão Voltar
  fill('#E0FFFF');
  noStroke();
  rect(25,20,100,50,20);
  fill('#4682B4');
  textSize(25);
  text('Sair',52,53);
  if(mouseX> 25 && mouseX< 25+100 &&   mouseY> 20 && mouseY < 20+50){
    noFill();
    stroke('#217aad');
    rect(25,20,100,50,20);
    if(mouseIsPressed){
      tela = 1}
  }
  image(fase2,140,90);
  //Quadrado 1
  fill('#E0FFFF')
  noStroke();
  rect(100,300,120,130,20);
  image(num1,105,310);
  //Quadrado 2
  rect(250,300,120,130,20);
  image(num6,255,310);
  //Quadrado 3
  rect(400,300,120,130,20);
  image(num2,405,310);
  
  if(mouseX>100 && mouseX<100+120 && mouseY>300 && mouseY<300+130){
    noFill();
    stroke('#217aad');
    rect(100,300,120,130,20);
    if(mouseIsPressed){
      tela=7;
    }
  }
  if(mouseX>250 && mouseX<250+120 && mouseY>300 && mouseY<300+130){
    noFill();
    stroke('#217aad');
    rect(250,300,120,130,20);
  }
  if(mouseX>400 && mouseX<400+120 && mouseY>300 && mouseY<300+130){
    noFill();
    stroke('#217aad');
    rect(400,300,120,130,20);
    if(mouseIsPressed){
      tela=6;
    }
  }
}
//Tela 6: Você perdeu
else if(tela==6){
  background(imgfundo);
  fill('##483D8B');
  textSize(32);
  noStroke();
  text('Que pena! Você perdeu,',150,200);
  text('tente novamente.',200,230);
  //Botão Voltar
  fill('#E0FFFF');
  noStroke();
  rect(25,20,100,50,20);
  fill('#4682B4');
  textSize(25);
  text('Sair',52,53);
  if(mouseX> 25 && mouseX< 25+100 &&   mouseY> 20 && mouseY < 20+50){
    noFill();
    stroke('#217aad');
    rect(25,20,100,50,20);
    if(mouseIsPressed){
      tela = 1}
  }
}
//Tela 7: Nivel 3
else if(tela==7){
  background(imgfundo);
  fill('##483D8B');
  textSize(40);
  noStroke();
  text('Nivel 3',245, 80);
//Botão Voltar
  fill('#E0FFFF');
  noStroke();
  rect(25,20,100,50,20);
  fill('#4682B4');
  textSize(25);
  text('Sair',52,53);
  if(mouseX> 25 && mouseX< 25+100 &&   mouseY> 20 && mouseY < 20+50){
    noFill();
    stroke('#217aad');
    rect(25,20,100,50,20);
    if(mouseIsPressed){
      tela = 1}
  }
  image(fase3,140,90);
  fill('#E0FFFF')
  noStroke();
  //Quadrado 1
  rect(100,300,120,130,20);
  image(num3,105,310);
  //Quadrado 2
  rect(250,300,120,130,20);
  image(num9,255,310);
  //Quadrado 3
  rect(400,300,120,130,20);
  image(num2,405,310);
  
  if(mouseX>100 && mouseX<100+120 && mouseY>300 && mouseY<300+130){
    noFill();
    stroke('#217aad');
    rect(100,300,120,130,20);
  }
  if(mouseX>250 && mouseX<250+120 && mouseY>300 && mouseY<300+130){
    noFill();
    stroke('#217aad');
    rect(250,300,120,130,20);
  }
  if(mouseX>400 && mouseX<400+120 && mouseY>300 && mouseY<300+130){
    noFill();
    stroke('#217aad');
    rect(400,300,120,130,20);
    if(mouseIsPressed){
      tela=8;
    }
  }
}
//Tela Final
else if(tela==8){
background(imgfundo);
  fill('##483D8B');
  textSize(40);
  noStroke();
  text('PARABÉNS!!!',200, 150);
  textSize(35)
  text('Você chegou ao final do jogo.',100,200);
//Botão Voltar
  fill('#E0FFFF');
  noStroke();
  rect(25,20,100,50,20);
  fill('#4682B4');
  textSize(25);
  text('Sair',52,53);
  if(mouseX> 25 && mouseX< 25+100 &&   mouseY> 20 && mouseY < 20+50){
    noFill();
    stroke('#217aad');
    rect(25,20,100,50,20);
    if(mouseIsPressed){
      tela = 1}
  }
}
}