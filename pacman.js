//Marcelo Aceituno R
//Ful Stack JAVA 0034 
var mundo = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 2, 0, 1, 3, 1, 0, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 0, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 0, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2],
    [2, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
    [2, 0, 2, 0, 1, 2, 1, 0, 0, 1, 0, 0, 1, 2, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 2, 1, 0, 1, 1, 1, 0, 1, 2, 1, 1, 2, 1, 2],
    [2, 0, 2, 0, 1, 2, 1, 4, 4, 0, 4, 4, 1, 2, 1, 1, 2, 1, 2],
    [2, 1, 2, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2],
    [2, 1, 1, 1, 1, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1, 1, 1, 1, 2],
    [2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 2],
    [2, 1, 2, 1, 0, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 0, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] 
    ];

var puntaje = 0;
var pacman = {
    x: 1,
    y: 1
};
    
function muestraMundo(){
    var mostrar = '';
    for (var i=0; i<mundo.length; i++){
        mostrar += "\n<div class='row'>\n";
        for (var j=0; j<mundo[i].length; j++){
            if (mundo[i][j] == 2){
                mostrar += "<div class='brick'></div>";
            }if (mundo[i][j] == 1){
                mostrar += "<div class='coin'></div>";
            }if (mundo[i][j] == 0){
                mostrar += "<div class='vacio'></div>";
            }if (mundo[i][j] == 3){
                mostrar += "<div class='cereza'></div>";
            }if (mundo[i][j] == 4){
                mostrar += "<div class='fantasma'></div>";
            }		
        }
    mostrar += "\n</div>"
    }			
console.log(mostrar);	
document.getElementById('mundo').innerHTML = mostrar;
}

function muestraPacman(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}

function muestraPuntaje(){
    document.getElementById('puntaje').innerHTML = puntaje;	
}

function muestraCereza(){
    document.getElementById('cereza').innerHTML = cereza;	
}

function rotate(value)	{
    document.getElementById('pacman').style.webkitTransform="rotate(" + value + "deg)";
    document.getElementById('pacman').style.msTransform="rotate(" + value + "deg)";
    document.getElementById('pacman').style.transform="rotate(" + value + "deg)";
}

muestraMundo();
muestraPacman();
muestraPuntaje();
    
document.onkeydown = function(e){

    if(e.keyCode == 37 && mundo[pacman.y][pacman.x-1] != 2){
        rotate(180);
        pacman.x--;
        
    }
    else if(e.keyCode == 39 && mundo[pacman.y][pacman.x+1] != 2){
        rotate(0);
        pacman.x++;
    }
    else if(e.keyCode == 38 && mundo[pacman.y-1][pacman.x] != 2){
        rotate(-90);
        pacman.y--;
    }
    else if(e.keyCode == 40 && mundo[pacman.y+1][pacman.x] != 2){
        rotate(90);
        pacman.y++;
    }

    if(mundo[pacman.y][pacman.x] == 1){
        mundo[pacman.y][pacman.x] = 0;
        puntaje+=10;
        muestraMundo();
        muestraPuntaje();
    }
    
    if(mundo[pacman.y][pacman.x] == 3){
        mundo[pacman.y][pacman.x] = 0;
        puntaje+=50;
        muestraMundo();
        muestraPuntaje();
    }
    muestraPacman();			
}

