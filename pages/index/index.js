const fetch = require("../../utils/fetch")

Page({
  data: {
    // 图片地址列表
    imgUrls: [],
    // grids 列表
    gridsList: [],
    // 是否显示小圆点
    indicatorDots: true,
    // 是否自动轮播
    autoplay: true,
    // 轮播间隔
    interval: 5000,
    // 播放时长
    duration: 1000
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 轮播图数据渲染
    fetch( "slides" ).then(res => {
      console.log( res.data )
      this.setData({ "imgUrls": res.data });
    })

    // grid 列表渲染
    fetch("categories").then(res => {
      this.setData({ "gridsList": res.data });
    })

    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log( res )
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log( 123 )
        console.log(res.errMsg)
      }
    })
    
  },
})