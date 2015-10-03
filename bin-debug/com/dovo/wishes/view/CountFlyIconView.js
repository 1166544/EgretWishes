/**
 * 飞钱图标
 * @author
 *
 */
var CountFlyIconView = (function (_super) {
    __extends(CountFlyIconView, _super);
    function CountFlyIconView(minY, maxY) {
        _super.call(this);
        this._minY = minY;
        this._maxY = maxY;
        this.anchorOffsetX = 127 >> 1;
        this.anchorOffsetY = 194 >> 1;
        var random = Math.random();
        this.scaleX = this.scaleY = 0.5 + random < 0.5 ? random : 0.8;
    }
    var d = __define,c=CountFlyIconView;p=c.prototype;
    d(p, "minY"
        ,function () {
            return this._minY;
        }
    );
    d(p, "maxY"
        ,function () {
            return this._maxY;
        }
    );
    return CountFlyIconView;
})(eui.Image);
egret.registerClass(CountFlyIconView,"CountFlyIconView");
//# sourceMappingURL=CountFlyIconView.js.map