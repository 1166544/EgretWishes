/**
 * 控制器
 * @author 
 *
 */
class CountController 
{
    private _view: CountAppContainer;
    private _model: CountModel;
    
	public constructor() {
    	
	}
    
	/**
	 * 初始化
	 */ 
    public init(view:egret.DisplayObject, model:CountModel):void{
        this._view = <CountAppContainer>view;
        this._model = model;
    }
    
    /**
     * 停止游戏
     */ 
    public stopGame():void{
        this._view.enterGameEndScreen(); 
    }
    
    /**
     * 开始游戏
     */ 
    public startGame():void{
        this._view.enterGameStartScreen();
    }
}
