//剪纸帮助zhongxin
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    backToGame (event) {
        this.node.destroy();
        event.stopPropagation();
    },

    // update (dt) {},
});
