/**
 * 求关注页面
 * @author 
 *
 */
class CountWatchView extends CountBaseView {
	public constructor() {
        super();
	}
	
    public init(model:CountModel, view:CountAppContainer, controller:CountController):void
    {
        super.init(model,view,controller);
                
        var container: eui.Group = new eui.Group();
        container.percentWidth = 100;
        container.height = 149;
        container.bottom = 0;
        container.left = 0;
        this.addChild(container);
        
        var moreTxt:eui.Label = new eui.Label();
        moreTxt.right = 20;
        moreTxt.bottom = 10;
        moreTxt.fontFamily = "Arial";
        moreTxt.size = 18;
        moreTxt.bold = true;
        moreTxt.text = "[更多奇葩游戏]";
        moreTxt.textColor = 0xffffff;
        this.addChild(moreTxt);
        
        var imageSheep:eui.Image = new eui.Image();
        imageSheep.source = "resource/style/follow_anim.png";
        container.addChild(imageSheep);
                
        var square:egret.Shape = new egret.Shape();
        square.graphics.beginFill(0x000000);
        square.graphics.drawRect(0,0,168,149);
        square.graphics.endFill();
        container.addChild(square);
                
        // 建立遮罩
        imageSheep.mask = square;
                
        // 设置定时器
        setInterval(updateSheep,200);
        function updateSheep():void
        {
            if(imageSheep.x <= -(171 * 3))
                {
                    imageSheep.x = 0;  
                }
                imageSheep.x -= 171;
            }
	}
}
