// Detecting button press

var numberOfButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i<numberOfButtons; i ++) {
    document.querySelectorAll("button")[i].addEventListener("click" , function() {
       var buttonInner = this.innerHTML;
       
       makeSound(buttonInner);

       buttonAnimation(buttonInner);
    });
        
} 

// Detecting keyboard press ||||||
///                         \/\/\/


document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});
function makeSound(key) {
  switch (key) {
    case "i":
      var song1 = new Audio('audio/newyork_1.mp3') 
      song1.play(); 
      break;
    case "n":
        var tom2 = new Audio('audio/snare.mp3')
         tom2.play();
         break;
    case "g":
      var tom3 = new Audio('audio/snare.mp3') 
      tom3.play(); 
      break;
    case "e":
        var tom4 = new Audio('audio/snare.mp3')
          tom4.play();
          break; 
      case "l":
        var song2 = new Audio('audio/newyork_2.mp3')
          song2.play();
           break;  
      case "f":
          var kickBass = new Audio('audio/snare.mp3')    
          kickBass.play();
          break;
      case "k":
           var tom4 = new Audio('audio/snare.mp3')    
          tom4.play();
          break;
      case "s":
          var snare = new Audio('audio/snare.mp3')    
          snare.play();
          break;
      case "y":
          var song3 = new Audio('audio/newyork_3.mp3')    
          song3.play();
          break;                   
      

 
  default:console.log(buttonInner)
      break;
 }
}
function buttonAnimation(currentKey) {
 var activeButton = document.querySelector("." + currentKey);
    
 activeButton.classList.add("pressed")
 setTimeout(function(){
  activeButton.classList.remove("pressed")
},100);

}
// 
//