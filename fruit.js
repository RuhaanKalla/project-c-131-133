status = "";
object = [];
function preload(){
img1 = loadImage("fruit basket.jpeg");
}

function setup(){
    canvas = createCanvas(500 , 400);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
}

function draw(){
    image(img1,0,0,500,400);
    if(status != ""){
        for(i=0;i < object.length;i++){
            document.getElementById("status").innerHTML = "There are 2 big object sin the image out of which cocossd model has detected " + object.length + "obbjects.";
    
            fill("red");
            percent = Math.floor(object[i].confidence*100);
    
            text(object[i].label + " " + percent + "%",object[i].x -10,object[i].y - 10);
    
            noFill();
            stroke("red");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);}
    }
}

function modelLoaded(){
    status = true;
    console.log("Model Loaded!");
    objectDetector.detect(img1 , gotResult);
}

function gotResult(results){
    console.log(results);
    object = results;
}
