/**
 * 倒计时组件
 * @author 
 *
 */
class CountTimeView extends CountMoneyView {
	public constructor() {
        super();
        this.width = 130;
        
        var ico: eui.Image = new eui.Image();
        ico.left = 15;
        ico.verticalCenter = 0;
        ico.source = "resource/style/tmicon.png";
        this.addChild(ico);
        
        this.txt.horizontalCenter = 20;
        this.txt.textColor = 0xffffff;
        this.txt.size = 25;
	}
	
    /**
    * 更新数字
    */ 
    public updateValue(value:number):void{
        this.txt.text = value.toString() + '"';
    }
}
