var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
    }
    var d = __define,c=Main;p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        // 载入默认主题 
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        // 添加子容器
        var container = new CountAppContainer();
        this.addChild(container);
    };
    return Main;
})(eui.UILayer);
egret.registerClass(Main,"Main");
//# sourceMappingURL=Main.js.map