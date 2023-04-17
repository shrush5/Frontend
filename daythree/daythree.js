/*alert("Congratulations!!!!")
alert("Hello Shrushti");
alert(4+6);
let num=14;
    alert(num)

let num1=23;
    alert(num1)

var num3=16;
    alert(num3)

const num5=22;
    alert(num5)*/

/*let a=13
    a*=5;
alert(a)


var c=5
   c>2;
alert(c)

var res=12==0;
    alert(res)*/

/*var x=13;
var y=12;
alert(x==y && x>y)


if(x<y)
    alert("Shrushti")
else
    alert("Ugale")

alert(typeof(2,4))


let age=prompt("whats your age?",100)
    alert("your age is :"+age)*/


var up = document.getElementById('GFG_UP');
up.innerHTML = "Click on the button to add image element";
var down = document.getElementById('GFG_DOWN');

function GFG_Fun() {
    var img = document.createElement('img');
    img.src =
        'img.jpg';
    document.getElementById('body').appendChild(img);
    down.innerHTML = "Image Element Added.";
}