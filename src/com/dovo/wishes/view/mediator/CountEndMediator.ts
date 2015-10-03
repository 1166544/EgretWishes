/**
 * 结束页面中介
 * @author 
 *
 */
class CountEndMediator 
{
    private _view:CountOverView;
        
    public constructor(view: egret.DisplayObject) {
        this._view = <CountOverView>view;
                
        this._view.replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplayButtonClick,this);
        this._view.sortBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSortButtonClick,this);
        this._view.forwardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onForwardButtonClick,this);
    }
    
    /**
    * 重玩点击处理
    */ 
    private onReplayButtonClick(event:egret.TouchEvent):void{
        this._view.controller.startGame();
    }
        
    /**
     * 查看排名点击处理
     */ 
    private onSortButtonClick(event:egret.TouchEvent):void{
       // TODO:                 
    }
            
    /**
     * 转发点击处理
     */ 
    private onForwardButtonClick(event:egret.TouchEvent):void{
        // TODO:                        
    }
     
    /**
    * 更新分数
    */ 
    public updateScore():void{
        this._view.totalTxt.text = GameConsts.MONEY_FLAG + this._view.model.score;           
    }
}
