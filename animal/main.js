function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KvGUpKzGd/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(){
if (error) {
    console.error(error);
}else{
console.log(results);
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;

document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

img = document.getElementById('dog')
img1 = document.getElementById('cat')
img2 = document.getElementById('bear')
img3 = document.getElementById('cow')

if (results[0].label == "bark") {
    img.src = 'dog.gif';
    img1.src = 'cat.png';
    img2.src = 'bear.png';
    img3.src = 'cow.png';
}else if (results [0].label == "meow") {
    img.src = 'dog.png';
    img1.src = 'cat.gif';
    img2.src = 'bear.png';
    img3.src = 'cow.png';
}else if (results [0].label == "roar"){
    img.src = 'dog.png';
    img1.src = 'cat.png';
    img2.src = 'bear.gif';
    img3.src = 'cow.png';
}else if (results [0].label == "moo"){
    img.src = 'dog.png';
    img1.src = 'cat.png';
    img2.src = 'bear.png';
    img3.src = 'cow.gif';
}else{
    img.src = 'dog.png';
    img1.src = 'cat.png';
    img2.src = 'bear.png';
    img3.src = 'cow.png';
}
}
}