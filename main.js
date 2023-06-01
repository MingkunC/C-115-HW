
noseX = 0;
noseY = 0;

function preload()
{
    mustache = loadImage('mustache-silhouette-17.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Pose Net is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    fill(250, 0, 0,);
    stroke(250, 0, 0,);
    image(mustache, noseX - 45, noseY - 15, 100, 50);
}

function take_img()
{
    save('MyMustacheImage.png')
}