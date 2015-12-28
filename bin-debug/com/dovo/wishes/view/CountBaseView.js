/**
 * 视图基类
 * @author
 *
 */
var CountBaseView = (function (_super) {
    __extends(CountBaseView, _super);
    function CountBaseView() {
        _super.call(this);
        this.percentWidth = 100;
        this.percentHeight = 100;
    }
    var d = __define,c=CountBaseView;p=c.prototype;
    p.init = function (model, view, controller) {
        this._model = model;
        this._view = view;
        this._controller = controller;
    };
    p.show = function () {
    };
    p.hide = function () {
    };
    /**
     * 添加处理代理
     */
    p.addCommond = function (classz) {
        this._common = classz;
    };
    d(p, "model"
        ,function () {
            return this._model;
        }
    );
    d(p, "view"
        ,function () {
            return this._view;
        }
    );
    d(p, "controller"
        ,function () {
            return this._controller;
        }
    );
    d(p, "common"
        ,function () {
            return this._common;
        }
    );
    return CountBaseView;
})(eui.Group);
egret.registerClass(CountBaseView,"CountBaseView",["ICountView"]);
