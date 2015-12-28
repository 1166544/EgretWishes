/**
 * 常量设定
 * @author
 *
 */
var GameConsts = (function () {
    function GameConsts() {
    }
    var d = __define,c=GameConsts;p=c.prototype;
    /** 倒计时设定 */
    GameConsts.COUNT_DOWN_NUM = 30;
    /** 每次更新的钱数 */
    GameConsts.SCORE = 100;
    /** 钱币符号 */
    GameConsts.MONEY_FLAG = "$";
    /** 背景飞图标 */
    GameConsts.FLY_NUM = 10;
    /** 飞图标MINY */
    GameConsts.MIN_Y = -500;
    /** 飞图标MAXY */
    GameConsts.MAX_Y = 500;
    /** 心跳间隔 */
    GameConsts.HEART_BEAT = 17;
    /** 移动间隔 */
    GameConsts.FLY_GAP = 15;
    /** 旋转间隔 */
    GameConsts.ROTATION_GAP = 5;
    /** 飞向目标点移动间隔 */
    GameConsts.FLY_TARGET_GAP = 30;
    /** 飞向目标点alpha间隔 */
    GameConsts.FLY_ALPHA_GAP = 0.05;
    /** 最小alpha */
    GameConsts.MIN_ALPHA = 0.4;
    return GameConsts;
})();
egret.registerClass(GameConsts,"GameConsts");
