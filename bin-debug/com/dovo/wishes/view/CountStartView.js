/**
 * 开始页面
 * @author
 *
 */
var CountStartView = (function (_super) {
    __extends(CountStartView, _super);
    function CountStartView() {
        _super.call(this);
    }
    var d = __define,c=CountStartView;p=c.prototype;
    p.init = function (model, view, controller) {
        _super.prototype.init.call(this, model, view, controller);
        var imageBg = new eui.Image();
        imageBg.source = "resource/style/splashtitle.png";
        imageBg.horizontalCenter = 0;
        imageBg.top = 77;
        imageBg.width = 368;
        imageBg.height = 210;
        this.addChild(imageBg);
        var imageRmb = new eui.Image();
        imageRmb.source = "resource/style/mb0.png";
        imageRmb.horizontalCenter = 0;
        imageRmb.top = 456;
        imageRmb.scaleX = imageRmb.scaleY = 0.8;
        this.addChild(imageRmb);
        this._gameStart = new eui.Button();
        this._gameStart.skinName = "resource/eui_skins/ButtonStartSkin.exml";
        this._gameStart.horizontalCenter = 0;
        this._gameStart.top = 380;
        this.addChild(this._gameStart);
        this.addCommond(new CountStartMediator(this));
    };
    d(p, "gameStartBtn"
        ,function () {
            return this._gameStart;
        }
    );
    return CountStartView;
})(CountBaseView);
egret.registerClass(CountStartView,"CountStartView");
//# sourceMappingURL=CountStartView.js.map