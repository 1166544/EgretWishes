/**
 * 主要逻辑层
 * @author 
 *
 */
class CountGameView extends CountBaseView
{
    /**
     * 飞钱容器
     */ 
    private _cashLayer: eui.Group;
    
    /**
     * 飞图片
     */ 
    private _cashFly: eui.Image;
    
    /**
     * 点击按钮
     */ 
    private _cashBtn: eui.Button;
    
    /**
     * 计数器
     */ 
    private _cashNum: CountMoneyView;
    
    /**
     * 倒计时
     */ 
    private _cashTime: CountTimeView;
    
	public constructor() {
        super();
	}
	
    public init(model:CountModel, view:CountAppContainer, controller:CountController):void
    {
        super.init(model,view,controller);
        
        this._cashLayer = new eui.Group();
        this._cashLayer.percentWidth = this._cashLayer.percentHeight = 100;
        this.addChild(this._cashLayer);
        
        var image = new eui.Image();
        image.source = "resource/style/bg.png";
        image.scale9Grid = new egret.Rectangle(28,31,14,10);
        image.percentWidth = 100;
        image.percentHeight = 100;
        this.addChild(image);
        
        this._cashLayer.mask = image;
        
        this._cashFly = new eui.Image();
        this._cashFly.source = "resource/style/m0.png";
        this._cashFly.x = 90;
        this._cashFly.y = 500;
        this._cashFly.scaleX = this._cashFly.scaleY = 0.8;
        this.addChild(this._cashFly);
        
        this._cashBtn = new eui.Button();
        this._cashBtn.skinName = "resource/eui_skins/ButtonMoneySkin.exml";
        this._cashBtn.horizontalCenter = 0;
        this._cashBtn.scaleX = this._cashBtn.scaleY = 0.8;
        this._cashBtn.bottom = -400;
        this.addChild(this._cashBtn);
        
        this._cashNum = new CountMoneyView();
        this._cashNum.horizontalCenter = 0;
        this._cashNum.top = 50;
        this.addChild(this._cashNum);
        
        this._cashTime = new CountTimeView();
        this._cashTime.horizontalCenter = 0;
        this._cashTime.top = 140;
        this.addChild(this._cashTime);
        
        this.addCommond(new CountGameMediator(this));
	}
    
	public show():void{
        this.model.reset();
    	  this.common.startFlyMoney();
        this.common.startCountDown();
	}
	
	public hide():void{
        this.common.stopFlyMoney();
	}
	
    public get cashLayer():eui.Group{
        return this._cashLayer;
    }
    
	public get cashFlyImage():eui.Image{
        return this._cashFly;
	}
    
    public get cashFlyButton():eui.Button{
        return this._cashBtn;
    }
    
    public get cashCountMoney():CountMoneyView{
        return this._cashNum;
    }
        
    public get cashCountDownTime():CountTimeView{
        return this._cashTime;
    }
}
