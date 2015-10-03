/**
 * 钱币显示组件
 * @author
 *
 */
var CountMoneyView = (function (_super) {
    __extends(CountMoneyView, _super);
    function CountMoneyView() {
        _super.call(this);
        this.width = 180;
        this.height = 71;
        var bg = new eui.Image();
        bg.percentWidth = bg.percentHeight = 100;
        bg.scale9Grid = new egret.Rectangle(28, 31, 14, 10);
        bg.source = "resource/style/tmbg.png";
        this.addChild(bg);
        this._txt = new eui.Label();
        this._txt.horizontalCenter = 0;
        this._txt.verticalCenter = 0;
        this._txt.fontFamily = "Arial";
        this._txt.size = 35;
        this._txt.textColor = 0xfff600;
        this._txt.bold = true;
        this.addChild(this._txt);
    }
    var d = __define,c=CountMoneyView;p=c.prototype;
    /**
     * 更新数字
     */
    p.updateValue = function (value) {
        this._txt.text = GameConsts.MONEY_FLAG + value.toString();
    };
    d(p, "txt"
        ,function () {
            return this._txt;
        }
    );
    return CountMoneyView;
})(eui.Group);
egret.registerClass(CountMoneyView,"CountMoneyView");
//# sourceMappingURL=CountMoneyView.js.map