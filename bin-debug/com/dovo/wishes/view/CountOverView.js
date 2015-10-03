/**
 * 游戏结束层
 * @author
 *
 */
var CountOverView = (function (_super) {
    __extends(CountOverView, _super);
    function CountOverView() {
        _super.call(this);
    }
    var d = __define,c=CountOverView;p=c.prototype;
    p.init = function (model, view, controller) {
        _super.prototype.init.call(this, model, view, controller);
        // 求关注层
        this._watchView = new CountWatchView();
        this._watchView.init(this.model, this.view, this.controller);
        this.addChild(this._watchView);
        var bg = new eui.Image();
        bg.percentWidth = 100;
        bg.height = 320;
        bg.verticalCenter = 0;
        bg.scale9Grid = new egret.Rectangle(13, 43, 47, 84);
        bg.source = "resource/style/dlgbg.png";
        this.addChild(bg);
        this._totalTxt = new eui.Label();
        this._totalTxt.horizontalCenter = 0;
        this._totalTxt.verticalCenter = -90;
        this._totalTxt.fontFamily = "Arial";
        this._totalTxt.text = GameConsts.MONEY_FLAG + "0";
        this._totalTxt.size = 40;
        this._totalTxt.bold = true;
        this.addChild(this._totalTxt);
        this._descTxt = new eui.Label();
        this._descTxt.horizontalCenter = 0;
        this._descTxt.verticalCenter = -30;
        this._descTxt.fontFamily = "Arial Black";
        this._descTxt.size = 28;
        this._descTxt.bold = true;
        this._descTxt.text = "数钱数到抽筋！你是数钱高手吗？";
        this.addChild(this._descTxt);
        this._replayBtn = new eui.Button();
        this._replayBtn.skinName = "resource/eui_skins/ButtonReplaySkin.exml";
        this._replayBtn.left = 50;
        this._replayBtn.verticalCenter = 70;
        this.addChild(this._replayBtn);
        this._sortBtn = new eui.Button();
        this._sortBtn.skinName = "resource/eui_skins/ButtonSortSkin.exml";
        this._sortBtn.horizontalCenter = 0;
        this._sortBtn.verticalCenter = 70;
        this.addChild(this._sortBtn);
        this._forwardBtn = new eui.Button();
        this._forwardBtn.skinName = "resource/eui_skins/ButtonForwardSkin.exml";
        this._forwardBtn.right = 50;
        this._forwardBtn.verticalCenter = 70;
        this.addChild(this._forwardBtn);
        this.addCommond(new CountEndMediator(this));
    };
    d(p, "totalTxt"
        ,function () {
            return this._totalTxt;
        }
    );
    d(p, "replayBtn"
        ,function () {
            return this._replayBtn;
        }
    );
    d(p, "sortBtn"
        ,function () {
            return this._sortBtn;
        }
    );
    d(p, "forwardBtn"
        ,function () {
            return this._forwardBtn;
        }
    );
    return CountOverView;
})(CountBaseView);
egret.registerClass(CountOverView,"CountOverView");
//# sourceMappingURL=CountOverView.js.map