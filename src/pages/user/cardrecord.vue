<template>
  <view>
    <u-dropdown class="topnav" >
			<u-dropdown-item v-model="value1" title="全部科室" :options="options1"></u-dropdown-item>
		</u-dropdown>
		<scroll-view class="content" scroll-y>
         <view class="assignment">
          <view class="task">
            <view class="onetitle">
              <u-avatar
                src=""
                class="portrait"
                size="76"
              ></u-avatar>
              <view class="introduce">
                <view class="title">
                  多动动日常训练要点
                </view>
                <view class="textinfo">
                  <text class="one">张秋</text>
                  <text class="two">医生</text>
                  <text class="three">发布于02-19 10:28</text>
                </view>
              </view>
            </view>
            <view class="twodepartment">
              科室:多动症
            </view>
            <view class="describe">
              各位家长，由专业医生针对多动症制定了训练…
            </view>
            <view class="info">
              <text class="d-text on">查看打卡记录</text>
            </view>
          </view>
        </view>

				<view class="assignment">
          <view class="task">
            <view class="onetitle">
              <u-avatar
                src=""
                class="portrait"
                size="76"
              ></u-avatar>
              <view class="introduce">
                <view class="title">
                  多动动日常训练要点
                </view>
                <view class="textinfo">
                  <text class="one">张秋</text>
                  <text class="two">医生</text>
                  <text class="three">发布于02-19 10:28</text>
                </view>
              </view>
            </view>
            <view class="twodepartment">
              科室:多动症
            </view>
            <view class="describe">
              各位家长，由专业医生针对多动症制定了训练…
            </view>
            <view class="info">
              <text class="d-text on">查看打卡记录</text>
            </view>
          </view>
        </view>

				<view class="assignment">
          <view class="task">
            <view class="onetitle">
              <u-avatar
                src=""
                class="portrait"
                size="76"
              ></u-avatar>
              <view class="introduce">
                <view class="title">
                  多动动日常训练要点
                </view>
                <view class="textinfo">
                  <text class="one">张秋</text>
                  <text class="two">医生</text>
                  <text class="three">发布于02-19 10:28</text>
                </view>
              </view>
            </view>
            <view class="twodepartment">
              科室:多动症
            </view>
            <view class="describe">
              各位家长，由专业医生针对多动症制定了训练…
            </view>
            <view class="info">
              <text class="d-text on">查看打卡记录</text>
            </view>
          </view>
        </view>

				<view class="assignment">
          <view class="task">
            <view class="onetitle">
              <u-avatar
                src=""
                class="portrait"
                size="76"
              ></u-avatar>
              <view class="introduce">
                <view class="title">
                  多动动日常训练要点
                </view>
                <view class="textinfo">
                  <text class="one">张秋</text>
                  <text class="two">医生</text>
                  <text class="three">发布于02-19 10:28</text>
                </view>
              </view>
            </view>
            <view class="twodepartment">
              科室:多动症
            </view>
            <view class="describe">
              各位家长，由专业医生针对多动症制定了训练…
            </view>
            <view class="info">
              <text class="d-text on">查看打卡记录</text>
            </view>
          </view>
        </view>
		</scroll-view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      value1: 1,
      options1: [{
						label: '多动症科室',
						value: 1,
					},
					{
						label: '自闭症科室',
						value: 2,
					},
					{
						label: '长高科室',
						value: 3,
					}
				],
    }
  },
}
</script>
<style lang="scss" scoped>
.topnav{
	background: #fff;
}
.content{
	width: 100%;
	height: 86vh;
}
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
    }

    .info {
      margin-top: 30rpx;
      border-top: solid 1px #EBEBEB;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 80rpx;

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