DOT3.RUN_MELOS.Scene = function () {
	this._actionStore = [];
	this._actions = {};
	this._timer;
	this._characters;
	this._bgMng;
	this._planet;
	this._modal;
	
	/*継承先にて定義。{data-action名:実行関数}*/
	//this._actions = {"sampleAction":this.sampleFnc};
};

DOT3.RUN_MELOS.Scene.prototype = 
{
	init:function(characters, bgManager, target, planet, modal)
	{
		var o = this;
		
		this._characters = characters;
		this._bgMng = bgManager;
		this._planet = planet;
		this._modal = modal;
		this.initBG()
		
        var totalW = $("#docWrap").width()// - $("#title").width();
		var wrapX = $("#docWrap").offset().left + totalW;
		var adjW = totalW -  $("#title").width()/2;
		
		/* 現在の.sectionにおける.action及びその開始位置、終了位置（次actionの開始位置まで）の習得 */
        $(target).children(".action").each(function(i)
        {
			var left = $(this).offset().left - wrapX;
			var $targetAction = $(target).children(".action");
			var nextX = ($targetAction.eq(i+1).length)? $targetAction.eq(i+1).offset().left+$targetAction.eq(i+1).width()-wrapX : $(target).offset().left-wrapX;
			o._actionStore.push({name:$(this).attr("data-action"), sx:-(left+$(this).width()), ex:-(nextX)});
		});
		
		/* 各.actionが画面左端を通過したかをチェック */
		var oldAction = "";
        this._timer = setInterval(function()
		{

            var currentWrapX = $("#docWrap").offset().left + adjW;
            $(o._actionStore).each(function(i)
			{
                if(currentWrapX >= this.sx && this.ex > currentWrapX )
                {
					var actionName = this.name;
					if(oldAction != actionName)
					{
						//console.log(actionName)
						//localStorageに$("#docWrap").offset().leftをセット
						window.localStorage['dot3runmelos'] = JSON.stringify({'docX':$("#docWrap").offset().left});
						o._actions[actionName].call(o)
						oldAction = actionName;
					}
                }
            })
		},500);
	},
	
	clear:function()
	{
		clearInterval(this._timer);
	},
	
	reset:function()
	{
		for(var p in this._characters)
		{
			this._characters[p].hide();
		}
	},
	
	initBG:function()
	{
		/*シーン開始直後に表示したい場合の処理*/
		/*継承先にて実装*/
	}/*,
	
	//data-actionに紐づいた実行関数
	sampleFnc:function()
	{
		console.log("sampleFnc")
	}*/
};

/*SCENES[]にdeta-sceneNameに該当する文字列、代入元にScene子オブジェクトをnewする*/
//DOT3.RUN_MELOS.SCENES["scene1"] =  new DOT3.RUN_MELOS.Scene();
