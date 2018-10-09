// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 113.053608,
    latitude: 28.272259,
    markers: [{
      id: 1,
      latitude: 28.272259,
      longitude: 113.053608,
      title: 'home',
      // iconPath: '/resources/images/cat.jpg',
      width: 30,
      height: 30,
      callout: {
        content: '我是这个气泡',
        fontSize: 14,
        color: '#ffffff',
        bgColor: '#000000',
        padding: 8,
        borderRadius: 4,
        boxShadow: '4px 8px 16px 0 rgba(0)'
      },
      // label : {
      //   x: -24,
      //   y: -50,
      //   content: "this is my house!"
      // },
      bgColor: "#ffffff",
      display: "ALWAYS",
    }],
    flags: [{
      id:1,
      left: 100,
      top: 100
    },{
      id: 2,
      left: 200,
      top: 400
    }],
    circles : [{
      latitude: 28.272259,
      longitude: 113.053608,
      color: '#0000ffAA',
      fillColor: '#000000AA',
      radius : 1000,
      strokeWidth : 10
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  mapTaped: function(e) {
    console.log(e);
  },
  bindpoitap : function(e){
    console.log(e);
  },
  flagTap : function(e){
    let curId = e.currentTarget.id;
    for(let i = 0 ; i < this.data.flags.length;i++){
      let flag = this.data.flags[i];
      if (curId == flag.id){
        this.data.flags.splice(i);
      }
    }
    this.setData({
      flags: this.data.flags
    })
  }
})