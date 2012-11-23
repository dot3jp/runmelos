DOT3.RUN_MELOS.SceneManager = function(characters, bgManager, planet, modal)
{
	this._sectionStore = []; 
	this._sceneStore = DOT3.RUN_MELOS.SCENES;
	this._characters = characters;
	this._bgMng = bgManager;
	this._planet = planet;
	this._modal = modal;
	this.init();
};

DOT3.RUN_MELOS.SceneManager.prototype = 
{
    init: function()
    {
		var o = this;
        
        var totalW = $("#docWrap").width() //- $("#title").width();
        var wrapX = $("#docWrap").offset().left + totalW;
		var adjW = totalW -  $("#title").width()/2;
		
		/* 全.sectionの各位置、幅の取得 */
        $(".section").each(function()
        {
            var left = $(this).offset().left - wrapX;
			o._sectionStore.push({target:this, name:$(this).attr("data-scenename"), sx:-(left+$(this).width()), ex:-(left)});
		});
		
		/* 各.sectionが画面左端を通過したかをチェック */
		var oldScene;
        setInterval(function()
        {
			var currentWrapX = $("#docWrap").offset().left + adjW;
            $(o._sectionStore).each(function()
            {
                if(currentWrapX >= this.sx && this.ex > currentWrapX)
				{
					var target = this.target;
					var sceneName = this.name;
					
					if(oldScene != sceneName)
					{
						/*$(o._sceneStore).each(function(i)
						{
							if(this.name == sceneName)
							{
								if(oldScene.obj)oldScene.obj.clear.call(oldScene.obj);
								this.obj.init(o._characters, o._bgMng, target, {w:totalW, x:wrapX});
								
								oldScene = {name:sceneName, obj:this.obj};
							}
						});*/
						if(oldScene){o._sceneStore[oldScene].clear();}
						window.localStorage['dot3runmelos'] = JSON.stringify({'docX':$("#docWrap").offset().left});
						o._sceneStore[sceneName].init(o._characters, o._bgMng, target, o._planet, o._modal);
						oldScene = sceneName
					}	
                }
            })
        },500);
    }
}

