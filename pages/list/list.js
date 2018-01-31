const fetch = require('../../utils/fetch')

// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 当前加载的分类
    category: {},

    // 当前分类下的所有店铺
    shops: []
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cat = options.cat || 1;
    // 请求标题, 进行渲染
    fetch(`categories/${cat}`).then( res => {
      console.log( res )
      // 拿到标题栏数据, 设置给标题
      let title = res.data.name
      // 动态设置当前页面的标题
      wx.setNavigationBarTitle({
        title: title
      })
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