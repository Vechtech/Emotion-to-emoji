p_1 = "";
p_2 = "";
Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function capture(){
Webcam.snap(function(uri){
    document.getElementById("result").innerHTML = "<img id='selfie' src='" + uri + "'>";
})
}
console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Z7x6IMrpx/model.json",modelLoaded);

function modelLoaded(){
console.log("Model loaded");    
}

function speak(){

var synth = window.speechSynthesis;
speak_data_1 = "The first prediction is " + p_1;
speak_data_2 = "And the second prediction is " + p_2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
utterThis.rate = 0.5;
synth.speak(utterThis);

}