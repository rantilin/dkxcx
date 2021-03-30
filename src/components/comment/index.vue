<template>
 <view class="">
    <view class="comment">
    <view class="title" >
      <u-icon
        size="32"
        name="../../static/image/give.png"
         
      ></u-icon>
      <text class="item" v-for="(item,index) in list" :key="index">{{item.user_name}}</text>
    </view>
    <view class="usercom">
      <view class="user">
        <view class="name">
          点评医生：{{comList[0].user_name}}医生
        </view>
        <view class="right">
           <view class="but1">
              回复
           </view>
           <view class="but2">
             咨询
           </view>
        </view>
      </view>
      <view class="content">
           {{comList[0].content}}
      </view>
    </view>
    <view class="nestcontent"  v-for="(item,index) in comList" :key="index">
      <view class="" v-if="item.type_status==1&&index!=0">
        <text class="name">{{item.user_name}}医生</text>回复<text class="name">{{user_name}}{{item.type_status==2?'医生':'家长'}}</text>：{{item.content}}
      </view>
      <view class="" v-if="item.type_status==2&&index!=0">
        <text class="name">{{item.user_name}}家长</text>回复<text class="name">{{comList[0].user_name}}医生</text>：{{item.content}}
      </view>
    </view>
  </view>
 </view>
</template>
<script>
export default {
  props:['list','comList','user_name'],
  data() {
    return {
    }
  },

  created(){
    console.log(this.list);
  },
  watch:{
    list(value){
      console.log(value,11);
    }
  }
}
</script>
<style lang="scss" scoped>
.comment {
  width: 100%;
  background: #f8f9fa;
  border-radius: 4px;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: solid 1px #ebebeb;
    padding: 15rpx 24rpx;
    flex-wrap: wrap;
    .item {
      color: #0bc788;
      font-size: 24rpx;
      margin: 0 5rpx;
    }
  }
  .usercom {
    width: 100%;
    color: #999999;
    .user {
      padding: 20rpx 30rpx 10rpx 30rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
        color: #999999;
        font-size: 26rpx;
      }
      .right {
        display: flex;
        text-align: center;
        justify-content: flex-end;
        font-size: 24rpx;
        .but1 {
          width: 82rpx;
          line-height: 42rpx;
          border-radius: 6rpx;
          color: #ffba4a;
          border: 1px solid #ffba4a;
          margin: 0 10rpx;
        }
        .but2 {
          width: 82rpx;
          line-height: 42rpx;
          background: #0bc788;
          color: #fff;
          border-radius: 6rpx;
        }
      }
    }
    .content{
       font-size: 26rpx;
       color: #444444;
       line-height: 35rpx;
       padding: 0 24rpx;
       margin: 10rpx auto;
    } 
  }
  .nestcontent{
       padding: 0 24rpx;
       margin: 10rpx auto;
       font-size: 26rpx;
       color: #444444;
       line-height: 35rpx;
       .name{
          color: #999999;
       }
  }
}
</style>