DOT3.RUN_MELOS.Ambivalence = function () {
	this._actionStore = [];
	this._actions = {
		"melosSlow": this.melosSlow,
		"melosVerySlow": this.melosVerySlow,
		"melosStop": this.melosStop,
		"melosDown": this.melosDown,
		"melosCry":this.melosCry,
		"ambivalence":this.ambivalence,
		"stopCry":this.stopCry,
		"melosSearchSpring":this.melosSearchSpring,
		"melosMeetSpring":this.melosMeetSpring,
		"melosCrouch":this.melosCrouch,
		"melosDrink":this.melosDrink,
		"melosWakeUp":this.melosWakeUp
	};
	this._timer;
	this._characters;
	this._bgMng;
};

DOT3.RUN_MELOS.Ambivalence.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.Ambivalence.prototype.initBG = function()
{
	this.reset();
	
	this._bgMng.scene("daytime");
	this._planet.show(5);
	this._bgMng.run();
	this._characters.melos.show("50%");
	this._characters.melos.be("run_tired_nude");
}

DOT3.RUN_MELOS.Ambivalence.prototype.melosSlow = function()
{
	/*事前アクション*/
	this._bgMng.scene("daytime","none");
	this._characters.melos.be("run_tired_nude");
	
	/*新規アクション*/
	this._bgMng.move(50);
}

DOT3.RUN_MELOS.Ambivalence.prototype.melosVerySlow = function()
{
	/*事前アクション*/
	this._bgMng.scene("daytime","none");
	this._characters.melos.be("run_tired_nude");
	
	/*新規アクション*/
	this._bgMng.move(25);
}

DOT3.RUN_MELOS.Ambivalence.prototype.melosStop = function()
{
	/*事前アクション*/
	this._bgMng.scene("daytime","none");
	this._bgMng.move(25);
	
	/*新規アクション*/
	this._bgMng.stop();
	this._characters.melos.be("knee");
}

DOT3.RUN_MELOS.Ambivalence.prototype.melosDown = function()
{
	/*事前アクション*/
	this._bgMng.scene("daytime","none");
	this._bgMng.stop();
	
	/*新規アクション*/
	this._characters.melos.be("down_nude");
}

DOT3.RUN_MELOS.Ambivalence.prototype.melosCry = function()
{
	/*事前アクション*/
	this._bgMng.scene("daytime","none");
	this._bgMng.stop();
	
	/*新規アクション*/
	this._characters.melos.be("cry");
}

DOT3.RUN_MELOS.Ambivalence.prototype.ambivalence = function()
{
	/*事前アクション*/
	this._bgMng.stop();
	this._characters.melos.be("cry");
	
	/*新規アクション*/
	this._bgMng.scene("dark");
}

DOT3.RUN_MELOS.Ambivalence.prototype.stopCry = function()
{
	/*事前アクション*/
	this._bgMng.stop();
	
	/*新規アクション*/
	this._bgMng.scene("dark", "none");
	this._characters.melos.be("down_nude");
}

DOT3.RUN_MELOS.Ambivalence.prototype.melosSearchSpring = function()
{
	/*事前アクション*/
	this._bgMng.stop();
	this._characters.spring.hide();
	
	/*新規アクション*/
	this._bgMng.scene("dark", "none");
	this._characters.melos.be("walk_tired_nude");
}

DOT3.RUN_MELOS.Ambivalence.prototype.melosMeetSpring = function()
{
	/*事前アクション*/
	this._bgMng.stop();
	
	/*新規アクション*/
	this._bgMng.scene("dark", "none");
	this._characters.melos.be("stand_tired_nude");
	this._characters.spring.fadeIn();
	this._characters.spring.show("30%", 10);
	this._characters.spring.moveTo("35%",10,3);
}

DOT3.RUN_MELOS.Ambivalence.prototype.melosCrouch = function()
{
	/*事前アクション*/
	this._bgMng.stop();
	
	/*新規アクション*/
	this._bgMng.scene("dark", "none");
	this._characters.spring.show("35%", 10);
	this._characters.melos.be("knee");
}

DOT3.RUN_MELOS.Ambivalence.prototype.melosDrink = function()
{
	/*事前アクション*/
	this._bgMng.stop();
	this._planet.show(5);
	
	/*新規アクション*/
	this._bgMng.scene("dark");
	this._characters.spring.show("35%", 10);
	this._characters.melos.be("drink");
}

DOT3.RUN_MELOS.Ambivalence.prototype.melosWakeUp = function()
{
	/*事前アクション*/
	this._bgMng.stop();
	
	/*新規アクション*/
	this._bgMng.scene("sunset");
	this._planet.show(50);
	this._characters.spring.show("35%", 10);
	this._characters.melos.be("stand_seminude");
}

DOT3.RUN_MELOS.SCENES["ambivalence"] = new DOT3.RUN_MELOS.Ambivalence();