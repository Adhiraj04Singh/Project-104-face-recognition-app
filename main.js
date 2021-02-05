Webcam.set({
    width: 350,
    height: 250,
    image_format: "png",
    png_quality: 90
})
var webcam_show = document.getElementById("webcam_preview");
Webcam.attach(webcam_show);

function take_snap_shot() {
    Webcam.snap(function take_snap(data_url) {
        document.getElementById("img").innerHTML = "<img id='img_result' src='" + data_url + "'>"
    });
}
console.log("ml5 is", ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hXvdfW1bJ/model.json", modelLoaded);
function modelLodded() {
    console.log("Model Has Been Loaded");
}