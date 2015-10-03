
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"bin-debug/com/dovo/wishes/controller/CountController.js",
	"bin-debug/com/dovo/wishes/view/CountBaseView.js",
	"bin-debug/com/dovo/wishes/model/CountModel.js",
	"bin-debug/com/dovo/wishes/model/GameConsts.js",
	"bin-debug/com/dovo/wishes/view/CountAppContainer.js",
	"bin-debug/com/dovo/wishes/view/CountFlyIconView.js",
	"bin-debug/com/dovo/wishes/view/CountGameView.js",
	"bin-debug/com/dovo/wishes/view/CountMoneyView.js",
	"bin-debug/com/dovo/wishes/view/CountOverView.js",
	"bin-debug/com/dovo/wishes/view/CountStartView.js",
	"bin-debug/com/dovo/wishes/view/CountTimeView.js",
	"bin-debug/com/dovo/wishes/view/CountWatchView.js",
	"bin-debug/com/dovo/wishes/view/ICountView.js",
	"bin-debug/com/dovo/wishes/view/mediator/CountEndMediator.js",
	"bin-debug/com/dovo/wishes/view/mediator/CountGameMediator.js",
	"bin-debug/com/dovo/wishes/view/mediator/CountStartMediator.js",
	"bin-debug/Main.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "noScale",
		contentWidth: 640,
		contentHeight: 960,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};