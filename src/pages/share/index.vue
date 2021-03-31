<template>
  <view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      app_watchword: '',
      idtpye: 0,
    }
  },
  onLoad(e) {
     this.initData()
     if(e){
       this.app_watchword == e.code
       this.idtpye = e.type
       if(this.idtpye == 1){
          this.useradd()
       }
       if(this.idtpye == 2){
          this.docadd()
       }
     }
  },
  methods: {
    initData() {
      // 获取用户信息
      let _this = this
      if (_this.$db.get('key')) {
        this.$api.user(
          {
            key: this.$db.get('key'),
          },
          (res) => {
            this.userInfo = res.datas
            this.status = res.datas.type_status
            this.$db.set('user', res.datas)
            if (this.status == 0) {
              uni.navigateTo({
                url: '/pages/login/login/index',
                animationType: 'pop-in',
                animationDuration: 200,
              })
            }
          }
        )
      } else {
        setTimeout(() => {
          uni.navigateTo({
            url: '/pages/login/choose/index',
            animationType: 'pop-in',
            animationDuration: 200,
          })
        }, 500)
      }
    },
    docadd() {
      let data = {
        key: uni.getStorageSync('key'),
        user_id: uni.getStorageSync('user').ID,
        app_watchword: this.app_watchword,
        type: 'add',
      }
      this.$api.adddoc(data, (res) => {
        if (res.code == 200) {
          uni.showToast({
            title: '加入成功',
          })
          setTimeout(function () {
            uni.switchTab({  
                url: '/pages/index/index'  
            });  
          }, 1000)

          return
        }
      })
    },
    useradd() {
      let data = {
        key: uni.getStorageSync('key'),
        user_id: uni.getStorageSync('user').ID,
        app_watchword: this.app_watchword,
        type: 'add',
      }
      this.$api.adduser(data, (res) => {
        if (res.code == 200) {
          uni.showToast({
            title: '加入成功',
          })
          setTimeout(function () {
            uni.switchTab({  
                url: '/pages/index/index'  
            });  
          }, 1000)

          return
        }
      })
    },
  },
}
</script>