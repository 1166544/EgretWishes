/**
 * 数据中心
 * @author 
 *
 */
class CountModel {
    
    private _score:number = 0;
    private _time:number = 0;
    private _isTimeOut: boolean = false;
    private _view: CountAppContainer;
    private _controller: CountController;
    
	public constructor() {
    	
	}
	
	/**
	 * 初始化
	 */ 
	public init(view:egret.DisplayObject, controller:CountController):void{
        this._view = <CountAppContainer>view;
        this._controller = controller;
	}
	
    /**
    * 游戏分数
    */
    public get score():number{
        return this._score;
    }
        
    /**
    * 倒计时
    */ 
    public get time():number{
        return this._time;
    }
        
    /**
    * 是否已到时
    */ 
    public get isTimeOut():boolean{
        return this._isTimeOut;
    }
        
    /**
    * 重置游戏数据
    */
    public reset():void{
        this._score = 0;
        this._time = GameConsts.COUNT_DOWN_NUM;
        this._view.updateScore();
        this._view.updateTime();
    }
        
    /**
    * 更新分数
    */
    public updateScore():void{
        this._score += GameConsts.SCORE;
        this._view.updateScore();
    }
        
    /**
    * 更新倒计时
    */ 
    public updateTime():void{
        this._time -= 1;
        if(this._time <= 0){
            this._time = 0;
            this._isTimeOut = true;
        }
        else{
            this._isTimeOut = false;
        }
        this._view.updateTime();
    }
}
