const fetch = require("../../utils/fetch")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let shopid = options.item
    fetch( `shops/${shopid}` ).then( res => {
      this.setData({ shop: res.data })
    })

  },

  // 该方法用于图片预览
  preview( e ) {
    wx.previewImage({
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接
      urls: this.data.shop.images // 需要预览的图片http链接列表
    })
  }
})