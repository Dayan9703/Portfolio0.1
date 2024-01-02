const logo = document.querySelectorAll("#logo-name path");
var animationLength = 2;
var animationDelay = 0.3;

for(let i = 0; i < logo.length; i++){
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  var path = logo[i],
  length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length; 
  path.style.display = "block";
  path.style.animation = "line-anim " + animationLength + "s ease forwards " + animationDelay * i + "s";
  setTimeout( fixStroke.bind(undefined, path) , (i*animationDelay + animationLength)*1000);
}

function fixStroke(path){
  path.style.strokeDasharray = 0;
}