function preload(){

}
function setup(){
   canvas= createCanvas (300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-HaKEHJw2/model.json', modelLoaded)
}
function draw(){
   image(video, 0, 0, 400, 400);
   classifier.classify(video, show);
}
function modelLoaded(){
   console.log('model loaded');
}
function show(error, results){
   if (error){
      console.log(error);
   } else {
      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(2);
      console.log(results);
   }
}