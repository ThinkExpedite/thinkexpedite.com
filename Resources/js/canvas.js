var   canvas = document.querySelector('canvas'),
ctx = canvas.getContext('2d'),
particles = [],
patriclesNum = 150,
  w = window.innerWidth,
  h = 400,
colors = ['#000','#1fa67a','#5c6360', '#fff'];

canvas.width = window.innerWidth;
canvas.height = 400;

function Factory(){  
this.x =  Math.round( Math.random() * w);
this.y =  Math.round( Math.random() * h);
this.rad = Math.round( Math.random() * 1) + 1;
this.rgba = colors[ Math.round( Math.random() * 3) ];
this.vx = Math.round( Math.random() * 2.2) - 1.5;
this.vy = Math.round( Math.random() * 2) - 1.5;
}

function draw(){
ctx.clearRect(0, 0, w, h);
ctx.globalCompositeOperation = 'lighter';
for(var i = 0;i < patriclesNum; i++){
var temp = particles[i];
var factor = 1;

for(var j = 0; j<patriclesNum; j++){

var temp2 = particles[j];
ctx.linewidth = 0.1;

if(temp.rgba == temp2.rgba && findDistance(temp, temp2)<100){
 ctx.strokeStyle = temp.rgba;
 ctx.beginPath();
 ctx.moveTo(temp.x, temp.y);
 ctx.lineTo(temp2.x, temp2.y);
 ctx.stroke();
 factor++;
}
}


ctx.fillStyle = temp.rgba;
ctx.strokeStyle = temp.rgba;

ctx.beginPath();
ctx.arc(temp.x, temp.y, temp.rad*factor, 0, Math.PI*2, true);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(temp.x, temp.y, (temp.rad+5)*factor, 0, Math.PI*2, true);
ctx.stroke();
ctx.closePath();


temp.x += temp.vx;
temp.y += temp.vy;

if(temp.x > w)temp.x = 0;
if(temp.x < 0)temp.x = w;
if(temp.y > h)temp.y = 0;
if(temp.y < 0)temp.y = h;
}
}

function findDistance(p1,p2){  
return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) );
}

window.requestAnimFrame = (function(){
return  window.requestAnimationFrame       ||
 window.webkitRequestAnimationFrame ||
 window.mozRequestAnimationFrame    ||
 function( callback ){
   window.setTimeout(callback, 500 / 60);
 };
})();

(function init(){
for(var i = 0; i < patriclesNum; i++){
particles.push(new Factory);
}
})();

(function loop(){
draw();
requestAnimFrame(loop);
})();




