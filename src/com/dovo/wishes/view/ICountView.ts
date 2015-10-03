/**
 * 视图接口
 * @author 
 *
 */
interface ICountView
{
    /**
     * 初始化视图
     */ 
    init(moel:CountModel, view:CountAppContainer, controller:CountController): void;
    
    /**
     * 显示
     */ 
    show(): void;
    
    /**
     * 隐藏
     */ 
    hide(): void;
}
