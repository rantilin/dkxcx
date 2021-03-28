<template>
  <view>
     <view class="assignment" v-for="(item,index) in signTaskList" :key='index'  @tap='gotask(item,2)'>
          <view class="title">
            {{item.issue_time}}
          </view>
          <view class="task">
            <view class="onetitle">
              <u-avatar :src="item.user_avatar" class="portrait" size="76"></u-avatar>
              <view class="introduce">
                <view class="title">
                  {{item.task_title}}
                </view>
                <view class="textinfo">
                  <text class="one">{{item.user_name}}</text>
                  <text class="two">医生</text>
                  <text class="three">发布于{{item.i_time}}</text>
                </view>
              </view>
              <view class="datetime" v-if="item.task_status==0">第{{item.day}}天</view>
              <view class="datetime on" v-if="item.task_status==1">已结束</view>
            </view>
            <view class="twodepartment">
              科室:{{item.app_name}}
            </view>
            <view class="describe">
              {{item.describes}}
            </view>
            <view class="info" v-if="item.issue_name=='已打卡'">
              <image src="../../static/image/accomplish.png" mode="widthFix" class="d-icon"></image>
              <text class="d-text">已打卡</text>
            </view>
            <view class="info" v-if="item.issue_name=='已结束'">
              <text class="d-text">已结束打卡</text>
            </view>
            <view class="info" v-if="item.issue_name=='未打卡'">
              <image src="../../static/image/proceed.png" mode="widthFix" class="d-icon"></image>
              <text class="d-text on">去打卡</text>
            </view>
          </view>
        </view>
  </view>
</template>
<script>
export default {
  props: {
    signTaskList: {
      type: Array,
      default: []
    },
  },
  data() {
    return {
      key: ''
    }
  },
  methods:{
    gotask(e,type) {
	  let task_id=0
	  if(e.task_id){
		task_id = e.task_id
	  }else{
		  task_id = e.ID
	  }
	  e.time = this.$common.timeToDate(new Date(e.time).getTime(),true)
      uni.navigateTo({
        url: "/pages/task/index?department_id="+e.department_id+"&time="+e.time+"&task_id="+task_id+"&type="+type,
      });
    },
  }
}
</script>
<style lang="scss" scoped>
    .assignment {
    width: 686rpx;
    margin: 32rpx auto;

    .title {
      font-size: 36rpx;
      font-weight: bold;
      color: #333333;
      line-height: 40rpx;
      text-indent: 10rpx;
    }

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
            font-size: 30rpx;
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

        .datetime {
          width: 120rpx;
          padding: 0 0 0 14rpx;
          height: 30rpx;
          margin-top: 10rpx;
          margin-left: auto;
          font-size: 30rpx;
          font-weight: bold;
          color: #333333;
          line-height: 30rpx;
          border-left: solid 1px #d8d8d8;
        }

        .on {
          color: #AAAAAA;
        }
      }

      .twodepartment {
        color: #666666;
        font-size: 26rpx;
        margin: 15rpx auto 15rpx auto;
      }

      .describe {
        font-size: 28rpx;
        color: #666666;
        line-height: 40rpx;
      }

      .listbox {
        width: 100%;
        margin-top: 20rpx;
        display: flex;

        .itembox {
          flex: 4;
          text-align: center;
        }

        .textone {
          font-size: 40rpx;
          color: #333333;
          line-height: 80rpx;
        }

        .textwo {
          color: #666666;
        }

        .circle {
          margin: 0 auto 3rpx auto;
          font-size: 22rpx;
          color: #666666;
        }
      }
      .docbottom{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .box1{
           color: #333333;
           font-size: 26rpx;
        }
        .box2{
           display: flex;
           .status{
            width: 108rpx;
            line-height: 46rpx;
            background: linear-gradient(118deg, #FFBE74 0%, #FD6E52 100%);
            border-radius: 23rpx;
            color: #fff;
            text-align: center;
            font-size: 26rpx;
            margin-right: 10rpx;
           }
           .on{
              background: #F5F6F7;
              color: #666666;
           }
        }
      }
      .line{
        width: 100%;
        height: 1px;
        margin: 32rpx auto;
        background: #EBEBEB;
      }
    }

    .info {
      margin-top: 30rpx;
      border-top: solid 1px #EBEBEB;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80rpx;

      .d-icon {
        margin-top: 5rpx;
        width: 28rpx;
        height: 28rpx;

      }

      .d-text {
        color: #999999;
        font-size: 30rpx;
        margin-left: 10rpx;
        font-weight: bold;
      }

      .on {
        color: #0BC788;
      }
    }

  }

</style>