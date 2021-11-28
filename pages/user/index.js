// pages/user/index.js
// 获取应用实例
var app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 个人信息部分
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,

    // 意见反馈部分
    motto: "Hello World",
  },

  /* 以下为个人信息处理的函数 */
  //#region
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  onShow(){
    const userInfo = wx.getStorageSync("userInfo")||{};
    // console.log("类型="+typeof(userInfo));
    let hasUserInfo = false;
    userInfo.data
    if(Object.keys(userInfo).length !== 0){ // es6对象判空方法
      hasUserInfo=true;
    }
    this.setData({
      userInfo,
      hasUserInfo
    })
  },

  /** 获取用户的信息
   * @param {*} e 
   */
  handleGetUserProfile(e){
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        // 保存到页面
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        // 保存到缓存
        wx.setStorageSync("userInfo", res.userInfo);
      }
    })
  },

  /** 获取用户的信息(已过时)
   * 
   */
  handleGetUserInfo(e){
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // onShow(){
  //   const userinfo=wx.getStorageSync("userinfo");
  //   this.setData({
  //     userinfo
  //   })
  // }
  
  //#endregion

  /* 以下为意见反馈部分的函数 */
  //#region
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../feedback/index'
    })
  },
  //扫一扫
  scanCode: function () {
    wx.scanCode({
      success: (res) => {

        this.setData({
          userInfo: res.result
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '热点记事本反馈系统组件',
      desc: '小程序二维码精准统计平台hotapp,技术讨论QQ群：173063969',
      path: '/pages/about/index?hotappPath=about'
    }
  }


  //#endregion
})