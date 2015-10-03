/**
 * 飞钱图标
 * @author 
 *
 */
class CountFlyIconView extends eui.Image {
    
    private _minY: number;
    private _maxY: number;
    
	public constructor(minY:number, maxY:number) {
        super();
        this._minY = minY;
        this._maxY = maxY;
        this.anchorOffsetX = 127 >> 1;
        this.anchorOffsetY = 194 >> 1;
        var random: number = Math.random();
        this.scaleX = this.scaleY = 0.5 + random < 0.5 ? random : 0.8;
	}
	
	public get minY():number{
        return this._minY;
	}
	
	public get maxY():number{
        return this._maxY;
	}
}
