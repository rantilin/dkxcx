<template>
  <view>
    <view class="xzdatatime">
      <datatime @selectTime="selectTimeEvent"></datatime>
    </view>
    <view v-for="(item,index) in doclist" class="doclist" @click="godetail()" :key="index">
      <view class="listone">
        <image class="docpic" :src="imgurl + item.path" mode="widthFix"></image>
        <view class="textblock">
          <view class="name">{{item.Name}}<text class="zceng">{{item.DocTitle}}</text></view>
          <view>{{item.hosname}}</view>
        </view>
        <view class="score">
          <u-icon
            :label="item.remarkrate"
            label-size="24"
            label-color="#FFC44D"
            size="24"
            name="../../static/image/give.png"
          ></u-icon>
        </view>
      </view>
      <view class="listwo">
        擅长：{{item.DocAdept|cubsub(50)}}
      </view>
      <view class="listree">
        <view class="mstext">
          <text>挂号费:</text>
          <text class="rebold">{{item.RegistrationFee}}</text>
        </view>
        <view class="wybutton">
          挂号
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { apiBaseUrl } from '@/config/config.js';
import datatime from '@/components/xiujun-time-selector/datetime.vue'
export default {
  components: {
    datatime,
  },
  data() {
    return {
      imgurl:apiBaseUrl,
      doclist: [],
      myDate: new Date(),
      ksid:0,
    }
  },
  onLoad(parm) {
    if(parm.id){
      this.ksid=parm.id
      this.getdoctor('',this.ksid)
    }
    
  },
  methods: {
    selectTimeEvent(value) {
      let time = this.myDate.getFullYear() +'-'+value
      this.getdoctor(time,this.ksid)
    },
    godetail() {},
    getdoctor(time, classid) {
      let cutime='';
      if(time){
         cutime = time
      }else{
          cutime =  this.$u.timeFormat(this.myDate, 'yyyy-mm-dd')
      }
      
      this.$api.dotocrdtime(
        {
          hosid:5,
          pbtime: cutime,
          classid: classid
        },
        res => {
          this.doclist = res.data;
        }
      )
    },
  },
  filters:{
     cubsub(value, num){
       if(value.length > num){
         return value.substr(0, num)+'...'
       }else{
         return value
       }
       
     }
  }
}
</script>
<style lang="scss" scoped>
page {
}
.xzdatatime {
  box-sizing: border-box;
  padding: 20rpx 0 20rpx 32rpx;
  background: #fff;
}
.doclist {
  width: 686rpx;
  height: auto;
  background: #ffffff;
  border-radius: 8rpx;
  margin: 32rpx auto;
  padding: 16rpx 24rpx 34rpx 24rpx;

  .listone {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    .docpic{
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
    }
    .textblock {
      width: 400rpx;
      line-height: 45rpx;
      margin: 24rpx;
      font-size: 26rpx;
      color: #333333;

      .name {
        font-size: 28rpx;
        font-weight: bold;

        .zceng {
          font-size: 26rpx;
          color: #666666;
          margin-left: 10rpx;
        }
      }
    }

    .score {
      height: 80rpx;
      margin-right: 0;
    }
  }

  .listwo {
    width: 100%;
    font-size: 26rpx;
    color: #666666;
    line-height: 40rpx;
  }

  .listree {
    width: 100%;
    display: flex;
    margin-top: 36rpx;
    justify-content: space-between;

    .mstext {
      width: 405rpx;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 28rpx;
      color: #666666;
      .rebold {
        color: #ff6633;
        font-weight: bold;
        text-indent: 10rpx;
      }
    }

    .wybutton {
      width: 130rpx;
      height: 60rpx;
      line-height: 60rpx;
      background: #25c087;
      border-radius: 30rpx;
      color: #fff;
      text-align: center;
    }
  }
}
</style>