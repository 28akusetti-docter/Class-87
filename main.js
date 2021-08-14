var canvas = new fabric.Canvas('myCanvas')
playerX = 10
playerY = 10
block_img_width = 30
block_img_height = 30
var player = ""
var block_img = ""
function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        player = Img
        player.scaleToWidth(100)
        player.scaleToHeight(140)
        player.set({
            top: playerY,
            left: playerX
        })
        canvas.add(player)
    })
}
function newImage(get_img) {
    fabric.Image.fromURL(get_img, function (Img) {
        block_img = Img
        block_img.scaleToWidth(block_img_width)
        block_img.scaleToHeight(block_img_height)
        block_img.set({
            top: playerY,
            left: playerX
        })
        canvas.add(block_img)
    })
}
window.addEventListener("keydown", mykeydown)
function mykeydown(e) {
    keypressed = e.keyCode
    console.log(keypressed)
    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and shift")
        block_img_width = block_img_width + 10
        block_img_height = block_img_height + 10
        document.getElementById("current_width").innerHTML = block_img_width
        document.getElementById("current_height").innerHTML = block_img_height

    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("m and shift")
        block_img_width = block_img_width - 10
        block_img_height = block_img_height - 10
        document.getElementById("current_width").innerHTML = block_img_width
        document.getElementById("current_height").innerHTML = block_img_height

    }
    if (keypressed == '38') {
        up()
        console.log("up")
    }
    if (keypressed == '40') {
        down()
        console.log("down")
    }
    if (keypressed == '37') {
        left()
        console.log("left")
    }
    if (keypressed == '39') {
        right()
        console.log("right")
    }
    if (keypressed == '87') {
        newImage('wall.jpg')
        console.log("w")
    }
    if (keypressed == '71') {
        newImage('ground.png')
        console.log("g")
    }
    if (keypressed == '76') {
        newImage('light_green.png')
        console.log("l")
    }
    if (keypressed == '84') {
        newImage('trunk.jpg')
        console.log("t")
    }
    if (keypressed == '82') {
        newImage('roof.jpg')
        console.log("r")
    }
    if (keypressed == '89') {
        newImage('yellow_wall.png')
        console.log("y")
    }
    if (keypressed == '68') {
        newImage('dark_green.png')
        console.log("d")
    }
    if (keypressed == '67') {
        newImage('cloud.jpg')
        console.log("c")
    }

}
function up(){
    if(playerY>=0){
        playerY=playerY-block_img_height
        canvas.remove(player)
        playerUpdate()
    }
}
function down(){
    if(playerY<=500){
        playerY=playerY+block_img_height
        canvas.remove(player)
        playerUpdate()
    }
}
function left(){
    if(playerX>0){
        playerX=playerX-block_img_width
        canvas.remove(player)
        playerUpdate()
    }
}
function right(){
    if(playerX<=850){
        playerX=playerX+block_img_width
        canvas.remove(player)
        playerUpdate()
    }
}