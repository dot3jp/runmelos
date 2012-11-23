DOT3.RUN_MELOS.Castle = function () {
	this._actionStore = [];
	this._actions = {
		"sceneStart": this.sceneStart,
		"showCastle": this.showCastle,
		"darkOut":this.darkOut,
		"appearSerinuntius":this.appearSerinuntius
	};
	this._timer;
	this._characters;
	this._bgMng;
};

DOT3.RUN_MELOS.Castle.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.Castle.prototype.initBG = function()
{
	this.reset();
	this._bgMng.scene("dark").stop();
}

DOT3.RUN_MELOS.Castle.prototype.sceneStart = function()
{
	this.reset();
	this._bgMng.scene("dark").stop();
}
DOT3.RUN_MELOS.Castle.prototype.showCastle = function()
{
	this._bgMng.scene("castle");
	
	this._characters.melos.show("75%").be("stand");
	this._characters.king.show("15%", 30).be("sit");
	this._characters.gyokuza.show("30%");
	this._characters.soldier1.show("55%");
	this._characters.soldier2.show("90%");
}
DOT3.RUN_MELOS.Castle.prototype.darkOut = function()
{
	this._bgMng.scene("dark");
	this.reset();
}
DOT3.RUN_MELOS.Castle.prototype.appearSerinuntius = function()
{
	this._bgMng.scene("castle");
	
	this._characters.melos.fadeIn("75%").be("stand");
	this._characters.king.fadeIn("15%", 30).be("sit");
	this._characters.gyokuza.fadeIn("30%");
	this._characters.soldier1.fadeIn("55%");
	this._characters.soldier2.fadeIn("90%");
	this._characters.serinuntius.fadeIn("70%").be("stand");
}


DOT3.RUN_MELOS.SCENES["castle"] = new DOT3.RUN_MELOS.Castle();