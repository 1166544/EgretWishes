class Main extends eui.UILayer {

    protected createChildren(): void 
    {
        super.createChildren();
        
        // 载入默认主题 
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        
        // 添加子容器
        var container: CountAppContainer = new CountAppContainer();
        this.addChild(container);
    }
}

