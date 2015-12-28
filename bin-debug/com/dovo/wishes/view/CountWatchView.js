/**
 * 求关注页面
 * @author
 *
 */
var CountWatchView = (function (_super) {
    __extends(CountWatchView, _super);
    function CountWatchView() {
        _super.call(this);
    }
    var d = __define,c=CountWatchView;p=c.prototype;
    p.init = function (model, view, controller) {
        _super.prototype.init.call(this, model, view, controller);
        var container = new eui.Group();
        container.percentWidth = 100;
        container.height = 149;
        container.bottom = 0;
        container.left = 0;
        this.addChild(container);
        var moreTxt = new eui.Label();
        moreTxt.right = 20;
        moreTxt.bottom = 10;
        moreTxt.fontFamily = "Arial";
        moreTxt.size = 18;
        moreTxt.bold = true;
        moreTxt.text = "[更多奇葩游戏]";
        moreTxt.textColor = 0xffffff;
        this.addChild(moreTxt);
        var imageSheep = new eui.Image();
        imageSheep.source = "resource/style/follow_anim.png";
        container.addChild(imageSheep);
        var square = new egret.Shape();
        square.graphics.beginFill(0x000000);
        square.graphics.drawRect(0, 0, 168, 149);
        square.graphics.endFill();
        container.addChild(square);
        // 建立遮罩
        imageSheep.mask = square;
        // 设置定时器
        setInterval(updateSheep, 200);
        function updateSheep() {
            if (imageSheep.x <= -(171 * 3)) {
                imageSheep.x = 0;
            }
            imageSheep.x -= 171;
        }
    };
    return CountWatchView;
})(CountBaseView);
egret.registerClass(CountWatchView,"CountWatchView");
