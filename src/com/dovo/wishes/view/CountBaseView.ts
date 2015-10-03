/**
 * 视图基类
 * @author 
 *
 */
class CountBaseView extends eui.Group implements ICountView
{
    private _model: CountModel;
    private _view: CountAppContainer;
    private _controller: CountController;
    private _common: any;
    
	public constructor() {
        super();
        this.percentWidth = 100;
        this.percentHeight = 100;
	}
	
	public init(model:CountModel, view:CountAppContainer, controller:CountController):void{
        this._model = model;
        this._view = view;
        this._controller = controller;
	}
	
	public show():void{
	    
	}
	
	public hide():void{
	    
	}
	
	/**
	 * 添加处理代理
	 */ 
    protected addCommond(classz: any):void{
        this._common = classz;
    }
	
    public get model(): CountModel { return this._model; }
    public get view(): CountAppContainer{ return this._view; }
    public get controller(): CountController{ return this._controller; }
    public get common(): any { return this._common; }
}
