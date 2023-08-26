Ocean.Define("Ocean.Audio",function(page,$,$I){
	
	// Audio组件HTML
	var oceanAudios = $("#ocean_audios");
	
	// 播放组件列表
	this.audioList = [];
	
	this.ready = function(){
		// 获取当前页面隐藏的HTML点
		var oceanMain = $("#ocean_main");
		
		// 开辟Audio专属空间
		oceanMain.append('<div id="ocean_audios"></div>');
	};
	
	
	
	// 创建播放音乐组件
	this.creates = function(name){
		
		// 如果没有给名字,则给予默认名称
		if($I.isNull(name)){
			name = $I.next("ocean_audio");
		}
		
		if(isExists(name,this.audioList,"name")){
			$I.print("当前播放器名称(" + name + ")已经存在,无法创建","e");
			return;
		}
		
		// 创建播放器
		var audio = {
			name:name,
			status:"ready",
			// 开始播放
			play:function(){
				
			},
			// 暂停播放
			suspend:function(){
				
			},
			// 停止播放
			stop:function(){
				
			},
			// 移除
			remove:function(){
				
			}
		};
		// 加入到播放器列表
		audioList.push(audio);
		// 返回当前播放器对象
		return audio;
	};
	
	// 删除/移除当前播放音乐组件
	this.deletes = function(){
		
	};
	
	// 播放当前音乐组件
	this.play = function(){
		
	};
	
	// 获取音频对象
	this.getAudio = function(name){
		if($I.isNull(name)){
			return null;
		}
		return getListOne(this.audioList,{"name":name});
	};
	
},["Ocean.Util.Valid","Ocean.Util.Sequence","Ocean.Logs"]);