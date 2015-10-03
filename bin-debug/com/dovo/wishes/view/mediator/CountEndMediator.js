/**
 * 结束页面中介
 * @author
 *
 */
var CountEndMediator = (function () {
    function CountEndMediator(view) {
        this._view = view;
        this._view.replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplayButtonClick, this);
        this._view.sortBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSortButtonClick, this);
        this._view.forwardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onForwardButtonClick, this);
    }
    var d = __define,c=CountEndMediator;p=c.prototype;
    /**
    * 重玩点击处理
    */
    p.onReplayButtonClick = function (event) {
        this._view.controller.startGame();
    };
    /**
     * 查看排名点击处理
     */
    p.onSortButtonClick = function (event) {
        // TODO:                 
    };
    /**
     * 转发点击处理
     */
    p.onForwardButtonClick = function (event) {
        // TODO:                        
    };
    /**
    * 更新分数
    */
    p.updateScore = function () {
        this._view.totalTxt.text = GameConsts.MONEY_FLAG + this._view.model.score;
    };
    return CountEndMediator;
})();
egret.registerClass(CountEndMediator,"CountEndMediator");
//# sourceMappingURL=CountEndMediator.js.map