<template>
	<view class="xb-share">
		<image src="/static/image/top_img.png" class="xb-share-img" mode="widthFix"></image>
		<view class="xb-share-content">
			<text class="xb-share-title">邀请码</text>
			<text class="xb-share-code">{{code}}</text>
			<text class="xb-share-desc">您邀请加入班级的口令</text>
			<uni-qrcode class="xb-share-margin-top erweima" cid="qrcode1446" :text="code" foregroundColor="#303133" :size="200"  makeOnLoad />
			<button class="xb-share-button xb-share-margin-top" open-type="share">立即分享</button>
		</view>
	</view>
</template>

<script>
import uQRCode from '@/common/uqrcode.js'
import uniqrcode from '@/components/uni-qrcode/uni-qrcode'
export default {
  components:{
      uniqrcode
  },
	data() {
		return {
       code:'',
       type: 0,
       title:'健康小管家',
       shareUrl:'/pages/share/index'
    };
	},
	onLoad(e) {
     if(e){
       this.code = e.code
       this.type = e.type
       this.title += '邀请您加入' + e.title
       this.shareUrl +=`?code=${this.code}&type=${this.type}&title=${this.title}&name=${e.title}` 
       console.log(this.shareUrl)
     }
  },
  onShareAppMessage() {
    return {
      title: this.title,
      imageUrl: 'https://yy.xnetkfyy.cn/upload/images/2021331/2103311117420144.png',
      path: this.shareUrl,
    }
  },
	methods: {}
};
</script>

<style>
page {
	background-color: #0BC788;
}
.xb-share-margin-top {
	margin-top: 20px;
}
.xb-share-img {
	width: 750rpx;
}
.xb-share-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50rpx;
	margin: 10rpx 50rpx 50rpx 50rpx;
	background-color: #ffffff;
	border-radius: 15rpx;
}
.xb-share-title {
	font-size: 30rpx;
}
.xb-share-code {
	font-size: 40rpx;
	color: red;
}
.xb-share-desc {
	font-size: 24rpx;
	color: #808080;
}
.xb-share-button {
	width: 370rpx;
	background-color: #FF834A;
	border-radius: 40rpx;
	color: #ffffff;
	font-size: 20rpx;
	padding-left: 40rpx;
	padding-right: 40rpx;
}
.erweima{
  margin-top: 30rpx;
}
.xb-share-bottom-border {
	border-bottom: #c8c7cc solid 1px;
	padding: 10px 10px 10px 0px;
}
</style>
