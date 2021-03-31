<template>
  <view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      key: '',
    }
  },
  onLoad(pram) {},
  methods: {
    
    name() {
      let data = {
        key: uni.getStorageSync('key'),
        user_id: uni.getStorageSync('user').ID,
        type: 'add',
      }
      this.$api.docaddcalss(data, (res) => {
        if (res.code == 200) {
          uni.showToast({
            title: '加入成功',
          })
          setTimeout(function () {
            uni.navigateBack(1)
          }, 2000)

          return
        }
      })
    },
  },
}
</script>