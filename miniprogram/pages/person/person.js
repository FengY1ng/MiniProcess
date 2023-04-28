Page({
  data: {
    userInfo: {}, // 用户信息
    bgImg: '', // 背景图片
  },

  //授权登录
  login(){
    wx.getUserProfile({
      desc: '授权后才能继续使用',
    })
    .then(res=>{
      let user=res.userInfo
      //把用户信息缓存到本地
      wx.setStorageSync('user', user)
      this.setData({
        userInfo:user
      })
    })
    .catch(err=>{
      console.log('授权失败',err)
    })
  },

  //退出登录
  logout(){
    this.setData({
      userInfo:''
    })
    wx.setStorageSync('user',null)
  },

  onLoad(options) {
    let user = wx.getStorageSync('user')
    this.setData({
      userInfo:user
    })
    wx.cloud.init({
      env:'cloud1-2giqld0ibe3d3833',
      traceUser:true,
    })
    wx.cloud.callFunction({
      name:'getOpenId',
      data:{}
    })
    .then(res=>{
      console.log(res)
      let openid=res.result.openid
      wx.setStorageSync('openid', openid)
    })
    .catch(err=>{
      console.log('获取openid失败')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
