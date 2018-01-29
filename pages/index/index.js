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
    wx.request({
      // 在手机上没有所谓的域, 所以没有跨域的概念
      url: 'https://locally.uieee.com/slides',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: res => {
        // success
        console.log( res.data )
        if ( res.statusCode === 200 ) {
          this.setData({
            "imgUrls": res.data
          })
        }
        
      }
    })

    // grid 列表渲染
    wx.request({
      url: "https://locally.uieee.com/categories",
      data: {},
      method: "GET",
      success: res => {
        console.log( res )
        if ( res.statusCode === 200 ) {
          this.setData({
            gridsList: res.data
          })
        }
      }
    })
  },
})