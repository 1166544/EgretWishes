/**
 * 开始页逻辑处理中介
 * @author 
 *
 */
class CountStartMediator 
{
    private _view: CountStartView;
	public constructor(view:egret.DisplayObject) 
	{
        this._view = <CountStartView>view;
        
        this._view.gameStartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick,this);
	}
	
    /**
    * 开始游戏按钮点击处理
    */ 
    private onStartButtonClick(event:egret.TouchEvent):void{
        this._view.view.enterGameingScreen();
    }
}
