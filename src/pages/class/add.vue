<template>
  <view>
    <view class="keyinput">
      <input v-model="key" class="keytext" placeholder="请输入科室口令加入科室" />
    </view>
    <view class="buttom"  @click="contip">查找科室</view>
    <view class="listclass" v-if="info">
      <view class="item">
        <u-avatar :src="info.user_avatar" size="88"></u-avatar>
        <view class="nametext">
          <view class="name">
            {{info.app_name}}科室
          </view>
          <view class="twotext">
            <text>管理员:{{info.user_name}}</text>
            <text class="num">人数:{{info.people_num}}人</text>
          </view>
        </view>
        <view class="addbutton" @click="conmax">加入科室</view>
      </view>
    </view>
    <!-- 提示框 -->
    <u-modal v-model="config.iscread" title="提示" :content="config.tiptext" :show-confirm-button="config.confirm"
      :show-cancel-button="config.cancel" confirm-text="知道了" @confirm='lookup'>
    </u-modal>
  </view>
</template>
<script>
export default {
  data() {
    return {
      key: "",
      config: {
        iscread: false,
        tiptext: "",
        confirm: true,
        cancel: false,
      },
      info: false,
    };
  },
  methods: {
    add() {},
    contip() {
      let data = {
        key: uni.getStorageSync("key"),
        app_watchword: this.key,
        user_id: uni.getStorageSync("user").ID,
        type: "cha",
      };
      this.$api.lookup(data, (res) => {
        if(res.code==200){
          this.info = res.datas;
        }else{
            uni.showToast({
              title:res.datas.error,
              icon:"none"
            })
        }
      });
      //  this.config.cancel = true
      //  this.config.confirm = true
      //  this.config.tiptext = '确认此科室是否正确，防止错加乱加 以免造成数据错误！'
      //  this.config.iscread = true
    },
    conmax() {
      let data = {
        key: uni.getStorageSync("key"),
        user_id: uni.getStorageSync("user").ID,
        type: "add",
        people_num: this.info.people_num,
        ID: this.info.ID,
      };
      this.$api.lookup(data, (res) => {
        console.log(res);
        if (res.code == 200) {
          uni.showToast({
            title: "加入成功",
          });
          setTimeout(function(){uni.navigateBack(1)},2000)
          
          return;
        }
        // this.info = res.datas
        this.config.cancel = true;
        this.config.confirm = false;
        this.config.tiptext = res.datas.error;
        this.config.iscread = true;
         setTimeout(function(){uni.navigateBack(1)},2000)
      });
    },
    lookup() {},
  },
};
</script>
<style lang="scss" scoped>
.keyinput {
  width: 100%;
  margin: 30rpx auto 100rpx auto;
  .keytext {
    text-indent: 32rpx;
    width: 100%;
    background: #ffffff;
    font-size: 32rpx;
    height: 89rpx;
  }
}
.buttom {
  width: 686rpx;
  height: 88rpx;
  margin: auto;
  border-radius: 50rpx;
  text-align: center;
  line-height: 88rpx;
  background: #0bc788;
  color: #ffffff;
}
.listclass {
  width: 686rpx;
  margin: auto;
  margin-top: 56rpx;
  .item {
    width: 686rpx;
    height: 124rpx;
    background: #ffffff;
    border-radius: 12rpx;
    display: flex;
    align-items: center;
    padding: 0 24rpx;
    .nametext {
      width: 400rpx;
      margin-left: 16rpx;
      .name {
        color: #333333;
        font-size: 32rpx;
        margin-bottom: 8rpx;
      }
      .twotext {
        font-size: 24rpx;
        color: #666666;
        .num {
          margin-left: 30rpx;
        }
      }
    }
    .addbutton {
      margin-left: auto;
      width: 130rpx;
      height: 52rpx;
      font-size: 24rpx;
      color: #fff;
      line-height: 52rpx;
      border-radius: 30rpx;
      background: #0bc788;
    }
  }
}
</style>