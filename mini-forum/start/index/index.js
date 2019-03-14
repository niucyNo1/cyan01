//index.js
const app=getApp()
Page({
  data:{
    statusBarHeight: app.globalData.statusBarHeight,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  onLoad:function(){
    
  },
  
  bindGetUserInfo(e){
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo'] === true) { // 成功授权
          wx.reLaunch({
            url: '../../pages/forum/forum'
          })
        }
      }
    })
  }
})