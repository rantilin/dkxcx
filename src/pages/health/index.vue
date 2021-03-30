<template>
	<view class="page health">
		<swiper class="swiper" :indicator-dots="true" indicator-active-color='#fff' indicator-color='rgba(255, 255, 255, .4)'
		 :autoplay="true">
			<swiper-item>
				<view class="swiper-item uni-bg-red">
					<image src="../../static/image/cardre.png" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">
					<image src="../../static/image/taskbg.png" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">C</view>
			</swiper-item>
		</swiper>
		<!-- <image class="banner" mode="widthFix" src="http://xt.xnetyy.com/sitefiles/library/images/2020/11/4dc55436c7040f9d.png"></image> -->
		<!-- <view class="funcs">
        <view bindtap="goPage" class="func" data-building="1">
            <image class="pic" src="{{imageUrl}}article-gynaecology.png"></image>
            <view class="text">妇科频道</view>
        </view>
        <view bindtap="goPage" class="func" data-building="1">
            <image class="pic" src="{{imageUrl}}article-obstetrics.png"></image>
            <view class="text">产科频道</view>
        </view>
        <view bindtap="goPage" class="func" data-building="1">
            <image class="pic" src="{{imageUrl}}article-paediatrics.png"></image>
            <view class="text">儿科频道</view>
        </view>
    </view> -->
		<view class="videos">
			<view class="tip-more">
				<view class="shu-title">
					<view class="shu"></view>
					<view class="tip">健康案例</view>
				</view>
				<view class="more">
					<view class="text">查看全部</view>
					<!-- <u-icon name="arrow-right" color="#999999" size="18"></u-icon> -->
				</view>
			</view>
			<scroll-view scrollX class="scroll">
				<view class="items">
					<view class="item" v-for="(item,index) in 3" :key='index'>
						<image class="pic" src="http://www.xnetkfyy.com/upload/images/2019/5/t_c5c16c274b1e2988.jpg"></image>
						<view class="title">家长应注意孩子多动症家长应注意孩子多动症</view>
						<!-- <view class="num-desc">
							<view class="desc">2-4岁儿童语言发育能力</view>
							<view class="num">
								<u-icon name="eye" color="#999999" size="28"></u-icon>
								<view class="text">23</view>
							</view>
						</view> -->
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="videos">
			<view class="tip-more">
				<view class="shu-title">
					<view class="shu"></view>
					<view class="tip">推荐视频</view>
				</view>
				<view class="more">
					<view class="text">查看全部</view>
					<!-- <u-icon name="arrow-right" color="#999999" size="18"></u-icon> -->
				</view>
			</view>
			<view class="video">
				<view class="time">
					04:25
				</view>
				<image src="http://www.xnetkfyy.com/upload/images/2019/5/t_c5c16c274b1e2988.jpg" mode=""></image>
			</view>
			<view class="title-button">
				<view class="video-title">
					<view class="">
						专家医生讲解多动动症都有哪些表现有哪些表现
					</view>
					<view class="detail">
						家长日常都应该从哪些方面观察小孩的日日常表现
					</view>
				</view>
				<image src="../../static/image/play.png" mode=""></image>
			</view>
		</view>
		<view class="videos">
			<view class="tip-more">
				<view class="shu-title">
					<view class="shu"></view>
					<view class="tip">健康知识</view>
				</view>
				<view class="more">
					<view class="text">查看全部</view>
					<!-- <u-icon name="arrow-right" color="#999999" size="18"></u-icon> -->
				</view>
			</view>
			<view class="knowledge-warp">
				<view class="knowledge" v-for="(item,index) in 5" :key='index'>
					<image src="http://www.xnetkfyy.com/upload/images/2019/5/t_c5c16c274b1e2988.jpg" mode=""></image>
					<view class="title">
						家长日常都应该从哪些方面观察小孩的日观察小孩的日
					</view>
					<view class="foot">
						<view class="left">
							<u-icon name="/static/image/time1.png" size="20"></u-icon>
							<view class="time">
								2021.02.05
							</view>
						</view>
						<view class="left">
						<u-icon name="/static/image/eye.png" size="30"></u-icon>
						<view class="time number">
							200
						</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="article-part">
			<view class="tip-more">
				<view class="tip">文章精选</view>
				<view class="more">
					<view class="text">更多</view>
					<u-icon name="arrow-right" color="#999999" size="18"></u-icon>
				</view>
			</view>
			<view class="articles">
				<view class="article">
					<view class="text">
						<view class="title">宝宝3岁还不会说话，妈妈学……</view>
						<view class="desc">宝宝3岁还不会说话，妈妈学得慢，幼儿园老师一句话警醒……</view>
						<view class="tags">康复学园</view>
					</view>
					<image class="pic" src="http://www.xnetkfyy.com/upload/images/2020/7/t_23b8ded85251b900.jpeg"></image>
				</view>
			</view>
		</view> -->
	</view>
</template>
<script>
	export default {

	}
</script>
<style lang="scss" scoped>
	@import "../../static/css/health.scss";
</style>
