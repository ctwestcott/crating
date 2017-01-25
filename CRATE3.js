
/*
 * @name Input and Button
 * @description You will need to include the 
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * for this example to work in your own project.<br><br>
 * Input text and click the button to see it affect the the canvas.
 */
var piecelength, piecewidth, pieceheight, button, greeting;

function setup() {

  // create canvas
  createCanvas(710, 400);

  piecelength = createInput();
  piecelength.position(20, 65);
  
  piecewidth = createInput();
  piecewidth.position(20, 85);
  
  pieceheight = createInput();
  pieceheight.position(20, 105);

  button = createButton('submit');
  button.position(150, 125);
  button.mousePressed(greet);

  greeting = createElement('h2', 'Piece dimensions, Length, Width, Height:');
  greeting.position(20, 5);
  
  textAlign(CENTER)
  textSize(50);
  
  frontandback = createElement('h3', 'Front/Back:');
  frontandback.position(20, 175);
  
  textAlign(CENTER)
  textSize(30);
  
  sides = createElement('h3', 'Sides:');
  sides.position(20, 200);
  
  textAlign(CENTER)
  textSize(30);
  
  topandbottom = createElement('h3', 'Top/Bottom:');
  topandbottom.position(20,225);
  
  textAlign(CENTER)
  textSize(30);
  
  totalply = createElement('h4', 'Total Ply:');
  totalply.position(20, 275);
  
  pinecuts = createElement('h3', 'Pine Cuts:');
  pinecuts.position(300, 175);
  
  totalpine = createElement('h4', 'Total Pine:');
  totalpine.position(20, 300);
  
  CRATEweight = createElement('h4', 'Estimated Crate Weight:');
  CRATEweight.position(20, 350);
 
 
}

function greet() {
  var CRATElength = (float(piecelength.value()) + float(2.5) + float(2 * 2.125));
  piecelength.value('');
  
  var CRATEwidth = (float(piecewidth.value()) + float(2.5) + float(2 * 2.125));
  piecewidth.value('');
  
  var CRATEheight = (float(pieceheight.value()) + float(2.5) + float(2 * 2.125));
  pieceheight.value('');
  
  greeting.html( 'Crate dimensons are '+CRATElength+', '+CRATEwidth+', '+CRATEheight+'!');
  
  frontandback.html( 'Front/Back: '+CRATElength+ ' x ' +CRATEheight+ '|');
  
  sides.html( 'Sides: '+(float(CRATEheight) - float(2.5))+ ' x ' +(float(CRATEwidth) - float(2.5))+ '|');
  
  topandbottom.html('Top/Bottom: '+CRATElength+ ' x ' +(float(CRATEwidth) - float(2.5))+'|' );
            
  pinecuts.html('Pine Cuts: 4 at '+CRATElength+ '| 4 at '+(float(CRATEheight) - float( 2* 5.5))+
  '| 8 at '+(float(CRATEwidth)-float(2.5))+ '| 4 at '+(float(CRATEheight)-float(2.5) - float(2 * 5.5))+ 
  '| 4 at ' +(float(CRATElength) - (float(2 * 5.5)))+ '|');
  
  totalpine.html(('Total Pine: ')+((float((4 * CRATElength) + float((4 * (float(CRATEheight) - float( 2* 5.5)))) + 
  (float(8 * (float(CRATEwidth)-float(2.5)))) + (float(4 * ((float(CRATEheight)-float(2.5) - float(2 * 5.5))))) +
  (float(4 * (float(CRATElength) - (float(2 * 5.5))))))) / float(12))+ ' feet');
  
  totalply.html('Total Ply: '+(((float(2 * (float(CRATElength * CRATEwidth)))) + 
  (float(2 * ((float(CRATEheight) - float(2.5) * (float(CRATEwidth) - float(2.5)))))) +
  (float(2 * ((float(CRATElength)) * (float(CRATEwidth) - float(2.5)))))) / 144)+ ' square feet');
  
  CRATEweight.html('Estimated Crate Weight: '+(((((float(2 * (float(CRATElength * CRATEwidth)))) + 
  (float(2 * ((float(CRATEheight) - float(2.5) * (float(CRATEwidth) - float(2.5)))))) +
  (float(2 * ((float(CRATElength)) * (float(CRATEwidth) - float(2.5)))))) / 144) * float(1.42)) +
  (((float((4 * CRATElength) + float((4 * (float(CRATEheight) - float( 2* 5.5)))) + 
  (float(8 * (float(CRATEwidth)-float(2.5)))) + (float(4 * ((float(CRATEheight)-float(2.5) - float(2 * 5.5))))) +
  (float(4 * (float(CRATElength) - (float(2 * 5.5))))))) / float(12))))+ ' pounds');
  

 /* for (var i=0; i<200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
  */
}