var Canvas=document.getElementById("myCanvas");

var ctx=Canvas.getContext("2d");
var car_width=100;
car_height=90;
background_image="racing.jpg";
car_image="car1.png";
car_x=10;
car_y=10;

function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car_imgTag=new Image();
    car_imgTag.onload=uploadCar;
    car_imgTag.src=car_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, Canvas.width, Canvas.height);
}

function uploadCar()
{
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);

if(keyPressed=='38')
{
    up();
    console.log("up");
}
if(keyPressed=='40')
{
    down();
    console.log("down");
}
if(keyPressed=='37')
{
    left();
    console.log("left");
}
if(keyPressed=='39')
{
    right();
    console.log("right");
}
}

function up()
{
    if(car_y>=0)
    {
        car_y=car_y - 10;
        console.log("when up arrow is pressed, x=" + car_x + "y=" + car_y);
        uploadBackground();
        uploadCar();
    } 
}
function down()
{
    if(car_y<=500)
    {
        car_y=car_y + 10;
        console.log("when down arrow is pressed, x=" + car_x + "y=" + car_y);
        uploadBackground();
        uploadCar();
    } 
}
function left()
{
    if(car_x>=0)
    {
        car_x=car_x - 10;
        console.log("when left arrow is pressed, x=" + car_x + "y=" + car_y);
        uploadBackground();
        uploadCar();
    } 
}
function right()
{
    if(car_x<=700)
    {
        car_x=car_x + 10;
        console.log("when right arrow is pressed, x=" + car_x + "y=" + car_y);
        uploadBackground();
        uploadCar();
    } 
}

//Code for car 2//

var car2_width=150;
car2_height=90;
background_image="racing.jpg";
car2_image="car2.png";
car2_x=10;
car2_y=100;

function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground2;
    background_imgTag.src=background_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car2_image;
}

function uploadBackground2()
{
    ctx.drawImage(background_imgTag, 0, 0, Canvas.width, Canvas.height);
}

function uploadCar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);

if(keyPressed=='87')
{
    W();
    console.log("W");
}
if(keyPressed=='83')
{
    S();
    console.log("S");
}
if(keyPressed=='65')
{
    A();
    console.log("A");
}
if(keyPressed=='68')
{
    D();
    console.log("D");
}
}

function W()
{
    if(car2_y>=0)
    {
        car2_y=car2_y - 10;
        console.log("when up arrow is pressed, x=" + car2_x + "y=" + car2_y);
        uploadBackground2();
        uploadCar2();
    } 
}
function S()
{
    if(car2_y<=500)
    {
        car2_y=car2_y + 10;
        console.log("when down arrow is pressed, x=" + car2_x + "y=" + car2_y);
        uploadBackground2();
        uploadCar2();
    } 
}
function A()
{
    if(car2_x>=0)
    {
        car2_x=car2_x - 10;
        console.log("when left arrow is pressed, x=" + car2_x + "y=" + car2_y);
        uploadBackground2();
        uploadCar2();
    } 
}
function D()
{
    if(car2_x<=700)
    {
        car2_x=car2_x + 10;
        console.log("when right arrow is pressed, x=" + car2_x + "y=" + car2_y);
        uploadBackground2();
        uploadCar2();
    } 
}

function change_winner()
{
    if(car_x<=700)
    {
        console.log("Racer 1 Wins!!!")
        document.getElementById("change_winner").innerHTML="Racer 1 wins!"
    }

    if(car2_x<=700)
    {
        console.log("Racer 2 Wins!!!")
        document.getElementById("change_winner").innerHTML="Racer 2 wins!"
    }
}