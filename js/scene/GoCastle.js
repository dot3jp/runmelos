DOT3.RUN_MELOS.GoCastle = function () {
	this._actionStore = [];
	this._actions = {
		"melosWakeup": this.melosWakeup,
		"runMelos":this.runMelos,
		"goInForest":this.goInForest,
		"goOutForest":this.goOutForest,
		"melosWalk":this.melosWalk,
		"timeGoes":this.timeGoes,
		"darkOut":this.darkOut
	};
	this._timer;
	this._characters;
	this._bgMng;
};

DOT3.RUN_MELOS.GoCastle.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.GoCastle.prototype.initBG = function()
{
	this.reset();
	
	this._bgMng.scene("morning");
	this._bgMng.stop();
	this._planet.show(-55);
	
	this._characters.melos.show()
	this._characters.melos.be("down");
	
	this._characters.melosHouse.show();
}

DOT3.RUN_MELOS.GoCastle.prototype.melosWakeup = function()
{
	/*事前アクション*/
	this._bgMng.scene("morning","none");
	this._bgMng.stop();
	this._planet.show(-55);
	this._characters.melosHouse.show();
	this._characters.melos.be("down");
	
	/*新規アクション*/
	this._characters.melos.be("stand");
}

DOT3.RUN_MELOS.GoCastle.prototype.runMelos = function()
{
	/*事前アクション*/
	this._bgMng.scene("morning","none");
	this._bgMng.stop();
	this._planet.show(-55);
	
	/*新規アクション*/
	this._bgMng.run();
	this._characters.melos.be("run");
	this._characters.melosHouse.moveTo("150%", 0, 4, "linear");
}

DOT3.RUN_MELOS.GoCastle.prototype.goInForest = function()
{
	/*事前アクション*/
	this._bgMng.run();
	this._characters.melos.be("run");
	this._characters.melosHouse.hide();
	
	/*新規アクション*/
	this._bgMng.scene("forest");
	this._planet.moveTo(-50);
	
	this._characters.melosHouse.hide();
}

DOT3.RUN_MELOS.GoCastle.prototype.goOutForest = function()
{
	/*事前アクション*/
	this._bgMng.run();
	this._planet.show(-50);
	this._characters.melos.be("run");
	this._characters.melosHouse.hide();
	
	/*新規アクション*/
	this._bgMng.scene("daytime");
	this._planet.show(-20);
}

DOT3.RUN_MELOS.GoCastle.prototype.melosWalk = function()
{
	/*事前アクション*/
	this._bgMng.scene("daytime", "none");
	this._bgMng.run();
	this._planet.show(-20);
	this._characters.melos.be("run");
	this._characters.melosHouse.hide();
	
	/*新規アクション*/
	this._bgMng.walk();
	this._characters.melos.be("walk");
}

DOT3.RUN_MELOS.GoCastle.prototype.timeGoes = function()
{
	/*事前アクション*/
	this._bgMng.scene("daytime", "none");
	this._bgMng.walk();
	this._planet.show(-20);
	this._characters.melos.be("walk");
	this._characters.melosHouse.hide();
	
	/*新規アクション*/
	this._planet.moveTo(-10, 3)
}

DOT3.RUN_MELOS.GoCastle.prototype.darkOut = function()
{
	/*事前アクション*/
	this._bgMng.scene("daytime", "none");
	this._planet.show(-10)
	this._characters.melosHouse.hide();
	
	/*新規アクション*/
	this._bgMng.scene("dark");
	this._bgMng.stop();
	this._characters.melos.be("stand");
	this._characters.melos.fadeOut();
}

DOT3.RUN_MELOS.SCENES["goCastle"] = new DOT3.RUN_MELOS.GoCastle();