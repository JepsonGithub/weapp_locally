const fetch = require('../../utils/fetch')

// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 当前页
    page: 1,
    
    // 每页多少条
    limit: 10,

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
    console.log(this.data.shops )

    // 请求标题, 进行渲染
    fetch(`categories/${cat}`).then( res => {
      // 拿到标题栏数据, 设置给标题
      let title = res.data.name

      // 动态更新到data中
      this.setData({ category: { title: title } })

      // 动态设置当前页面的标题
      wx.setNavigationBarTitle({
        title: title
      })
    })

    // 请求列表信息, 进行渲染
    fetch(`categories/${cat}/shops`, { _page: this.page, _limit: this.limit }).then( res => {
      console.log( res.data )
      // 动态更新商品列表信息
      this.setData({ shops: res.data })
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