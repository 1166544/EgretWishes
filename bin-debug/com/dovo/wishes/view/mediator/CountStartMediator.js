/**
 * 开始页逻辑处理中介
 * @author
 *
 */
var CountStartMediator = (function () {
    function CountStartMediator(view) {
        this._view = view;
        this._view.gameStartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
    }
    var d = __define,c=CountStartMediator;p=c.prototype;
    /**
    * 开始游戏按钮点击处理
    */
    p.onStartButtonClick = function (event) {
        this._view.view.enterGameingScreen();
    };
    return CountStartMediator;
})();
egret.registerClass(CountStartMediator,"CountStartMediator");
//# sourceMappingURL=CountStartMediator.js.map