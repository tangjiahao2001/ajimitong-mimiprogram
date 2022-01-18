// pages/xuexiziyuan_package/pages/PPT/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ppts:[
      {
        id:0,
        name:"湖南师范大学官方PPT",
        url:"https://pan.baidu.com/s/1pta7DVJv7XVDULrN2r4L8w?pwd=1234"
      },
      {
        id:1,
        name:"★ins风PPT",
        url:"https://pan.baidu.com/s/1c33KfE1BecVqkQLu90rTBQ?pwd=1234"
      },
      {
        id:2,
        name:"17套扁平风格PPT模板",
        url:"https://pan.baidu.com/s/1uTZzGoSt2ZSswuiN94LSXA?pwd=1234"
      },
      {
        id:3,
        name:"25套简约PPT模板",
        url:"https://pan.baidu.com/s/1vD4Nuair8wl0oCEG1MFang?pwd=1234"
      },
      {
        id:4,
        name:"36套孟菲斯风格PPT",
        url:"https://pan.baidu.com/s/1xqixbQJenhRc1UcBzEBilA?pwd=1234"
      },
      {
        id:5,
        name:"40套简约风PPT",
        url:"https://pan.baidu.com/s/15Lz6mA9jtetuUDinBxAViA?pwd=1234"
      },
      {
        id:6,
        name:"40套莫兰迪系列PPT",
        url:"https://pan.baidu.com/s/1yXBw44ZdNX4qx-H8Q6TIYg?pwd=1234"
      },
      {
        id:10,
        name:"51套秋日PPT",
        url:"https://pan.baidu.com/s/1XW9zD3pxtoBNaY11NNNnlA?pwd=1234"
      },
      {
        id:15,
        name:"58套纯粹简致风PPT模板",
        url:"https://pan.baidu.com/s/14o86FO8Am9msCCjjwKF3Aw?pwd=1234"
      },
      {
        id:17,
        name:"70套宫崎骏治愈系PPT",
        url:"https://pan.baidu.com/s/1j2cdB3W43mjIU2Tu9eFHdQ?pwd=1234"
      },
      {
        id:19,
        name:"86套欧美杂志风PPT",
        url:"https://pan.baidu.com/s/1nA-oxl9ZkoPZInmUKy83RA?pwd=1234"
      },
      {
        id:20,
        name:"88套旅行画册风格PPT",
        url:"https://pan.baidu.com/s/1fBbo8HrP_AKTZn7qNfg9Cg?pwd=1234"
      },
      {
        id:25,
        name:"92套粉色系PPT",
        url:"https://pan.baidu.com/s/1WbiUdBrlwGsAZ0s586WdhQ?pwd=1234"
      },
      {
        id:26,
        name:"98套森系PPT",
        url:"https://pan.baidu.com/s/1U3TgdiHyD17qanqh9RUFZA?pwd=1234"
      },
      {
        id:27,
        name:"100套高级答辩PPT模板",
        url:"https://pan.baidu.com/s/1poGSecQkXLVigiKi1yAECg?pwd=1234"
      },
      {
        id:30,
        name:"300套PPT",
        url:"https://pan.baidu.com/s/1MZ_yIu6cs-TzKob-LBvBPA?pwd=1234"
      },
      {
        id:32,
        name:"440套信息可视化PPT模板",
        url:"https://pan.baidu.com/s/1N5BsKGXPfOIp8qTz9KYJ0w?pwd=1234"
      },
      {
        id:35,
        name:"500套PPT模板",
        url:"https://pan.baidu.com/s/1Hvu-M3SYQEKETM-zAQyH2A?pwd=1234"
      },
      {
        id:39,
        name:"ins风PPT模板2",
        url:"https://pan.baidu.com/s/1BRxxzCbG1mModD6WlSn7yg?pwd=1234"
      },
      {
        id:42,
        name:"PPT87套通用模板",
        url:"https://pan.baidu.com/s/1n78NiRLfdomH5-F0uO6WXw?pwd=1234"
      },
      {
        id:45,
        name:"PPT必备素材库",
        url:"https://pan.baidu.com/s/12TXl6Y61gmmpGt7rortyyg?pwd=1234"
      },
      {
        id:48,
        name:"PPT素材",
        url:"https://pan.baidu.com/s/1CnJq1HPu-p0QvfRC4fecbg?pwd=1234"
      },
      {
        id:50,
        name:"PPT图表",
        url:"https://pan.baidu.com/s/1CDA7KAXHYKoLvlftNTNopg?pwd=1234"
      },
      {
        id:55,
        name:"背景音乐",
        url:"https://pan.baidu.com/s/1ZYP8HvthGMPSeC5UvepJqQ?pwd=1234"
      },
      {
        id:57,
        name:"新拟态风PPT",
        url:"https://pan.baidu.com/s/1F4xPZUxhzw9LbpkttBvNvg?pwd=1234"
      },
      {
        id:60,
        name:"60页版式库",
        url:"https://pan.baidu.com/s/1hiPCIX5_4NuxCltGtwtO_w?pwd=1234"
      },
      {
        id:62,
        name:"40套盐系PPT",
        url:"https://pan.baidu.com/s/1RDT7P9ns28CidsKotwnpPA?pwd=1234"
      },
      {
        id:64,
        name:"103套让你走路带风的快闪风PPT",
        url:"https://pan.baidu.com/s/1R-Hne0qNZGWy2IKiWjv9hA?pwd=1234"
      },
      {
        id:66,
        name:"海蓝风PPT",
        url:"https://pan.baidu.com/s/1ISLGTWc-jgxDdxg-uA1yXg?pwd=1234"
      },
      {
        id:70,
        name:"210套精选PPT模板",
        url:"https://pan.baidu.com/s/112c2KWjW6V-dFlhVoXmHIg?pwd=1234"
      },
      {
        id:74,
        name:"100个高端商务范PPT模板",
        url:"https://pan.baidu.com/s/1MR3LeZa6I5ezoHLwD2El2A?pwd=1234"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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