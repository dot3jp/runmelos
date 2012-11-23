DOT3.RUN_MELOS.River = function () {
	this._actionStore = [];
	this._actions = {
		"showRiver": this.showRiver,
		"melosPray":this.melosPray,
		"melosResolve":this.melosResolve,
		"swimStart":this.swimStart,
		"gotoRiver":this.gotoRiver,
		"darkOut":this.darkOut,
		"swimEnd":this.swimEnd,
		"leaveRiver":this.leaveRiver
	};
	this._timer;
	this._characters;
	this._bgMng;
};

DOT3.RUN_MELOS.River.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.River.prototype.initBG = function()
{
	this.reset();
	
	this._bgMng.scene("dark");
	this._bgMng.stop();
	this._planet.show(-10);
	//this._characters.melosHouse.hide();
}

DOT3.RUN_MELOS.River.prototype.showRiver = function()
{
	/*事前アクション*/
	
	/*新規アクション*/
	this._bgMng.scene("daytime");
	
	this._characters.melos.show("80%");
	this._characters.melos.be("stand");
	this._characters.river.show("0%");
}

DOT3.RUN_MELOS.River.prototype.melosPray = function()
{
	/*事前アクション*/
	this._bgMng.scene("daytime", "none");
	this._characters.melos.show("80%");
	this._characters.river.show("0%");
	
	/*新規アクション*/
	this._characters.melos.be("lookup");
}

DOT3.RUN_MELOS.River.prototype.melosResolve = function()
{
	/*事前アクション*/
	this._bgMng.scene("daytime", "none");
	this._characters.melos.show("80%");
	this._characters.river.show("0%");
	
	/*新規アクション*/
	this._characters.melos.be("stand");
}

DOT3.RUN_MELOS.River.prototype.gotoRiver = function()
{
	/*事前アクション*/
	//this._bgMng.scene("daytime");
	this._characters.melos.show("80%");
	this._characters.river.show("0%");
	
	/*新規アクション*/
	this._bgMng.scene("dark");
	this._characters.melos.be("run");
	this._characters.melos.moveTo("75%");
	this._characters.melos.fadeOut();
	this._characters.river.fadeOut();
}

DOT3.RUN_MELOS.River.prototype.swimStart = function()
{
	/*事前アクション*/
	
	/*新規アクション*/
	this._bgMng.scene("daytime");
	
	this._characters.melos.fadeIn("80%", -50);
	this._characters.melos.moveTo("15%", -50, 40);
	this._characters.melos.be("run");
	
	this._characters.river.fadeIn("50%",0,0.1);
	this._characters.river.show("50%");
}

DOT3.RUN_MELOS.River.prototype.darkOut = function()
{
	/*事前アクション*/
	//this._characters.melos.moveTo("15%", -50, 40);
	//this._characters.melos.be("run");
	this._characters.river.show("50%");
	
	/*新規アクション*/
	this._bgMng.scene("dark");
	this._characters.melos.hide();
	this._characters.river.hide();
}

DOT3.RUN_MELOS.River.prototype.swimEnd = function()
{
	/*事前アクション*/
	this._bgMng.scene("daytime");
	this._bgMng.stop();
	this._planet.show(5);
	
	/*新規アクション*/
	this._characters.melos.show("20%");
	this._characters.melos.be("tired_nude");
	this._characters.river.show("100%");
}

DOT3.RUN_MELOS.River.prototype.leaveRiver = function()
{
	/*事前アクション*/
	this._characters.melos.show("20%");
	this._planet.show(5);
	this._characters.river.show("100%");
	this._characters.melos.be("tired_nude");
	
	/*新規アクション*/
	this._bgMng.scene("daytime", "none");
	this._bgMng.run();
	this._characters.melos.moveTo("50%",0,5);
	this._characters.melos.be("run_tired_nude");
	this._characters.river.fadeOut();
	this._characters.river.show("100%");
	this._characters.river.moveTo("200%",0,10);
}

DOT3.RUN_MELOS.SCENES["river"] = new DOT3.RUN_MELOS.River();