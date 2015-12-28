/**
 * 数据中心
 * @author
 *
 */
var CountModel = (function () {
    function CountModel() {
        this._score = 0;
        this._time = 0;
        this._isTimeOut = false;
    }
    var d = __define,c=CountModel;p=c.prototype;
    /**
     * 初始化
     */
    p.init = function (view, controller) {
        this._view = view;
        this._controller = controller;
    };
    d(p, "score"
        /**
        * 游戏分数
        */
        ,function () {
            return this._score;
        }
    );
    d(p, "time"
        /**
        * 倒计时
        */
        ,function () {
            return this._time;
        }
    );
    d(p, "isTimeOut"
        /**
        * 是否已到时
        */
        ,function () {
            return this._isTimeOut;
        }
    );
    /**
    * 重置游戏数据
    */
    p.reset = function () {
        this._score = 0;
        this._time = GameConsts.COUNT_DOWN_NUM;
        this._view.updateScore();
        this._view.updateTime();
    };
    /**
    * 更新分数
    */
    p.updateScore = function () {
        this._score += GameConsts.SCORE;
        this._view.updateScore();
    };
    /**
    * 更新倒计时
    */
    p.updateTime = function () {
        this._time -= 1;
        if (this._time <= 0) {
            this._time = 0;
            this._isTimeOut = true;
        }
        else {
            this._isTimeOut = false;
        }
        this._view.updateTime();
    };
    return CountModel;
})();
egret.registerClass(CountModel,"CountModel");
