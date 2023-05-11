prediction = "";
 ///https://teachablemachine.withgoogle.com/models/cmnYP8V9v////

Webcam.set({
  width: 350,
  height: 300,
  image_format: "png",
  png_quality: 90,
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function TakePhoto() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML =
      '<img id = "captured_img" src = "' + data_uri + '">';
  });
}

console.log(ml5.version);

classifier = ml5.imageClassifier(
  "https://teachablemachine.withgoogle.com/models/cmnYP8V9v/model.json", modelLoaded
);

function modelLoaded() {
  console.log("yes.");
}

function Check() {
    img = document.getElementById("captured_img");
  
    classifier.classify(img, gotResult);
  }

function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results); }

      document.getElementById("result_emotion_name").innerHTML = results[0].label;
      prediction = results[0].label;
      
      if (results[0].label = "Thumbs up") {
        document.getElementById("update_emoji").innerHTML = "👍";
      }
      if (results[0].label = "Thumbs down"){
        document.getElementById("update_emoji").innerHTML = "👎";
      }
      if (results[0].label = "Peace") {
        document.getElementById("update_emoji").innerHTML = "✌";
      }
      if (results[0].label = "Fist") {
        document.getElementById("update_emoji").innerHTML = "✊";
      }
      
    
    }
