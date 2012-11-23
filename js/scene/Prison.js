DOT3.RUN_MELOS.Prison = function () {
	this._actionStore = [];
	this._actions = {
		"melosGoesCenter":this.melosGoesCenter,
		"melosShout": this.melosShout,
		"serinuntiusFree": this.serinuntiusFree,
		"serinuntiusMeetMelos":this.serinuntiusMeetMelos,
		"serinuntiusHit": this.serinuntiusHit,
		"melosHit": this.melosHit,
		"thxFriend": this.thxFriend,
		"kingShow":this.kingShow,
		"kingWalk": this.kingWalk,
		"girlWalk": this.girlWalk,
		"girlPass": this.girlPass,
		"sceneEnd": this.sceneEnd

	};
	this._timer;
	this._characters;
	this._bgMng;

	this._moveTimer;
};

DOT3.RUN_MELOS.Prison.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.Prison.prototype.initBG = function()
{
	this._bgMng.scene("beforeNight");
	this._bgMng.stop();
	this._planet.show(66);

	this._characters.king.show("left");

	this._characters.soldier1.show("7%");
	this._characters.soldier2.show("23%");
	this._characters.shokei.show("30%");
	this._characters.serinuntius.show("15%",75);
	this._characters.serinuntius.be("cross");

	this._characters.murabito.show("78%", 5);
	this._characters.melos.show("93%");
	this._characters.melos.be("tired_nude");

}

DOT3.RUN_MELOS.Prison.prototype.melosGoesCenter = function()
{
	this._characters.king.show("left");
	this._characters.soldier1.show("7%");
	this._characters.soldier2.show("23%");
	this._characters.serinuntius.show("15%",75);
	this._characters.serinuntius.be("cross");
	this._characters.melos.show("93%");
	
	this._characters.melos.be("walk_tired_nude");
	this._characters.melos.moveTo("51%",0,9, "linear");
	
	var o = this;
	this._moveTimer = setTimeout(function(){o._characters.melos.be("tired_nude")},9000);
}

DOT3.RUN_MELOS.Prison.prototype.melosShout = function()
{
	this._characters.king.show("left");
	this._characters.soldier1.show("7%");
	this._characters.soldier2.show("23%");
	this._characters.serinuntius.show("15%",75);
	this._characters.serinuntius.be("cross");
	
	clearTimeout(this._moveTimer);
	this._characters.melos.show("51%");
	this._characters.melos.be("tired_nude");
}

DOT3.RUN_MELOS.Prison.prototype.serinuntiusFree = function()
{
	this._characters.king.show("left");
	this._characters.soldier1.show("7%");
	this._characters.soldier2.show("23%");
	this._characters.serinuntius.show("15%",75);
	this._characters.serinuntius.be("cross");
	
	this._characters.melos.show("51%");
	this._characters.melos.be("tired_nude");
	this._characters.serinuntius.fadeOut();
}

DOT3.RUN_MELOS.Prison.prototype.serinuntiusMeetMelos = function()
{
	this._characters.king.show("left");
	this._characters.soldier1.show("7%");
	this._characters.soldier2.show("23%");
	this._characters.serinuntius.be("normal");
	this._characters.serinuntius.fadeIn("46%");
	
	this._characters.soldier1.fadeOut();
	this._characters.soldier2.fadeOut();
	
	this._characters.melos.show("51%");
	this._characters.melos.be("stand_nude")
}

DOT3.RUN_MELOS.Prison.prototype.serinuntiusHit = function()
{
	this._characters.soldier1.hide();
	this._characters.soldier2.hide();
	this._characters.serinuntius.be("normal");
	this._characters.serinuntius.show("46%");
	this._characters.melos.show("51%");
	this._characters.melos.be("stand_nude")
	
	var o = this;
	this._characters.serinuntius.moveTo("47%",0,1);
	setTimeout(function(){
		o._characters.serinuntius.be("punch");
		o._characters.melos.be("punched");
	},900);
	setTimeout(function(){
		o._characters.serinuntius.be("normal");
		o._characters.melos.be("stand_nude");
	},1800);
}

