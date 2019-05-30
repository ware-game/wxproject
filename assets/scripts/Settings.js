//剪纸设置
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //根据屏幕高度调整全局显示内容的位置
        this.GlobalData = cc.find('GlobalData');
        //this.GlobalData.resize(this.container);
        //根据屏幕高度调整游戏内容的位置
        //this.contentOffsetHeight = 0;
        //if (cc.view.getVisibleSize().height > 1150) {
        //this.contentOffsetHeight = 105;
        //}
        //this.gameContent.y = this.gameContent.y - this.contentOffsetHeight;
    },

    btnAction(event, eventData){
        /*
        if (eventData === 'clearBtn') {
            let recordScore = 0;
            cc.sys.localStorage.setItem('recordScore', recordScore);
            this.recordLabel.string = recordScore;
        } else */
        if (eventData === 'menuBtn') {
            cc.director.loadScene('Menu');
        } else if (eventData === 'restartBtn') {
            cc.director.loadScene('Game');
        } else if (eventData === 'backBtn') {
            this.node.destroy();
            event.stopPropagation();
        }
    },

    start () {

    },

    // update (dt) {},
});
