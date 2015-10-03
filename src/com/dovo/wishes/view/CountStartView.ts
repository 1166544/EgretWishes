/**
 * 开始页面
 * @author 
 *
 */
class CountStartView extends CountBaseView
{
    private _gameStart: eui.Button;
    
	public constructor() {
        super();
	}
	
	public init(model:CountModel, view:CountAppContainer, controller:CountController):void
	{
        super.init(model,view,controller);
    	  
        var imageBg = new eui.Image();
        imageBg.source = "resource/style/splashtitle.png";
        imageBg.horizontalCenter = 0;
        imageBg.top = 77;
        imageBg.width = 368;
        imageBg.height = 210;
        this.addChild(imageBg);
        
        var imageRmb = new eui.Image();
        imageRmb.source = "resource/style/mb0.png";
        imageRmb.horizontalCenter = 0;
        imageRmb.top = 456;
        imageRmb.scaleX = imageRmb.scaleY = 0.8;
        this.addChild(imageRmb);
        
        this._gameStart = new eui.Button();
        this._gameStart.skinName = "resource/eui_skins/ButtonStartSkin.exml";
        this._gameStart.horizontalCenter = 0;
        this._gameStart.top = 380;
        this.addChild(this._gameStart);
        
        this.addCommond(new CountStartMediator(this));
	}
	
	public get gameStartBtn():eui.Button{
        return this._gameStart;
	}
	
}
