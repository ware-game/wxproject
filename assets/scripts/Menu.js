//剪纸菜单
cc.Class({
    extends: cc.Component,

    properties: {
        GlobalData: cc.Node, //适配iphoneX
        AudioClip: cc.Node,
        wxlogin: cc.Sprite,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.game.addPersistRootNode(this.GlobalData);
        cc.game.addPersistRootNode(this.AudioClip);
        if (!(cc.sys.platform === cc.sys.WECHAT_GAME)){
            console.log('非微信平台');
            return;
          }
        //开启微信被动转发
        wx.showShareMenu({
            withShareTicket: true
          });
        wx.onShareAppMessage(function () {
            return {
              title: '剪纸小游戏',
              imageUrl: canvas.toTempFilePathSync({
                destWidth: 400,
                destHeight: 600
              }),
              success(res){
                console.log('res', res)
              },
              fail(res){
                console.log('resErr分享失败',res)
              }
            }
          });           
    },

    btnAction(event, eventData){
        let that = this;
        if (eventData === 'help') {
            cc.loader.loadRes('Help', function (err, prefab) {
                var help = cc.instantiate(prefab);
                that.node.addChild(help);
            })
        }

    },

    playGame: function () {
        cc.director.loadScene("Game");
        if (!(cc.sys.platform === cc.sys.WECHAT_GAME)){
            return;
        }
        try {
            wx.getUserInfo({
                //openIdList: ['selfOpenId'],
                lang: 'zh_CN',
                success: function (res) {
                    console.log('success', res.userInfo);
                },
                fail: function (res) {
                    reject(res);
                    console.log("fail", res);
                }
            });
        } catch (error) {
            console.log("get wx.userinfo is fail" + error);
        }
    },

    getPhoto: function () {
        
    },

    start () {

    },

    // update (dt) {},
});