DOT3.RUN_MELOS.Prison.prototype.melosHit = function()
{
	this._characters.soldier1.hide();
	this._characters.soldier2.hide();
	this._characters.serinuntius.be("normal");
	this._characters.serinuntius.show("47%");
	this._characters.melos.show("51%");
	this._characters.melos.be("stand_nude")
	this._characters.king.hide();
	this._characters.girl.hide();
	
	var o = this;
	this._characters.melos.moveTo("50%",0,1);
	setTimeout(function(){
		o._characters.serinuntius.be("punched");
		o._characters.melos.be("punch");
	},900);
	setTimeout(function(){
		o._characters.serinuntius.be("normal");
		o._characters.melos.be("stand_nude");
	},1800);
}

DOT3.RUN_MELOS.Prison.prototype.thxFriend = function()
{
	this._characters.soldier1.hide();
	this._characters.soldier2.hide();
	this._characters.serinuntius.be("normal");
	this._characters.serinuntius.show("47%");
	this._characters.melos.show("50%");
	this._characters.melos.be("stand_nude")
	this._characters.king.hide();
	this._characters.girl.hide();
	
	this._characters.serinuntius.hide();
	this._characters.melos.be("hug");
}

DOT3.RUN_MELOS.Prison.prototype.kingShow = function()
{
	this._characters.soldier1.hide();
	this._characters.soldier2.hide();
	this._characters.serinuntius.be("normal");
	this._characters.serinuntius.show("47%");
	this._characters.melos.show("50%");
	this._characters.melos.be("stand_nude")
	this._characters.girl.hide();
	
	this._characters.king.be("normal");
	this._characters.king.fadeIn('30%');
	
	this._characters.serinuntius.hide();
	this._characters.melos.be("hug");
}

DOT3.RUN_MELOS.Prison.prototype.kingWalk = function()
{
	this._characters.soldier1.hide();
	this._characters.soldier2.hide();
	this._characters.girl.hide();
	
	this._characters.king.be("normal");
	this._characters.king.show('30%');
	this._characters.king.moveTo('32%');
	
	this._characters.melos.show("50%");
	this._characters.melos.be("stand_nude");
	this._characters.serinuntius.be("normal");
	this._characters.serinuntius.show("45%");
}

DOT3.RUN_MELOS.Prison.prototype.girlWalk = function()
{
	this._characters.soldier1.hide();
	this._characters.soldier2.hide();
	this._characters.serinuntius.be("normal");
	this._characters.serinuntius.show("45%");
	this._characters.melos.show("50%");
	this._characters.melos.be("stand_nude")
	this._characters.king.be("normal");
	this._characters.king.show('32%');
	
	this._characters.girl.fadeIn("63%", 3);
	this._characters.girl.moveTo("60%",0,4);
	this._characters.girl.be("walk");
}

DOT3.RUN_MELOS.Prison.prototype.girlPass = function()
{
	this._characters.soldier1.hide();
	this._characters.soldier2.hide();
	this._characters.serinuntius.be("normal");
	this._characters.serinuntius.show("45%");
	this._characters.melos.show("50%");
	this._characters.melos.be("stand_nude")
	this._characters.girl.show("60%");
	
	this._characters.girl.be("pass");
}

DOT3.RUN_MELOS.Prison.prototype.sceneEnd = function()
{
	this._characters.soldier1.hide();
	this._characters.soldier2.hide();
	this._characters.serinuntius.be("normal");
	this._characters.serinuntius.show("45%");
	this._characters.melos.show("50%");
	this._characters.melos.be("stand_nude")
	this._characters.girl.show("60%");
	this._characters.girl.be("pass");
	
	this._characters.girl.fadeOut();
	this._characters.melos.fadeOut();
	this._characters.serinuntius.fadeOut();
	this._characters.king.fadeOut();
	this._characters.murabito.fadeOut();
	this._characters.shokei.fadeOut();
	this._bgMng.scene("dark");
}

DOT3.RUN_MELOS.SCENES["prison"] = new DOT3.RUN_MELOS.Prison();