// pages/media/media.js
var audioCxt;
var audioAnimation;
audioCxt = wx.createInnerAudioContext();
audioCxt.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audioAnimation : null,
    music_on : true,
    music_playing :true,
    musicTime : '00:00',
    sliderValue : 0
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
   
    // audioCxt.autoplay = true;
    audioCxt.onEnded((res) =>{
      console.log("onEnded");
      this.data.music_on = false;
      this.setData({
        music_on: this.data.music_on
      })

      audioCxt.seek(0);
      this.setData({
        musicTime: '00:00',
        sliderValue: 0
      })
    }),
    audioCxt.onPlay((res) =>{
      audioCxt.onTimeUpdate((res) => {
        var time = audioCxt.currentTime;
        var percent = Math.round(time / audioCxt.duration * 100) ;
        this.setData({
          musicTime: this.musicTimeFormat(time),
          sliderValue: percent
        })
      })
    })
    
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

  },
  playMusic : function(){
    this.data.music_on = true; 
    this.data.music_playing = true;
    audioCxt.play();
    this.setData({
      music_on: this.data.music_on,
      music_playing: this.data.music_playing
    })
  },
  pauseMusic : function(){
    this.data.music_on = true;
    this.data.music_playing = false;
    audioCxt.pause();
    this.setData({
      music_on: this.data.music_on,
      music_playing: this.data.music_playing
    })
  },
  stopMusic : function(){
    audioCxt.stop();
    this.data.music_on = false;
    this.setData({
      music_on: this.data.music_on
    })
  },
  audioChange : function(e){
    var length = audioCxt.duration;
    var percent = e.detail.value;
    var musicTime = Math.round(length/100*percent);
    audioCxt.seek(musicTime);
    console.log(audioCxt.currentTime);

    this.setData({
      musicTime: this.musicTimeFormat(musicTime)
    })
  },
  //拖动
  audioChanging : function(e){},
  musicTimeFormat : function(time){
    var second = Math.floor(time % 60);
    if(second<10){
      second = '0' + second;
    }
    var minute = Math.floor(time / 60);
    if (minute < 10) {
      minute = '0' + minute;
    }
    return minute + ':' + second;
  }
})