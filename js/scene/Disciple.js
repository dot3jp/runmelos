DOT3.RUN_MELOS.Disciple = function () {
	this._actionStore = [];
	this._actions = {
		"showFirostratos": this.showFirostratos,
		"moreDush":this.moreDush,
		"sunGoesDown":this.sunGoesDown,
		"darkOut":this.darkOut
	};
	this._timer;
	this._characters;
	this._bgMng;
};

DOT3.RUN_MELOS.Disciple.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.Disciple.prototype.initBG = function()
{
	this.reset();
	
	this._bgMng.scene("downtownBeforeNight");
	this._bgMng.move(230);
	this._planet.show(63);
	
	this._characters.melos.show();
	this._characters.melos.be("dash");
}

DOT3.RUN_MELOS.Disciple.prototype.showFirostratos = function()
{
	/*事前アクション*/
	this._bgMng.move(230);
	this._characters.melos.show();
	this._characters.melos.be("dash");
	this._characters.firostratos.hide();
	
	/*新規アクション*/
	this._characters.firostratos.show("110%");
	this._characters.firostratos.moveTo("80%",0,4);
}

DOT3.RUN_MELOS.Disciple.prototype.moreDush = function()
{
	/*事前アクション*/
	this._bgMng.move(230);
	this._characters.melos.show();
	this._characters.melos.be("dash");
	
	/*新規アクション*/
	this._bgMng.move(290);
	this._characters.firostratos.show("80%");
	this._characters.firostratos.moveTo("110%",0,4);
}

DOT3.RUN_MELOS.Disciple.prototype.sunGoesDown = function()
{
	/*事前アクション*/
	this._bgMng.move(290);
	this._characters.melos.show();
	this._characters.melos.be("dash");
	
	/*新規アクション*/
	this._planet.moveTo(66, 5);
	this._characters.firostratos.hide();
}

DOT3.RUN_MELOS.Disciple.prototype.darkOut = function()
{
	/*事前アクション*/
	this._bgMng.move(290);
	this._characters.melos.show();
	this._characters.melos.be("dash");
	
	/*新規アクション*/
	this._bgMng.scene("dark");
	this._planet.moveTo(66, 5);
	this._characters.melos.moveTo("20%",0,3);
	this._characters.melos.fadeOut();
}

DOT3.RUN_MELOS.SCENES["disciple"] = new DOT3.RUN_MELOS.Disciple();