
prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera= document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(dataurl){
        document.getElementById("result").innerHTML='<img id="pic" src="'+dataurl+'"/>';
    });
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3gRQo6QdQ/model.json",modelloaded);

function modelloaded(){
    console.log("model is loaded");
}
