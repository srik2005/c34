var ball, database, positions;

function setup(){
    createCanvas(500,500);
    ball = createSprite(0,0,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    var ballref = database.ref('ball/positions');
    ballref.on("value",readpositions,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
    database.ref('ball/positions').set({
 'x': positions.x + x,
'y' : positions.y + y

    })

}

function readpositions(a){
positions = a.val();
ball.x = positions.x;
ball.y = positions.y;

}
function showerror(){
console.log("error while fetching the data")



}

