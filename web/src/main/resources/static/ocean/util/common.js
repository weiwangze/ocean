Ocean.Define("Ocean.Util.Common",function(page,$){
	
	this.ready = function(){
		
	};
	
	this.getRandom = function(min,max){
		return Math.floor(Math.random() * (max - min) + min);
	};
	
});