DOT3.RUN_MELOS.MelosRunAgain = function () {
	this._actionStore = [];
	this._actions = {
		"runMelos": this.runMelos,
		"drawIn":this.drawIn,
		"deepSunset":this.deepSunset,
		"blackWind":this.blackWind,
		"beforeNight":this.beforeNight
	};
	this._timer;
	this._characters;
	this._bgMng;
};

DOT3.RUN_MELOS.MelosRunAgain.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.MelosRunAgain.prototype.initBG = function()
{
	this.reset();
	
	this._bgMng.scene("sunset");
	this._bgMng.stop();
	this._planet.show(50);
	this._characters.spring.show("35%", 10);
	this._characters.melos.show();
	this._characters.melos.be("stand_nude");
}

DOT3.RUN_MELOS.MelosRunAgain.prototype.runMelos = function()
{
	/*事前アクション*/
	this._bgMng.scene("sunset", "none");
	this._bgMng.run();
	this._planet.show(50);
	this._characters.spring.show("35%", 10);
	this._characters.melos.show();
	this._characters.melos.be("stand_nude");
	
	/*新規アクション*/
	this._characters.spring.moveTo("110%", 10, 4, "linear");
	this._characters.melos.be("run_nude");
}

DOT3.RUN_MELOS.MelosRunAgain.prototype.drawIn = function()
{
	/*事前アクション*/
	this._bgMng.scene("sunset", "none");
	this._bgMng.run();
	this._planet.show(50);
	this._characters.melos.show();
	this._characters.melos.be("run_nude");
	
	/*新規アクション*/
	this._planet.moveTo(60, 10);
	this._characters.spring.hide();
}

DOT3.RUN_MELOS.MelosRunAgain.prototype.deepSunset = function()
{
	/*事前アクション*/
	this._planet.show(50);
	this._characters.spring.hide();
	this._characters.melos.show();
	this._characters.melos.be("run_nude");
	
	/*新規アクション*/
	this._bgMng.scene("deepSunset");
	this._bgMng.run();
	this._planet.moveTo(60, 10);
}

DOT3.RUN_MELOS.MelosRunAgain.prototype.blackWind = function()
{
	/*事前アクション*/
	this._characters.spring.hide();
	this._characters.melos.show();
	this._characters.melos.be("run_nude");
	
	/*新規アクション*/
	this._bgMng.scene("deepSunset", "none");
	this._bgMng.move(180);
	this._planet.moveTo(60, 10);
	
	this._characters.melos.be("dash");
}

DOT3.RUN_MELOS.MelosRunAgain.prototype.beforeNight = function()
{
	/*事前アクション*/
	this._characters.spring.hide();
	this._characters.melos.be("dash");
	
	/*新規アクション*/
	this._bgMng.scene("beforeNight");
	this._bgMng.move(230);
	this._planet.moveTo(63,5);
}

DOT3.RUN_MELOS.SCENES["melosRunAgain"] = new DOT3.RUN_MELOS.MelosRunAgain();