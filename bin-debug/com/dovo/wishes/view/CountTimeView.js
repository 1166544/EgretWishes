/**
 * 倒计时组件
 * @author
 *
 */
var CountTimeView = (function (_super) {
    __extends(CountTimeView, _super);
    function CountTimeView() {
        _super.call(this);
        this.width = 130;
        var ico = new eui.Image();
        ico.left = 15;
        ico.verticalCenter = 0;
        ico.source = "resource/style/tmicon.png";
        this.addChild(ico);
        this.txt.horizontalCenter = 20;
        this.txt.textColor = 0xffffff;
        this.txt.size = 25;
    }
    var d = __define,c=CountTimeView;p=c.prototype;
    /**
    * 更新数字
    */
    p.updateValue = function (value) {
        this.txt.text = value.toString() + '"';
    };
    return CountTimeView;
})(CountMoneyView);
egret.registerClass(CountTimeView,"CountTimeView");
//# sourceMappingURL=CountTimeView.js.map