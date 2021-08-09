noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;


function setup(){
    video  = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+ noseX + "nose y = "+ noseY);

        leftwristX=results[0].pose.leftWrist.x;
      rightwristX=results[0].pose.rightWrist.x;
      difference =floor( leftwristX - rightwristX); 
      
      console.log("left wrist x = "+ leftwristX+"right wrist x = " + rightwristX + "difference = "+difference);
    }
}
function draw(){
    background('#666666');

    document.getElementById("squre_side").innerHTML = "Width and Height of a square will be "+difference+"px";
    fill('#000066');
    stroke('#000066');
    square(noseX,noseY,difference);
}


