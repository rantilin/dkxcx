<template>
<view class="content">
  <view class="cradnull" v-if="!datalist">
    <view class="cardnum1">
      <image class="cardimg" src="../../static/image/cardnull.png" mode=""></image>
    </view>
    <view class="cardtitle">
      暂无就诊人
    </view>
    <view class="cardadd" @click="goadd">立即增加</view>
  </view>
  <view class="cardlist">

    <view class="carddefault">
      <view class="listone">
        <view class="name">姓名：小明</view>
        <view class="isdefault">默认</view>
      </view>
      <view class="listwo">
        性别：男
      </view>
      <view class="listree">
        <view class="card">
          院内就诊卡：<text>20200361666</text>
        </view>
        <view class="edit">
          编辑<u-icon name="arrow-right" color="#ffffff" size="26"></u-icon>
        </view>
      </view>
    </view>

    <view class="listcard">
      <view class="namecard">
        <view class="name">
          小明<text class="sex">男</text>
        </view>
        <view class="card">
          院内就诊卡：<text class="cardnum">20200361666</text>
        </view>
      </view>
      <div class="wire"></div>
      <div class="edit">编辑</div>
    </view>

    <view class="listcard">
      <view class="namecard">
        <view class="name">
          小明<text class="sex">男</text>
        </view>
        <view class="card">
          院内就诊卡：<text class="cardnum">20200361666</text>
        </view>
      </view>
      <div class="wire"></div>
      <div class="edit">编辑</div>
    </view>

    <view class="listcard">
      <view class="namecard">
        <view class="name">
          小明<text class="sex">男</text>
        </view>
        <view class="card">
          院内就诊卡：<text class="cardnum">20200361666</text>
        </view>
      </view>
      <div class="wire"></div>
      <div class="edit">编辑</div>
    </view>
    <view class="listcard">
      <view class="namecard">
        <view class="name">
          添加就诊人
        </view>
        <view class="card">
          还可添加1人
        </view>
      </view>
      <div class="add">
        <u-icon name="plus" color="#25C087" size="40"></u-icon>
      </div>
    </view>
  </view>
</view>
</template>

<script>
export default {
  data() {
    return {
      datalist: []
    }
  },
  methods: {
    goadd() {
      uni.redirectTo({
        url: 'add'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding-top: 32rpx;
}

.cradnull {
  width: 100%;

  .cardnum1 {
    margin-top: 78rpx;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .cardimg {
      width: 518rpx;
      height: 556rpx;
    }
  }

  .cardtitle {
    color: #999999;
    font-size: 32rpx;
    line-height: 50rpx;
    text-align: center;
  }

  .cardadd {
    width: 279rpx;
    height: 80rpx;
    background: #25C087;
    border-radius: 45px;
    font-size: 32rpx;
    line-height: 80rpx;
    color: #DEFFF4;
    text-align: center;
    margin: 80rpx auto 0 auto;
  }
}

.cardlist {
  width: 100%;

  .carddefault {
    width: 686rpx;
    height: 300rpx;
    box-sizing: border-box;
    background: url(../../static/image/cardbg.png) no-repeat center center/100%;
    border-radius: 8rpx;
    margin: auto;
    display: flex;
    flex-direction: column;

    .listone {

      padding: 30rpx 25rpx 0 25rpx;
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;

      .name {
        width: 200rpx;
        color: #DEFFF4;
        font-size: 30rpx;
      }

      .isdefault {
        width: 60rpx;
        color: #F5E022;
        font-size: 26rpx;

      }
    }

    .listwo {
      width: 100%;
      padding: 0 25rpx 0 25rpx;
      color: #FFFFFF;
      font-size: 30rpx;
      flex-grow: 2;
      line-height: 60rpx;
      box-sizing: border-box;
    }

    .listree {
      width: 100%;
      box-sizing: border-box;
      padding: 0 25rpx 0 25rpx;
      align-self: flex-end;
      line-height: 80rpx;
      display: flex;
      justify-content: space-between;
      font-size: 28rpx;
      color: #DEFFF4;

      .card {
        width: 364rpx;

        .cardnum {
          text-indent: 10rpx;
        }
      }

      .edit {
        width: 82rpx;
      }
    }
  }

  .listcard {
    width: 686rpx;
    height: 142rpx;
    background: #FFFFFF;
    border-radius: 16rpx;
    margin: 40rpx auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .namecard {
      width: 584rpx;
      height: 112rpx;
      display: flex;
      flex-direction: column;

      .name {
        text-indent: 24rpx;
        color: #333333;
        font-size: 26rpx;

        .sex {
          color: #666666;
          margin-left: 20rpx;
        }
      }

      .card {
        text-indent: 24rpx;
        color: #666666;
        font-size: 26rpx;
        line-height: 112rpx;

        .cardnum {
          color: #333333;
          margin-left: 20rpx;
        }
      }
    }

    .wire {
      width: 2rpx;
      height: 110rpx;
      background: #EDEDED;
    }

    .edit {
      width: 100rpx;
      height: 112rpx;
      font-size: 26rpx;
      color: #333333;
      text-align: center;
      line-height: 112rpx;
    }

    .add {
      width: 60rpx;
      height: 60rpx;
      border: 5rpx solid #25C087;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20rpx;
    }
  }
}
</style>
