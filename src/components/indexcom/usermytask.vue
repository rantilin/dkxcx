<template>
  <view>
     <view class="assignment">
          <view class="title">
            今天
          </view>
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
              <view class="datetime">第1天</view>
            </view>
            <view class="twodepartment">
              科室:多动症
            </view>
            <view class="describe">
              各位家长，由专业医生针对多动症制定了训练…
            </view>
            <view class="info">
              <image
                src="../../static/image/accomplish.png"
                mode="widthFix"
                class="d-icon"
              ></image>
              <text class="d-text">已打卡</text>
            </view>
          </view>

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
              <view class="datetime on">已结束</view>
            </view>
            <view class="twodepartment">
              科室:多动症
            </view>
            <view class="describe">
              各位家长，由专业医生针对多动症制定了训练…
            </view>
            <view class="info">
              <image
                src="../../static/image/proceed.png"
                mode="widthFix"
                class="d-icon"
              ></image>
              <text class="d-text on" @click="gotask">去打卡</text>
            </view>
          </view>
        </view>

        <view class="assignment">
          <view class="title">
            01-28
          </view>
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
              <view class="datetime">第1天</view>
            </view>
            <view class="twodepartment">
              科室:多动症
            </view>
            <view class="describe">
              各位家长，由专业医生针对多动症制定了训练…
            </view>
            <view class="info">
              <image
                src="../../static/image/accomplish.png"
                mode="widthFix"
                class="d-icon"
              ></image>
              <text class="d-text">已打卡</text>
            </view>
          </view>

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
              <view class="datetime on">已结束</view>
            </view>
            <view class="twodepartment">
              科室:多动症
            </view>
            <view class="describe">
              各位家长，由专业医生针对多动症制定了训练…
            </view>
            <view class="info">
              <image
                src="../../static/image/proceed.png"
                mode="widthFix"
                class="d-icon"
              ></image>
              <text class="d-text on">去打卡</text>
            </view>
          </view>
        </view>
  </view>
</template>