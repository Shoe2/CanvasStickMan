//set up
var x = 500;
var y = 250;
var a_canvas = document.getElementById("gameCanvas");
var context = a_canvas.getContext("2d"); 

context.clearRect(0,0,1000,700);

function stickManSprite(x, y) {

context.clearRect(0,0,1000,700);

// Draw the face
context.beginPath();
    context.arc(10+x,8+y,5,0,Math.PI*2,true); 
     context.fillStyle = 'white';
     context.fill();
    // Outer circle
    context.moveTo(13+x,8+y);
    // Mouth
    context.arc(10+x,8+y,3,0,Math.PI,false);
    //body arms and legs   
    context.moveTo(10+x,13+y);
    context.lineTo(10+x,20+y);
    context.lineTo(6+x, 25+y);
    context.lineTo(10+x,20+y);
    context.lineTo(14+x, 25+y);
    context.lineTo(10+x,20+y);
    context.lineTo(10+x,30+y);
    context.lineTo(8+x, 45+y);
    context.moveTo(12+x, 45+y);
    context.lineTo(10+x,30+y);
    context.stroke();
    
    //Eyes
    context.beginPath();
    context.arc(8+x,6+y,1,0,Math.PI*2,true);// Left eye
    context.moveTo(9+x,6+y);
    context.arc(12+x,6+y,1,0,Math.PI*2,true);  // Right eye
    context.fillStyle = 'red';
    context.fill();
}
stickManSprite(x, y);

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        if(x>6){
        x-=3;
        stickManSprite(x, y);
        }
        break;

        case 38: // up
        if(y>12){
        y-=3;
        stickManSprite(x, y);
        }
        break;

        case 39: // right
        if(x<978){
        x+=3;
        stickManSprite(x, y);
        }
        break;

        case 40: // down
        if(y<700){
        y+=3;
        stickManSprite(x, y);
        }
        break;
        
        case 32: //spacebar
            for (var c = 0; c<1000-(x+12) ; c++){
                context.beginPath();
                context.arc(8+x+c,6+y,1,0,Math.PI*2,true);
                context.moveTo(9+x+c,6+y);
                context.arc(12+x+c,6+y,1,0,Math.PI*2,true);
                context.fillStyle = 'red';
                context.fill();
            }
            $(document).keyup(function() {
              
        stickManSprite(x, y);

        });
        break;
        default: return; // exit this handler for other keys
    }
    
    e.preventDefault(); // prevent the default action (scroll / move caret)
    
});
