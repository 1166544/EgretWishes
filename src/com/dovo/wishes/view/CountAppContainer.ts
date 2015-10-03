/**
 * 游戏主容器
 * @author 
 *
 */
class CountAppContainer extends eui.Group {
    
    private _startView: CountStartView;
    private _gameView: CountGameView;
    private _overView: CountOverView;
    private _controller: CountController;
    private _model: CountModel;
    
	public constructor() 
	{
        super();
        this.width = 480;
        this.percentHeight = 100;
        this.horizontalCenter = 0;
        
        // 注册MVC
        this._controller = new CountController();
        this._model = new CountModel();
        this._model.init(this,this._controller);
        this._controller.init(this,this._model);
        
        // 背景
        var image = new eui.Image();
        image.source = "resource/style/bg.png";
        image.scale9Grid = new egret.Rectangle(28,31,14,10);
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
    
	/**
	 * 移除所有层 
	 */ 
	private removeAllLayer():void
	{
        this.removeLayer(this._startView);
        this.removeLayer(this._gameView);
        this.removeLayer(this._overView);
	}
	
	/**
	 * 移除单个图层
	 */ 
	private removeLayer(layer:CountBaseView):void{
        if(layer != null){
            if(this.contains(layer)){
                this.removeChild(layer);        
            }
        }
	}
	
	/**
	 * 添加单个图层
	 */ 
	private addLayer(layer:CountBaseView):void
	{
	    if(layer != null){
	        if(!this.contains(layer)){
                this.addChild(layer);
	        }
	        else{
                this.setChildIndex(layer,this.numChildren - 1);
	        }
	    }
	}
	
	/**
	 * 显示游戏开始页面
	 */ 
	public enterGameStartScreen():void
	{
        this.removeAllLayer();
        this.addLayer(this._startView);
	}
    
    /**
    * 显示游戏进行中页面
    */ 
    public enterGameingScreen():void
    {
        this.removeAllLayer();
        this.addLayer(this._gameView);
        this._gameView.show();
    }
    
    /**
    * 显示游戏结束页面
    */ 
    public enterGameEndScreen():void
    {
        this.removeAllLayer();
        this.addLayer(this._overView);
        this._gameView.hide();
    }
    
    /**
     * 更新分数
     */ 
    public updateScore():void{
        this._gameView.common.updateScore();
        this._overView.common.updateScore();
    }
    
    /**
     * 更新时间 
     */ 
    public updateTime():void{
        this._gameView.common.updateTime();
    }
}
