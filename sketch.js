var n1,n2
var b1,b2,b3,b4
function setup() {
  createCanvas(400, 400);
  num1=createInput()
  num1.position(5,60)

  num2=createInput()
  num2.position(200,60)

  b1=createButton("add")
  b1.position(10,200)
  b1.mousePressed(add)

  b2=createButton("subtract")
  b2.position(100,200)
  b2.mousePressed(sub)

  b3=createButton("multiply")
  b3.position(200,200)
  b3.mousePressed(multiply)

  b4=createButton("division")
  b4.position(300,200)
  b4.mousePressed(divide)

}

function draw() {
  background(220);
  n1=parseInt(num1.value())//parseInt is used to convert string to number
  n2=parseInt(num2.value())

}

function add() {
  console.log(n1+n2)

}

function sub() {
  console.log(n1-n2)
}


function multiply(){
  console.log(n1*n2)
}


function divide(){
  console.log(n1/n2)
}