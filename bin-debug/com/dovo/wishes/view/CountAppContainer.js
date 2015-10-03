/**
 * 游戏主容器
 * @author
 *
 */
var CountAppContainer = (function (_super) {
    __extends(CountAppContainer, _super);
    function CountAppContainer() {
        _super.call(this);
        this.width = 480;
        this.percentHeight = 100;
        this.horizontalCenter = 0;
        // 注册MVC
        this._controller = new CountController();
        this._model = new CountModel();
        this._model.init(this, this._controller);
        this._controller.init(this, this._model);
        // 背景
        var image = new eui.Image();
        image.source = "resource/style/bg.png";
        image.scale9Grid = new egret.Rectangle(28, 31, 14, 10);
        image.percentWidth = 100;
        image.percentHeight = 100;
        this.addChild(image);
        // 开始层
        this._startView = new CountStartView();
        this._startView.init(this._model, this, this._controller);
        this.addChild(this._startView);
        // 游戏层
        this._gameView = new CountGameView();
        this._gameView.init(this._model, this, this._controller);
        this.addChild(this._gameView);
        // 结束层
        this._overView = new CountOverView();
        this._overView.init(this._model, this, this._controller);
        this.addChild(this._overView);
        // 开始游戏
        this._controller.startGame();
    }
    var d = __define,c=CountAppContainer;p=c.prototype;
    /**
     * 移除所有层
     */
    p.removeAllLayer = function () {
        this.removeLayer(this._startView);
        this.removeLayer(this._gameView);
        this.removeLayer(this._overView);
    };
    /**
     * 移除单个图层
     */
    p.removeLayer = function (layer) {
        if (layer != null) {
            if (this.contains(layer)) {
                this.removeChild(layer);
            }
        }
    };
    /**
     * 添加单个图层
     */
    p.addLayer = function (layer) {
        if (layer != null) {
            if (!this.contains(layer)) {
                this.addChild(layer);
            }
            else {
                this.setChildIndex(layer, this.numChildren - 1);
            }
        }
    };
    /**
     * 显示游戏开始页面
     */
    p.enterGameStartScreen = function () {
        this.removeAllLayer();
        this.addLayer(this._startView);
    };
    /**
    * 显示游戏进行中页面
    */
    p.enterGameingScreen = function () {
        this.removeAllLayer();
        this.addLayer(this._gameView);
        this._gameView.show();
    };
    /**
    * 显示游戏结束页面
    */
    p.enterGameEndScreen = function () {
        this.removeAllLayer();
        this.addLayer(this._overView);
        this._gameView.hide();
    };
    /**
     * 更新分数
     */
    p.updateScore = function () {
        this._gameView.common.updateScore();
        this._overView.common.updateScore();
    };
    /**
     * 更新时间
     */
    p.updateTime = function () {
        this._gameView.common.updateTime();
    };
    return CountAppContainer;
})(eui.Group);
egret.registerClass(CountAppContainer,"CountAppContainer");
//# sourceMappingURL=CountAppContainer.js.map