// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxData: [{ id: 'a', value: 'aaaaa', isChecked: true }, { id: 'b', value: 'bbbbb', isChecked: false }, { id: 'c', value: 'ccccc', isChecked: true }, { id: 'd', value: 'dddd', isChecked: false }],
    placeHolder:'请输入不为空的用户',
    radioData: [{ id: 'a', value: 'aaaaa', isChecked: false }, { id: 'b', value: 'bbbbb', isChecked: false }, { id: 'c', value: 'ccccc', isChecked: true }, { id: 'd', value: 'dddd', isChecked: false }],
    pickerData : ['长沙','株洲','湘潭','益阳'],
    index : 0,
     multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫'],['虫卵','幼体','成体']],
    multiIndex: [0, 0, 0,0],
    region: ['广东省', '广州市', '海珠区']

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
  },
  form_submit :function(e){
    console.log(e.detail.value);
  },
  form_reset : function(e){
    console.log(e);
  },
  labelChange : function(e){
    let checkIds = e.detail.value;
    let changed = {};
    for (let i = 0; i < this.data.radioData.length;i++){
      if(checkIds.indexOf(this.data.radioData[i].id)!=-1){
        changed['radioData[' + i + '].isChecked'] = true;
      }else{
        changed['radioData[' + i + '].isChecked'] = false;
      }
    }
    this.setData(changed);
  },
  bindPickerChange : function(e){
    this.data.index = e.detail.value;
    this.setData({
      index: this.data.index
    })
  },
  bindMultiPickerChange : function(e){
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }

})