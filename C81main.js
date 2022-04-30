canvas= document.getElementById("myCanvas")
ctx= canvas.getContext("2d")
color= "blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(300 , 210 , 45 , 0 , 2*Math.PI);
ctx.stroke();

color= "black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(400 , 210 , 45 , 0 , 2*Math.PI);
ctx.stroke();

color= "red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(500 , 210 , 45 , 0 , 2*Math.PI);
ctx.stroke();

color= "yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(350 , 275 , 45 , 0 , 2*Math.PI);
ctx.stroke();

color= "green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(452 , 275 , 45 , 0 , 2*Math.PI);
ctx.stroke();
