<template>
  <view>
    <view class="logintext">
      <view class="headline1">
        请填写您的身份信息
      </view>
      <view class="headline2">加入健康打卡小程序，提高家长与医生的互动交流</view>
    </view>
    <view class="tebidentity">
      <view class="item" :class="status == 2 ?'':'on'" @click="idstats(2)">
        <image class="iconimg" src="../../../static/image/doctor.png"></image>
        <text>我是家长</text>
      </view>
      <view class="item" :class="status == 1 ?'':'on'" @click="idstats(1)">
        <image class="iconimg" src="../../../static/image/patriarch.png"></image>
        <text>我是医生</text>
      </view>
    </view>
    <view class="loginframe">
      <view class="item">
        <text class="uname">小孩姓名:</text>
        <input type="text" class="logininput" v-model="username" placeholder="请输入小孩姓名" />
      </view>
      <view class="item">
        <text class="uname">手机号码:</text>
        <input type="text" class="logininput iphoneinput" v-model="phone" placeholder="请输入您的手机号码" />
        <button @getphonenumber="getPhoneNumber" open-type="getPhoneNumber" class="caution">
          一键获取
        </button>
      </view>
    </view>
    <view class="savebutton" :ripple="true" ripple-bg-color="#909399" @click="postsave">保存信息</view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      phone: '',
      status: 2,
      sessionKey:'',
    }
  },
  onLoad(){
    const _this = this
    if(_this.$db.get('key')){

    }else{
       setTimeout(() => {
          uni.hideToast()
          uni.navigateTo({
            url: '/pages/login/choose/index',
            animationType: 'pop-in',
            animationDuration: 200,
          })
        }, 500)
    }
    // #ifdef MP-WEIXIN
    this.getCode(function(code) {
      var data = {
        code: code
      }
      _this.$api.login1(data, (res)=>{
				 _this.sessionKey = res.session_key
      })
    })
    // #endif
  },
  methods: {
    getCode: function(callback) {
      uni.login({
        // #ifdef MP-ALIPAY
        scopes: 'auth_user',
        // #endif
        success: function(res) {
          if (res.code) {
						console.log(res.code)
            return callback(res.code)
          } else {
            //login成功，但是没有取到code
            this.$common.errorToShow('未取得code')
          }
        },
        fail: function(res) {
          this.$common.errorToShow('用户授权失败wx.login')
        }
      })
    },
    postsave() {
      this.$api.saveUserInfo(
        {
          user_name: this.username,
          user_mobile: this.phone,
          key: this.$db.get('key'),
          type_status: this.status,
        },
        (res) => {
          if (res.code == 200) {
            uni.navigateBack({
              delta: 1,
            })
          }
        }
      )
    },
    idstats(val) {
      this.status = val
    },
    getPhoneNumber(e) {
       this.$api.getphone({
          iv: e.detail.iv,
          encryptedData: e.detail.encryptedData,
					sessionKey: _this.sessionKey
       },res=>{
          console.log(res)
       })
    },
  },
}
</script>
<style lang="scss" scoped>
.logintext {
  margin: auto;
  width: 528rpx;
  margin-top: 151rpx;
  .headline1 {
    font-size: 54rpx;
    font-weight: 500;
  }
  .headline2 {
    color: #666666;
    font-size: 24rpx;
    margin: 40rpx auto 0 auto;
  }
}
.tebidentity {
  width: 686rpx;
  height: 124rpx;
  margin: 100px auto 0 auto;
  background: #f5f7fc;
  border-radius: 12rpx;
  display: flex;
  justify-content: space-between;
  .item {
    width: 50%;
    display: flex;
    align-items: center; /*垂直居中*/
    justify-content: center;
    font-size: 32rpx;
    font-weight: bold;
    color: #333333;
    .iconimg {
      width: 79rpx;
      height: 79rpx;
    }
  }
  .on {
    color: #999999;
  }
}
.loginframe {
  width: 686rpx;
  background: #f5f7fc;
  border-radius: 12px;
  margin: 40rpx auto;
  box-sizing: border-box;
  .item {
    width: 100%;
    padding: 0 56rpx;
    height: 100rpx;
    display: flex;
    align-items: center;
    font-size: 30rpx;
    .uname {
      max-width: 140rpx;
      margin-right: 30rpx;
      font-weight: bold;
    }
    .logininput {
      font-size: 28rpx;
    }
    .caution {
      width: 120rpx;
      height: 42rpx;
      text-align: center;
      border-radius: 8rpx;
      border: 1px solid #ffba4a;
      font-size: 25rpx;
      line-height: 42rpx;
      color: #ffba4a;
      padding: 0;
      margin: 0;
    }
    .iphoneinput {
      width: 290rpx;
    }
  }
}
.savebutton {
  width: 686rpx;
  height: 88rpx;
  margin: 80rpx auto;
  background: #0bc788;
  border-radius: 44rpx;
  color: #fff;
  line-height: 88rpx;
  text-align: center;
}
</style>