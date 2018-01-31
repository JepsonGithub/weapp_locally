// 导出一个 fetch promise 请求方法
// fetch(url, data)
module.exports = (url, data) => {
  return new Promise((resolve, reject) => {
    
    // 通过一个异步事件初始化一个 Promise 对象
    wx.request({
      url: `https://locally.uieee.com/${url}`,
      data: data,
      method: 'GET', 
      // 许诺成功了
      success: resolve,
      // 许诺失败了
      fail: reject
    })

  })
}