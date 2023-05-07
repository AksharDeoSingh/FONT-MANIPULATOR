noseX = 0;
noseY = 0;
left_wristX = 0;
right_wristX = 0;
difference = 0;


function preload(){


}

function setup(){
video = createCapture(VIDEO);
video.size(550, 400);

canvas = createCanvas(550, 550 );
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);
}
 
function draw(){
 background("aqua");
 fill("gold");
 stroke("blue");
 textSize(difference);
 text("HI", noseX, noseY);
}

function modelloaded(){
    console.log("model is loaded");
    
}
   
function gotPoses(results){
    if(results.length > 0){
        console.log(results[0]);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X =" + noseX + ",nose y =" +noseY);

     left_wristX = results[0].pose.leftWrist.x;
     right_wristX = results[0].pose.rightWrist.x;

     difference = Math.floor(left_wristX - right_wristX);

     console.log("left wrist x=" + left_wristX+ ",right wrist x =  " + right_wristX+ ",difference = " + difference);
     
    }

}
