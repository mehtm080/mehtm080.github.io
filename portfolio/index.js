 function ran_col() { //function name
                var color = '#'; // hexadecimal starting symbol
                var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
                color += letters[Math.floor(Math.random() * letters.length)];
                document.getElementById('posts').style.rectangle = color; // Setting the random color on your div element.
            }
            
 $(".typography").hover(function() {
  console.log("test");
  $("#fontspecimen").toggle();
})