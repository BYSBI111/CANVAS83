var ultima_posicion_x;
var ultima_posicion_y;
var actual_posicion_x;
var actual_posicion_y;

var lienzo = document.getElementById("myCanvas");
var ctx = lienzo.getContext("2d");
var color = "black";
var ancho_linea = 1;
var ancho_pantalla = screen.width;
var nuevo_ancho= screen.width - 70;
var nuevo_alto= screen.height - 300;

   if (ancho_pantalla<992) {
    lienzo.width=nuevo_ancho;
    lienzo.height=nuevo_alto;
    document.body.style.overflow="hidden";

   }
    
lienzo.addEventListener("touchstart",trazo);
    function trazo(e)
    {
        ultima_posicion_x = e.touches[0].clientX - lienzo.offsetLeft;
        ultima_posicion_y = e.touches[0].clientY - lienzo.offsetTop;

    }

lienzo.addEventListener("touchmove",trasmove);
    function trasmove(e)
    {
        actual_posicion_x= e.touches[0].clientX - lienzo.offsetLeft;
        actual_posicion_y= e.touches[0].clientY - lienzo.offsetTop;
        
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = ancho_linea;
    
            ctx.moveTo(ultima_posicion_x, ultima_posicion_y);
        
            ctx.lineTo(actual_posicion_x, actual_posicion_y);
            ctx.stroke();
            ultima_posicion_x = actual_posicion_x; 
            ultima_posicion_y = actual_posicion_y;
     }