var led = function() {
	this.colors = ["#2ecc71", 
	"#e74c3c", 
	"#f1c40f", 
	"#9b59b6",
	"#3498db",
	"#e67e22"];
	this.StartBlinking();
}

led.prototype.RandomColor  = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

led.prototype.StartBlinking = function (){
	var that = this;
	setInterval(function() {

    $('.led').css( "background-color", 
    	that.colors[that.RandomColor(0,that.colors.length)]);

}, 100); //Aqui se modifica el valor de refresco
	
}

$(function () {
	led = new led();
});