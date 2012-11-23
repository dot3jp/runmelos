DOT3.RUN_MELOS.Wedding = function () {
	this._actionStore = [];
	this._actions = {
		"rainComes": this.rainComes,
		"nightComes":this.nightComes,
		"near":this.near,
		"darkOut":this.darkOut
	};
	this._timer;
	this._characters;
	this._bgMng;
};

DOT3.RUN_MELOS.Wedding.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.Wedding.prototype.initBG = function()
{
	this.reset();
	
	this._bgMng.scene("daytime");
	this._bgMng.stop();
	
	this._characters.mukoHouse.show();
	
	this._characters.murabito.fadeIn();
	this._characters.melos.show("65%");
	this._characters.sister.show("52%");
	this._characters.muko.show("48%");
	this._characters.murabito.show("50%", 10);
	
	this._characters.melos.be("stand");
	this._characters.sister.be("wedding");
	this._characters.muko.be("wedding_normal");
	
	this._planet.show(-5);
}

DOT3.RUN_MELOS.Wedding.prototype.rainComes = function()
{
	/*事前アクション*/
	this._characters.mukoHouse.show();
	this._characters.murabito.show("50%", 10);
	this._characters.melos.show("65%");
	this._characters.sister.show("52%");
	this._characters.muko.show("48%");
	this._characters.melos.be("stand");
	this._characters.sister.be("wedding");
	this._characters.muko.be("wedding_normal");
	this._bgMng.stop();
	
	/*新規アクション*/
	this._bgMng.scene("rainy");
}

DOT3.RUN_MELOS.Wedding.prototype.nightComes = function()
{
	/*事前アクション*/
	this._characters.mukoHouse.show();
	this._characters.murabito.show("50%", 10);
	this._characters.melos.show("65%");
	this._characters.sister.show("52%");
	this._characters.muko.show("48%");
	this._characters.melos.be("stand");
	this._characters.sister.be("wedding");
	this._characters.muko.be("wedding_normal");
	this._bgMng.stop();
	
	/*新規アクション*/
	this._bgMng.scene("rainyNight");
	this._characters.muko.be("wedding_shy");
}

DOT3.RUN_MELOS.Wedding.prototype.near = function()
{
	/*事前アクション*/
	this._characters.mukoHouse.show();
	this._characters.murabito.show("50%", 10);
	this._characters.melos.show("65%");
	this._characters.sister.show("52%");
	this._characters.muko.show("48%");
	this._characters.melos.be("stand");
	this._characters.sister.be("wedding");
	this._characters.muko.be("wedding_shy");
	this._bgMng.scene("rainyNight","none");
	this._bgMng.stop();
	
	/*新規アクション*/
	this._characters.melos.moveTo("58%");
}

DOT3.RUN_MELOS.Wedding.prototype.darkOut = function()
{
	/*事前アクション*/
	this._characters.mukoHouse.show();
	this._characters.murabito.show("50%", 10);
	this._characters.melos.show("58%");
	this._characters.sister.show("52%");
	this._characters.muko.show("48%");
	this._characters.melos.be("stand");
	this._characters.sister.be("wedding");
	this._characters.muko.be("wedding_shy");
	this._bgMng.stop();
	
	/*新規アクション*/
	this._bgMng.scene("dark");
	this._characters.melos.fadeOut();
	this._characters.sister.fadeOut();
	this._characters.muko.fadeOut();
	this._characters.murabito.fadeOut();
	this._characters.mukoHouse.fadeOut();
}

DOT3.RUN_MELOS.SCENES["wedding"] = new DOT3.RUN_MELOS.Wedding();