/**
 * 控制器
 * @author
 *
 */
var CountController = (function () {
    function CountController() {
    }
    var d = __define,c=CountController;p=c.prototype;
    /**
     * 初始化
     */
    p.init = function (view, model) {
        this._view = view;
        this._model = model;
    };
    /**
     * 停止游戏
     */
    p.stopGame = function () {
        this._view.enterGameEndScreen();
    };
    /**
     * 开始游戏
     */
    p.startGame = function () {
        this._view.enterGameStartScreen();
    };
    return CountController;
})();
egret.registerClass(CountController,"CountController");
