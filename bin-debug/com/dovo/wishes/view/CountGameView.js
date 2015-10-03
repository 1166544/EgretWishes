/**
 * 主要逻辑层
 * @author
 *
 */
var CountGameView = (function (_super) {
    __extends(CountGameView, _super);
    function CountGameView() {
        _super.call(this);
    }
    var d = __define,c=CountGameView;p=c.prototype;
    p.init = function (model, view, controller) {
        _super.prototype.init.call(this, model, view, controller);
        this._cashLayer = new eui.Group();
        this._cashLayer.percentWidth = this._cashLayer.percentHeight = 100;
        this.addChild(this._cashLayer);
        var image = new eui.Image();
        image.source = "resource/style/bg.png";
        image.scale9Grid = new egret.Rectangle(28, 31, 14, 10);
        image.percentWidth = 100;
        image.percentHeight = 100;
        this.addChild(image);
        this._cashLayer.mask = image;
        this._cashFly = new eui.Image();
        this._cashFly.source = "resource/style/m0.png";
        this._cashFly.x = 90;
        this._cashFly.y = 500;
        this._cashFly.scaleX = this._cashFly.scaleY = 0.8;
        this.addChild(this._cashFly);
        this._cashBtn = new eui.Button();
        this._cashBtn.skinName = "resource/eui_skins/ButtonMoneySkin.exml";
        this._cashBtn.horizontalCenter = 0;
        this._cashBtn.scaleX = this._cashBtn.scaleY = 0.8;
        this._cashBtn.bottom = -400;
        this.addChild(this._cashBtn);
        this._cashNum = new CountMoneyView();
        this._cashNum.horizontalCenter = 0;
        this._cashNum.top = 50;
        this.addChild(this._cashNum);
        this._cashTime = new CountTimeView();
        this._cashTime.horizontalCenter = 0;
        this._cashTime.top = 140;
        this.addChild(this._cashTime);
        this.addCommond(new CountGameMediator(this));
    };
    p.show = function () {
        this.model.reset();
        this.common.startFlyMoney();
        this.common.startCountDown();
    };
    p.hide = function () {
        this.common.stopFlyMoney();
    };
    d(p, "cashLayer"
        ,function () {
            return this._cashLayer;
        }
    );
    d(p, "cashFlyImage"
        ,function () {
            return this._cashFly;
        }
    );
    d(p, "cashFlyButton"
        ,function () {
            return this._cashBtn;
        }
    );
    d(p, "cashCountMoney"
        ,function () {
            return this._cashNum;
        }
    );
    d(p, "cashCountDownTime"
        ,function () {
            return this._cashTime;
        }
    );
    return CountGameView;
})(CountBaseView);
egret.registerClass(CountGameView,"CountGameView");
//# sourceMappingURL=CountGameView.js.map