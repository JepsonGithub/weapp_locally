const fetch = require('../../utils/fetch')

// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 当前页
    currentPage: 0,
    
    // 每页多少条
    pageSize: 10,

    // 当前加载的分类
    category: {},

    // 当前分类下的所有店铺
    shops: [],

    // 是否正在加载
    isMoreToLoad: true
  
  },

  // 加载更多的方法封装
  loadingMore() {

    this.setData({ currentPage: ++this.data.currentPage } )

    // 请求列表信息, 进行渲染
    fetch(`categories/${this.data.category.id}/shops`, { _page: this.data.currentPage, _limit: this.data.pageSize }).then(res => {
      // 获取当前一共多少条数据, 计算出下次是否有更多的数据进行进行渲染了
      let totalLength = res.header["X-Total-Count"]
      let totalPages = Math.ceil((totalLength / this.data.pageSize))
      let isMoreToLoad = this.data.currentPage < totalPages ? true : false

      // 将计算出来是否下次可以加载更多内容同步到数据源中
      this.setData({ isMoreToLoad : isMoreToLoad } )

      // 将请求到的数据拼接渲染到页面中
      let shops = res.data
      shops = shops.concat( this.data.shops )

      // 动态更新商品列表信息
      this.setData({ shops })
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cat = options.cat || 1;

    this.setData({ 'category.id': cat  } )

    // 请求标题, 进行渲染
    fetch(`categories/${cat}`).then( res => {
      // 拿到标题栏数据, 设置给标题
      let title = res.data.name

      // 动态更新到data中
      this.setData({ 'category.title':  title })

      // 动态设置当前页面的标题
      wx.setNavigationBarTitle({
        title: title
      })
    })

    // 一进来先触发一次加载第一页的数据
    this.loadingMore()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log( "上拉事件触发" )
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

    if ( this.data.isMoreToLoad ) {
      this.loadingMore()
    }

  }

})