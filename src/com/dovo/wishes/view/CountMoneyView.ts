/**
 * 钱币显示组件
 * @author 
 *
 */
class CountMoneyView extends eui.Group
{
    private _txt: eui.Label;
    
	public constructor()
	{
        super();
        this.width = 180;
        this.height = 71;
        
        var bg: eui.Image = new eui.Image();
        bg.percentWidth = bg.percentHeight = 100;
        bg.scale9Grid = new egret.Rectangle(28,31,14,10);
        bg.source = "resource/style/tmbg.png";
        this.addChild(bg);
        
        this._txt = new eui.Label();
        this._txt.horizontalCenter = 0;
        this._txt.verticalCenter = 0;
        this._txt.fontFamily = "Arial";
        this._txt.size = 35;
        this._txt.textColor = 0xfff600;
        this._txt.bold = true;
        this.addChild(this._txt);
	}
	
	/**
	 * 更新数字
	 */ 
	public updateValue(value:number):void{
        this._txt.text = GameConsts.MONEY_FLAG + value.toString();
	}
	
	public get txt():eui.Label{
        return this._txt;
	}
}
