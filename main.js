var canvas = new fabric.Canvas('myCanvas');

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function (Img)
    {
        player_object = Img;
        
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object)

    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = block_image_object;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        player_object.set({
            top:player_y,
            left:player_x
            });
            canvas.add(player_object)
    
    })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log( "Increased" );
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("width").innerHTML = block_image_width;
        document.getElementById("height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log( "Reduced" );
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("width").innerHTML = block_image_width;
        document.getElementById("height").innerHTML = block_image_height;
    }
}
if(keyPressed == '70')
{
    new_image('ironman_face.png');
    console.log("f");
}
if(keyPressed == '66')
{
   new_image('spiderman_body.png');
    console.log("b");
}
if(keyPressed == '76')
{
    new_image('hulk_legs.png');
    console.log("l");
}
if(keyPressed == '82')
{
    new_image('thor_right_hand.png');
    console.log("r");
}
if(keyPressed == '72')
{
    new_image('captain_america_left_hand.png');
    console.log("r");
}
if(keyPressed == '38')
{
    up();
    console.log("You are moving up!");
}
if(keyPressed == '40')
{
    down();
    console.log("You are moving down!");
}
if(keyPressed == '37')
{
    left();
    console.log("You are moving left!");
}
if(keyPressed == '39')
{
    right();
    console.log("You are moving right!");
}