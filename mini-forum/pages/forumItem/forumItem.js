// pages/indexItem.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    topic:"#今日股票暴涨玄机#",
    commentContent:"全民讨论开始啦！快来参与！请按照全民讨论开始啦！开始参与！请按照全民讨论开始啦！开始参与！请按照全民讨论开始啦！开始参与！请按照全民讨论开始啦！开始参与！请按照全民讨论开始啦！开始参与！请按照全民讨论开始啦！开始参与！请按照全民讨论开始啦！开始参与！请按照全民讨论开始啦！开始参与！请按照全民讨论开始啦！开始参与！请按照全民讨论开始啦！开始参与！请按照全民讨论开始啦！开始参与！请按照全民讨论开始啦！开始参与！",
    img:"img01.jpg",
    user:{
      userHead:"head-01.jpg",
      userName:"我叫不知道",
      comments:[{
        responseId:'1',
        userHead:"head-02.jpg",
        userName:"疯狂的蚂蚁",
        content:"帖子写的不错！",
        publishTime:"1小时前",
        likeNum:"38111",
        collected:0
      },{
          responseId: '2',
          userHead: "head-02.jpg",
          userName: "嘻嘻",
          content: "帖子写的不错，点赞！",
          publishTime: "2小时前",
          likeNum: "460",
          collected:0
        }, {
          responseId: '3',
          userHead: "head-03.jpg",
          userName: "疯狂的蚂蚁",
          content: "帖子写的不错！",
          publishTime: "1小时前",
          likeNum: "9400",
          collected: 0
        }]
    },
  },
  //返回上一层
  back(){
    wx.navigateBack({
      delta: 1
    })
  },
  //赞
  toCollect(e){
    var index = e.currentTarget.dataset.index;
    var cookie_responseId = wx.getStorageSync('zan') || [];//获取全部点赞的responseId
    var responseId = e.currentTarget.dataset.responseId;
    var user_obj = this.data.user;
    var comments_obj = this.data.user.comments;
    var o_obj;
    if (cookie_responseId.includes(responseId)) {
      comments_obj[index].likeNum = parseInt(comments_obj[index].likeNum) - 1;
      cookie_responseId.shift(responseId);
      comments_obj[index].collected=0;
    }else{
      for (let i = 0; i < comments_obj.length;i++){
        if (responseId===comments_obj[i].responseId){
          comments_obj[i].likeNum = parseInt(comments_obj[i].likeNum)+1;
          cookie_responseId.unshift(responseId);
          comments_obj[index].collected = 1;
        }
      }
    }
    wx.setStorageSync("zan", cookie_responseId);
    user_obj.comments=comments_obj;
    this.setData({
      user: user_obj
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var cookie_responseId = wx.getStorageSync('zan') || [];//获取全部点赞的responseId  
    var user_obj=this.data.user;
    var comments_obj = user_obj.comments;
    for (let i = 0; i < comments_obj.length;i++){
      if (cookie_responseId.includes(comments_obj[i].responseId)){
        comments_obj[i].collected = 1;
      }
    }
    user_obj.comments = comments_obj;
    this.setData({
      user: user_obj
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})