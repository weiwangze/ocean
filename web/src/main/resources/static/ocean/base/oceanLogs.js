Ocean.Define("Ocean.Logs",function(page,$,$I){
	
	this.ready = function(){
		
	};
	
	// 打印方法
	this.print = function(text,type){
		// 判断是否开启打印开关
		if(!this.flag){
			return;
		}
		if($I.isNull(text)){
			return ;
		}
		if($I.isNull(type)){
			type = "info";
		}
		if(!$I.is(type,["info","error","log","i","e","l"])){
			return;
		}
		// 如果是简写,自动转换
		if($I.is(type,["i","e","l"])){
			if(type == "i"){
				type = "info";
			}
			if(type == "e"){
				type = "error";
			}
			if(type == "l"){
				type = "log";
			}
		}
		// 打印
		console[type](text);
		
		// 计算保留的历史日志
		if(this.historyPrintCount){
			// 历史记录的打印数不能超过10W
			if(this.historyPrintCount > 100000){
				this.historyPrintCount = 100000;
			}
			if(this.historyPrintCount > 0){
				if(!this.LogHistoryPrint){
					this.LogHistoryPrint = [];
				}
				// 超过数量则重置
				if(this.LogHistoryPrint.length > this.historyPrintCount){
					this.LogHistoryPrint = [];
				}
				// 打印后记录
				var objLog = {};
				objLog["printText"] = text;
				objLog["printType"] = type;
				this.LogHistoryPrint.push(objLog);
			}
		}
	};
	
},["Ocean.Util.Valid"]);