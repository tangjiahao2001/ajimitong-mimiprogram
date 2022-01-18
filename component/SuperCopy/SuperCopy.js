// component/SuperCopy/SuperCopy.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      type: String,
      value: "暂无"
    },
    url:{
      type: String,
      value: "暂无"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击一键复制事件
    handleSuperCopy(e){
      var url = this.properties.url;
      wx.setClipboardData({
        data: url
      })
    }
  }
})
