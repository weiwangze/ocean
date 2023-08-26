Ocean.Define("Ocean.H5.BaseUtils",function(page,$,$I){
	
	this.ready = function(){
		
	};
	
	/**
	 * 移动目标到指定位置(指定元素,指定位置["20","50"])
	 */
	this.move = function(elements,point,transitionTime){
		var pointObj = analysiPoint(point);
		// 获取过渡时间
		if(!transitionTime){
			transitionTime = page.getConfig("Ocean.H5.transitionTime",2);
		}
		// 执行CSS指令
		elements.cssList({
			position:"absolute",
			transition:transitionTime + "s",
			left:pointObj["x"] + "px",
			top:pointObj["y"] + "px"
		});
		return elements;
	};
	
	$.fn.move = function(point,transitionTime){
		return page.move(this,point,transitionTime);
	};
	
	/**
	 * CSS使用对象形式赋值
	 */
	this.cssList = function(elements,cssObj){
		if(cssObj){
			elements = $(elements);
			$.each(cssObj,function(key,value){
				elements.css(key,value);
			});
		}
		return elements;
	};
	
	$.fn.cssList = function(cssObj){
		return page.cssList(this,cssObj);
	};
	
	/**
	 * 解析位置
	 */
	function analysiPoint(point){
		if(point && point[0]){
			return {x:point[0],y:point[1]};
		}else if(point && point["x"] && point["y"]){
			return point;
		}else if(point && point["X"] && point["Y"]){
			return {x:point["X"],y:point["Y"]};
		}
		return {x:0,y:0};
	}
	
},["Ocean.Util.Valid","Ocean.Util.Sequence","Ocean.Logs"]);