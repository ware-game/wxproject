//剪纸游戏主体
cc.Class({
    extends: cc.Component,

    properties: {
        sound1Sprite: {
            type: cc.Sprite, 
            default: null
        },
        sound2Sprite: {
            type: cc.Sprite, 
            default: null
        },
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
        //音效
        this.AudioPlayer = cc.find('AudioClip').getComponent("AudioClip");
        //this.AudioPlayer.stopBgMusic();
        this.AudioPlayer.playBgMusic();
        if (this.AudioPlayer.mute) {
            this.sound1Sprite.node.active = false;
            this.sound2Sprite.node.active = true;
        } else {
            this.sound1Sprite.node.active = true;
            this.sound2Sprite.node.active = false;
        }

        //load paper
        //this.paper.on('touchend', this.onDown.bind(this));

    },

    btnAction(event, eventData){
        let that = this;
        if (eventData === 'setting') {
            cc.loader.loadRes('Settings', function (err, prefab) {
                var settings = cc.instantiate(prefab);
                that.node.addChild(settings);
            });
        } else if (eventData === 'help') {
            cc.loader.loadRes('Help', function (err, prefab) {
                var help = cc.instantiate(prefab);
                that.node.addChild(help);
            })
        } else if (eventData === 'sound1') {
            this.AudioPlayer.switchMute();
            this.sound1Sprite.node.active = false;
            this.sound2Sprite.node.active = true;
        } else if (eventData === 'sound2') {
            this.AudioPlayer.switchMute();
            this.sound1Sprite.node.active = true;
            this.sound2Sprite.node.active = false;
        } else if ( (eventData === 'camera') && (cc.sys.platform === cc.sys.WECHAT_GAME)) {
            var can = cc.game.canvas;
            //var X = this.paper.x;
            //var Y = this.paper.y;
            //console.log(X);
            //console.log(Y);
            //var width = this.paper.width;
            //var height = this.paper.height;
            //console.log(width);
            //console.log(height);       
            can.toTempFilePath({
            //x: X,
            //y: Y,
            //width: width,
            //height: height,
            destWidth: cc.winSize.width,
            destHeight: cc.winSize.height,
            fileType: "png",
            quality: 1.0,
            success(res) {
                console.log("截图成功", res);   
                wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: (res) =>{
                    console.log("收藏成功", res);
                    wx.shareAppMessage({
                        imageUrl: res.tempFilePath
                    });
                    wx.hideLoading();
                },
                fail(res) {
                    console.log("收藏失败", res)
                    wx.hideLoading();
                },
                })
            },
            fail(res) {
                console.log("截图失败", res)
                wx.hideLoading();
            },
            })
        }

    },

    start () {

    },

    // update (dt) {},
});
