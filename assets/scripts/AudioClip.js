//剪纸音效
cc.Class({
    extends: cc.Component,

    properties: {
        bgMusic: {
            url: cc.AudioClip,
            default: null
        },
        mute: false
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },

    playBgMusic () {
        if (!this.mute && this.bgMusicChannel === undefined) {
            this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, true, 0.5);
        }
    },

    onDestroy () {

    },

    switchMute () {
        this.mute = !this.mute;
        if (this.mute) {
            this.stopBgMusic();
        } else {
            this.playBgMusic();
        }
    },

    stopBgMusic () {
        if (this.bgMusicChannel !== undefined) {
            cc.audioEngine.stop(this.bgMusicChannel);
            this.bgMusicChannel = undefined;
        }
    },

    playSound (sound, vol) {
        if (!this.mute) {
            cc.audioEngine.play(this[sound], false, vol || 1);
        }
    },

    start () {

    },

    // update (dt) {},
});
