DOT3.RUN_MELOS.Prologue = function () {
	this._actionStore = [];
	this._actions = {
		"showTitle": this.showTitle,
		"melosRun": this.melosRun
	};
	this._timer;
	this._characters;
	this._bgMng;
};

DOT3.RUN_MELOS.Prologue.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.Prologue.prototype.initBG = function()
{
	this._characters.melos.hide();

	this._bgMng.scene('dark');
}

DOT3.RUN_MELOS.Prologue.prototype.showTitle = function()
{
	this._characters.melos.hide();

}

DOT3.RUN_MELOS.Prologue.prototype.melosRun = function()
{
	this._characters.melos.be("run");
	this._characters.melos.fadeIn();
}

DOT3.RUN_MELOS.SCENES["prologue"] = new  DOT3.RUN_MELOS.Prologue();
