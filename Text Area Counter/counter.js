
var el;                                                    

function countCharacters(e) {                                    
  var textEntered, countRemaining, counter,textTweet; 

  textEntered = document.getElementById('tweet').value;  

  textTweet = document.getElementById('tweet');

  counter = (140 - (textEntered.length));

  countRemaining = document.getElementById('charactersRemaining'); 

  countRemaining.textContent = counter;
  
  if(counter<0){
      
      textTweet.style.backgroundColor = "red"
  } else{
    textTweet.style.backgroundColor = "white"
  }     
}
el = document.getElementById('tweet');                   
el.addEventListener('keyup', countCharacters, false);