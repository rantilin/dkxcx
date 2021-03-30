<template>
  <view>
     <view class="common" v-for="(item,index) in indexList" :key='index' @tap='gotask(item,1)'>
          <view class="task">
            <view class="onetitle">
              <u-avatar :src="item.user_avatar" class="portrait" size="76"></u-avatar>
              <view class="introduce">
                <view class="title">
                  {{item.user_name}}
                </view>
                <view class="textinfo">
                  <text class="one">科室:</text>
                  <text class="two">{{departmentName}}</text>
                  <text class="three">发布于{{item.app_time}}</text>
                </view>
              </view>
              <view class="clockime">已打卡{{item.day}}天</view>
            </view>
            <view class="carddetail">
              <view class="contdetail">
                {{item.content}}
              </view>
              <view class="imglist">
                <view class="item" v-for="(itemChild,index1) in item.fileid_route" :key='index1'>
                  <u-image :src="itemChild.fileid_route" width="174" height="157"></u-image>
                </view>
              </view>
              <view class="bottom">
                <u-icon size="32" @tap='giveFabulous(item.ID)' class="d-icon" name="../../../static/image/give.png">
                </u-icon>
              </view>
            </view>
          </view>
        </view>
  </view>
</template>
<script>
export default {
  props: {
    indexList: {
      type: Array,
      default: []
    },
  },
  data() {
    return {
      key: ''
    }
  },
  methods: {
    giveFabulous(id) {
      //点赞
      let data = {
        key: this.key,
        user_id_active: this.userInfo.ID,
        clock_id: id,
      };
      this.$api.fabulous(data, (res) => {
        if (res.code == 200) {
          uni.showToast({
            title: "点赞成功",
          });
        }
      });
    },

  },
}
</script>
<style lang="scss" scoped>
 .common {
    width: 686rpx;
    margin: 32rpx auto;

    .task {
      margin-top: 24rpx;
      width: 100%;
      background: #ffffff;
      border-radius: 12rpx;
      padding: 24rpx;

      .onetitle {
        width: 100%;
        display: flex;

        .portrait {
          width: 38rpx;
          margin: 10rpx 24rpx 0 0;
        }

        .introduce {
          width: 400rpx;

          .title {
            font-size: 32rpx;
            color: #333333;
            font-weight: bold;
          }

          .textinfo {
            width: 100%;
            padding: 6rpx 0 10rpx 6rpx;

            .one {
              font-size: 28rpx;
              color: #333333;
            }

            .two {
              color: #666666;
              font-size: 24rpx;
              margin: 0 10rpx;
            }

            .three {
              color: #999999;
              font-size: 24rpx;
            }
          }
        }

        .clockime {
          width: 150rpx;
          height: 46rpx;
          line-height: 46rpx;
          background: #F5F6F7;
          border-radius: 23rpx;
          font-size: 24rpx;
          color: #0BC788;
          text-align: center;
        }

        .on {
          color: #AAAAAA;
        }
      }

      .carddetail {
        width: 550rpx;
        margin-left: 105rpx;

        .contdetail {
          width: 100%;
          font-size: 28rpx;
          line-height: 40rpx;
          color: #666666;
        }

        .imglist {
          width: 100%;
          margin: 24rpx auto;
          display: flex;

          .item {
            width: 174rpx;
            height: 157rpx;
          }

          .item:nth-child(2) {
            margin: 0 10rpx;
          }
        }

        .bottom {
          width: 95%;
          margin: auto;
          display: flex;

          .d-icon {
            margin-left: auto;
          }
        }
      }
    }
  }

</style>