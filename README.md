# framework

1. Menu: 用户帮助

2. Game
  1.用户帮助
  2.音效
  3.截屏（由于cocos creator提供的截屏方式有bug，目前只能截取全屏）
    ->Game.js文档中btnAction （eventData === 'camera'）
    这部分在cocos creator中编译报错，应当注释掉
    然后构建发布微信小游戏前取消注释
    
    另外由于我的ios版本无法进行真机调试，希望可以试一下真机的截屏功能是否可以成功拉取微信分享的页面
    90 wx.shareAppMessage({
    91     imageUrl: res.tempFilePath
    92 });
    
    
  
