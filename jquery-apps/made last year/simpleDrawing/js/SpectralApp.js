$canvas.mousedown(funciton(e){
	lastEvent = e;
}).mousemove(function(e){
	context.beginPath();
	context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
	context.lineTo(e.offsetX, e.offsetY);
	context.sstroke();
});
