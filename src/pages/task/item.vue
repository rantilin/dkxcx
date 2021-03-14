<template>
  <view>
    <view class="xm-card xm-card_listdetail">
    <view class="xm_daka-content_title">
        <view class="xm_daka-day" style="font-size: 16px;font-weight: bold;color: #666;" wx:if="{{from=='dakadetail'}}">{{tools.dateFormat(selectdayinfo.date)+'日'}}打卡成果</view>
        <view class="xm_daka-day" style="font-size: 16px;font-weight: bold;color: #666;" wx:elif="{{from=='zuoyedetail'}}">{{tools.cn_type(notify.type)}}列表</view>
        <view bindtap="viewAllNameList" class="more" >
            <text class="xm_daka-day">提交名单</text>
        </view>
    </view>
    <slot></slot>
    <view class="xm-daka-content-tip empty" >
        <iconfont color="#999" name="iconufo" size="40"></iconfont>
        <text style="margin-left: 10px;">暂无优秀打卡</text>
    </view>
</view>
<view class="xm-daka-content-tip" >
    <iconfont color="#A8A8A8" name="iconsuo" size="36"></iconfont>
    <text>老师设置互相不可见</text>
</view>
  </view>
</template>