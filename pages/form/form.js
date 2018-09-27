// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxData: [{ id: 'a', value: 'aaaaa', isChecked: true }, { id: 'b', value: 'bbbbb', isChecked: false }, { id: 'c', value: 'ccccc', isChecked: true }, { id: 'd', value: 'dddd', isChecked: false }]
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
    var arrays = [1,2,3];
    console.log(arrays.indexOf(5));
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

  },
  getUserInfo: function(e){
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },

  checkbox_change : function(e){
    var checkIds = e.detail.value;
    for (let item of this.data.checkboxData) {
      if (checkIds.indexOf(item.id) >-1){
        item.isChecked = true;
      }
      else{
        item.isChecked = false;
      }
    }
    console.log(checkIds)
    this.setData({
      checkboxData: this.data.checkboxData
    })
  }
})