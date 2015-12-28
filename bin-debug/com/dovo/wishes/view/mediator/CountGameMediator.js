/**
 * 游戏进行中页面中介
 * @author
 *
 */
var CountGameMediator = (function () {
    function CountGameMediator(view) {
        this._flyMaxY = 0;
        this._flyMinY = 0;
        this._view = view;
        this._view.cashFlyButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFlyButtonClick, this);
        this._flyMaxY = 0;
        this._flyMinY = this._view.cashFlyImage.y;
    }
    var d = __define,c=CountGameMediator;p=c.prototype;
    /**
    * 开始飞钱
    */
    p.startFlyMoney = function () {
        this.addFlyIcon();
    };
    /**
    * 结束飞钱
    */
    p.stopFlyMoney = function () {
        if (this._flyTimer != null) {
            this._flyTimer.stop();
        }
        for (var i = 0; i < this._flyMoneyList.length; i++) {
            var icon = this._flyMoneyList[i];
            if (this.countGameView.cashLayer.contains(icon)) {
                this.countGameView.cashLayer.removeChild(icon);
            }
        }
    };
    /**
    * 添加飞钱图标
    */
    p.addFlyIcon = function () {
        if (this._flyMoneyList == null) {
            this._flyMoneyList = new Array();
            for (var i = 0; i < GameConsts.FLY_NUM; i++) {
                var img = new CountFlyIconView(Math.random() * GameConsts.MIN_Y, GameConsts.MAX_Y);
                img.source = "resource/style/d0.png";
                this.countGameView.cashLayer.addChild(img);
                img.x = Math.random() * 500;
                img.y = img.minY;
                this._flyMoneyList.push(img);
            }
        }
        else {
            for (var i = 0; i < this._flyMoneyList.length; i++) {
                var icon = this._flyMoneyList[i];
                icon.x = icon.x;
                icon.y = icon.minY;
                this.countGameView.cashLayer.addChild(icon);
            }
        }
        this.addTimer();
    };
    /**
     * 添加定时器
     */
    p.addTimer = function () {
        if (this._flyTimer == null) {
            this._flyTimer = new egret.Timer(GameConsts.HEART_BEAT, 0);
            this._flyTimer.addEventListener(egret.TimerEvent.TIMER, this.updateMoney, this);
        }
        this._flyTimer.reset();
        this._flyTimer.start();
    };
    /**
     * 更新钱图标路径
     */
    p.updateMoney = function (event) {
        for (var i = 0; i < this._flyMoneyList.length; i++) {
            var icon = this._flyMoneyList[i];
            icon.y += GameConsts.FLY_GAP;
            icon.rotation += GameConsts.ROTATION_GAP + Math.random() * GameConsts.ROTATION_GAP * 2;
            if (icon.y >= icon.maxY) {
                icon.y = icon.minY;
            }
        }
        if (this._isFlying) {
            this.countGameView.cashFlyImage.y -= GameConsts.FLY_TARGET_GAP;
            if (this.countGameView.cashFlyImage.y <= this._flyMaxY) {
                this.countGameView.cashFlyImage.y = this._flyMinY;
                this.onComplete();
            }
            this.countGameView.cashFlyImage.alpha -= GameConsts.FLY_ALPHA_GAP;
            if (this.countGameView.cashFlyImage.alpha <= GameConsts.MIN_ALPHA) {
                this.countGameView.cashFlyImage.alpha = GameConsts.MIN_ALPHA;
            }
        }
    };
    /**
     * 滑动钱币按钮点击将钱向上飞一段矩离
     */
    p.onFlyButtonClick = function (event) {
        if (this._isFlying)
            return;
        this._isFlying = true;
        this.countGameView.cashFlyImage.y = this._flyMinY;
        this.countGameView.cashFlyImage.alpha = 1;
        this._view.model.updateScore();
    };
    /**
     * 滑动钱币完毕
     */
    p.onComplete = function () {
        this._isFlying = false;
    };
    /**
     * 开始倒计时
     */
    p.startCountDown = function () {
        if (this._countDownTimer == null) {
            this._countDownTimer = new egret.Timer(1000, GameConsts.COUNT_DOWN_NUM);
            this._countDownTimer.addEventListener(egret.TimerEvent.TIMER, this.updateCountDown, this);
        }
        this._countDownTimer.reset();
        this._countDownTimer.start();
    };
    /**
     * 更新倒计时
     */
    p.updateCountDown = function (event) {
        this._view.model.updateTime();
        if (this._view.model.isTimeOut) {
            this._countDownTimer.stop();
            this._view.controller.stopGame();
        }
    };
    d(p, "countGameView"
        ,function () {
            return this._view;
        }
    );
    /**
     * 更新分数
     */
    p.updateScore = function () {
        this._view.cashCountMoney.updateValue(this._view.model.score);
    };
    /**
     * 更新时间
     */
    p.updateTime = function () {
        this._view.cashCountDownTime.updateValue(this._view.model.time);
    };
    return CountGameMediator;
})();
egret.registerClass(CountGameMediator,"CountGameMediator");
