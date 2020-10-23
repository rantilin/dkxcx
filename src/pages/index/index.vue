<template>
  <view class="page page-index">
    <view class="main">
      <swiper autoplay circular indicatorDots :duration="500" :interval="5000">
        <swiper-item v-for="(item, index) in banners" :key="index">
          <image
            bindtap="goMiniProgram"
            class="banner-item"
            :src="item.url"
          ></image>
        </swiper-item>
      </swiper>
      <view class="mt20">
       <u-notice-bar mode="horizontal" :list="tiptitle"></u-notice-bar>
      </view>
      <view class="znzl flex box-center">
            <image class="placeholder-img znzl-img" src="/static/images/znzl.png"></image>
            <view>
                <view class="t1">智能助理</view>
                <view class="t2">导诊、小常识、问政策...我都能搞定</view>
            </view>
      </view>
       <view class="service flex">
            <view  class="service-item flex dir-top box-center main-start" data-url="/pages/guahao/guahao">
                <image class="placeholder-img img" src="/static/images/icon-ask.png"></image>
                <view class="t1">门诊挂号</view>
                <view class="t2">成都中童康复医院挂号</view>
            </view>
            <view  class="service-item flex dir-top box-center main-start" data-url="/pages/doctor-list/doctor-list">
                <image class="placeholder-img img" src="/static/images/icon-guahao.png"></image>
                <view class="t1">在线问诊</view>
                <view class="t2">300多位医生在线答疑</view>
            </view>
            <view  class="service-item flex dir-top box-center main-start" data-url="/pages/doctor-list/doctor-list">
                <image class="placeholder-img img" src="/static/images/icon-fzxf.png"></image>
                <view class="t1">复诊续方</view>
                <view class="t2">慢病患者在线复诊续方购药</view>
            </view>
        </view>
      <view class="ecard flex main-between box-center">
            <view></view>
            <view  class="btn mr35" >申领卡片</view>
      </view>
      <view class="sec-title flex main-between box-center">
            <text>特色专区</text>
        </view>
        <view class="tszq flex-center">
            <view bindtap="goPage" class="tszq-item flex-center" style="background-image: url(/static/images/bg-page-index-tszq-1.png)">
			      	IEP个别化康复计划
		      	</view>
            <view bindtap="goPage" class="tszq-item flex-center" style="background-image: url(/static/images/bg-page-index-tszq-2.png)">
		      		格里菲斯评估
		      	</view>
            <view bindtap="goPage" class="tszq-item flex-center" style="background-image: url(/static/images/bg-page-index-tszq-3.png)">
			      	Q博士家长课堂
		      	</view>
       </view>
       <view class="sec-title flex main-between box-center" >
            <text>名医专家</text>
        </view>
       
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      title: 'dsad',
      recommendedDoctors:[],
      banners:[
    {
      url: "/static/images/banner1.jpg",
      link: "/pages/user/user",
    },
    {
      url: "/static/images/banner2.jpg",
      link: "/pages/user/user",
    },
    {
      url: "/static/images/banner3.jpg",
      link: "/pages/user/user",
    },
    
  ],
  tiptitle: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				]
    }
  },
  onLoad(){

  }
}
</script>


<style lang="scss" scoped>
@import "../../static/css/home.scss";
</style>
