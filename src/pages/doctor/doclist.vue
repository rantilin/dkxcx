<template>
    <view>
       <view class="xzdatatime">
      <datatime @selectTime="selectTimeEvent"></datatime>
       </view>
    </view>
</template>
<script>
import datatime from '@/components/xiujun-time-selector/datetime.vue'
export default {
  components:{
      datatime
  },
  data() {
    return {
      key: '1'
    }
  },
  methods:{
     selectTimeEvent(value){
       console.log(value)
     }
  }
}
</script>
<style lang="scss" scoped>
page{
  background: #fff;
}
.xzdatatime{
  box-sizing: border-box;
  padding: 20rpx 0 20rpx 32rpx;
}
</style>