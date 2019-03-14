// pages/forum/forum.js
//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')
Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    list: []
  },
  toItem(){
    wx.navigateTo({
      url: '../forumItem/forumItem'
    })
  },
  onLoad: function () {
    //调用应用实例的方法获取全局数据
    this.getData();
  },
  //下拉刷新
  upper: function () {
    this.refresh();
    setTimeout(function () { wx.stopPullDownRefresh(); }, 2000);
  },
  //上拉加载更多
  lower: function (e) {
    var that = this;
    setTimeout(function () { that.nextLoad(); }, 1000);
  },
  //使用本地 fake 数据实现刷新效果
  getData: function () {
    var list = util.getData();
    var list_data = list.data;
    this.setData({
      list: list_data,
    });
  },
  //刷新
  refresh: function () {
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    });
    var list = util.getData();
    var list_data = list.data;
    this.setData({
      list: list_data
    });
    setTimeout(function () {
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
  },
  //使用本地 fake 数据实现继续加载效果
  nextLoad: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 4000
    })
    var next = util.getNext();
    var next_data = next.data;
    this.setData({
      list: this.data.list.concat(next_data),
    });
    setTimeout(function () {
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
  }
})
