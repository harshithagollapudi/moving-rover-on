canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_X=10;
rover_Y=20;
background_image="mars.jpg";
rover_image="rover.png";
function add(){
background_imagetag=new Image();
background_imagetag.onload=uploadBackground;
background_imagetag.src=background_image;
rover_imagetag=new Image();
rover_imagetag.onload=uploadrover;
rover_imagetag.src=rover_image;
}
 function uploadBackground(){
ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
 }
 function uploadrover(){
ctx.drawImage(rover_imagetag,rover_X,rover_Y,rover_width,rover_height);
 }
 window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=="38")
{
up();
console.log("up");
}
if(keyPressed=="40")
{
down();
console.log("down");
}
if(keyPressed=="39")
{
right();
console.log("right");
}
if(keyPressed=="37")
{
left();
console.log("left");
}
}
function up()
{
    if(rover_Y>=0)
    {
        rover_Y=rover_Y-10;
        console.log("when Up arrow is pressed,X="+ rover_X+"y="+rover_Y);
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(rover_Y<=500)
    {
        rover_Y=rover_Y+10;
        console.log("when Down arrow is pressed,X="+ rover_X+"y="+rover_Y);
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(rover_X>=0)
    {
        rover_X=rover_X-10;
        console.log("when Left arrow is pressed,X="+ rover_X+"y="+rover_Y);
        uploadBackground();
        uploadrover();
    }
}
function right()
{
    if(rover_X<=700)
    {
        rover_X=rover_X+10;
        console.log("when right arrow is pressed,X="+ rover_X+"y="+rover_Y);
        uploadBackground();
        uploadrover();
    }
}
nasa_mars_images_array=["nasa_1.jpeg","nasa_2.jpeg","nasa_3.jpeg"];
random_number=Math.floor(Math.random()*3);
background_image=nasa_mars_images_array[random_number];
console.log("background_image"+background_image);
