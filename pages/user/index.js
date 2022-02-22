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

  //#region 以下为个人信息相关函数
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

  //#region 以下为版本信息相关函数
  handleGetVersionInfo: function () {
    // wx.navigateTo({url: '../user_package/pages/Version/index'})
    wx.navigateToMiniProgram({
      appId: 'wxbcfa40501665ddf7',
      path: 'page/index/index',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        // 打开成功
      }
    })
  },
  //#endregion

  //#region 以下为意见反馈相关函数
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../feedback/index'
    })
  },

  // 意见反馈Bug
  bindViewForBugTap: function () {
    wx.navigateTo({
      url: '../feedbackForBug/index'
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
      title: '阿基米曈',
      desc: '阿基米曈之家',
      path: '/pages/about/index?hotappPath=about'
    }
  },
  //#endregion

  //#region 测试使用
  /**
   * 测试添加模块使用
   */
  handleTestPage: function() {
    wx.navigateTo({url: '../Debug/index'})
  }
  //#endregion
})