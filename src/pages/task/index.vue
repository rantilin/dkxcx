<template>
	<view>
		<view class="backg">
			<view class="title">
				多动症日常训练要点
			</view>
			<view class="emum">
				科室：多动症
			</view>
			<view class="emum">
				发布于：2021年02月19日 10:28
			</view>
		</view>
		<view class="taskcont">
			<view class="content" :class="contmore?'more':''">
				各位家长，由专业医生针对多动症制定了一套训训练方法，请家长按照相应的方法动作要点，坚持每天天打卡上传文字说明以及孩子训练的图片或视频，我们指导医生可以做出对应的评价和动作要领的改正，谢谢配合！
				坚持每天天打卡上传文字说明以及孩子训练的图片或视频，我们指导医生可以做出对应的评价和动作要领的改正，谢谢配合！
			</view>
			<view class="imglist">
				<u-image src="" width="206" height="186" class="item"></u-image>
				<u-image src="" width="206" height="186" class="item"></u-image>
				<u-image src="" width="206" height="186" class="item"></u-image>
			</view>
			<view class="textnode">
				<u-icon name="../../static/image/post.png" size="28"></u-icon>
				<text>提交方式: 图片+文字</text>
			</view>
			<view class="textnode">
				<u-icon name="../../static/image/time.png" size="28"></u-icon>
				<text>时间周期: 02月19日-03月10日</text>
			</view>
			<view class="bottom" @click="taskmore">
				<u-icon :name="contmore?'arrow-down':'arrow-up'" color="#AAAAAA" size="30"></u-icon>
			</view>
		</view>

		<view class="tasklist">
			<view class="navlist">
				<view class="navigation">
					<u-tabs :list="list" inactive-color="#999999" active-color="#333333" class="nav"
						:bar-style="{background: '#0BC788'}" :is-scroll="false" :current="current" bar-height="6"
						@change="change"></u-tabs>
				</view>
				<view class="carryout" @click="goranking">
					   排行榜
				</view>
			</view>
			<view class="dakatitle">
				打开第7/20天
			</view>
			<dakadaylist></dakadaylist>

			<view class="common">
          <view class="task">
            <view class="onetitle">
              <u-avatar
                src=""
                class="portrait"
                size="76"
              ></u-avatar>
              <view class="introduce">
                <view class="title">
                  都月*家长
                </view>
                <view class="textinfo">
                  <text class="one">科室:</text>
                  <text class="two">多动症</text>
                  <text class="three">发布于02-19 10:28</text>
                </view>
              </view>
              <view class="clockime">编辑</view>
            </view>
            <view class="carddetail">
              <view class="contdetail">
                我家孩子按照康复老师多动症日常训练表训练后我家孩子按照康复老师多动症日常训…
              </view>
              <view class="imglist">
                <view class="item">
                  <u-image
                    src="https://cdn.uviewui.com/uview/example/fade.jpg"
                    width="174"
                    height="157"
                  ></u-image>
                </view>
                <view class="item">
                  <u-image
                    src="https://cdn.uviewui.com/uview/example/fade.jpg"
                    width="174"
                    height="157"
                  ></u-image>
                </view>
                <view class="item">
                  <u-image
                    src="https://cdn.uviewui.com/uview/example/fade.jpg"
                    width="174"
                    height="157"
                  ></u-image>
                </view>
              </view>
              <view class="bottom">
                <u-icon
                  size="32"
                  class="d-icon"
                  name="../../static/image/give.png"
                ></u-icon>
              </view>
							<view class="comment">
								   <comments></comments>
							</view>

            </view>
          </view>
       </view>

		</view>
		
		<view class="bottomfix">
			   <view class="left">
					   <view class="iconsamll">
							  <u-icon name="../../static/image/mycard.png" size="40" ></u-icon>
						 </view>
							<view class="name">我的打卡</view>
				 </view>
				 <view class="botrun" @click="godaka()">
					   立即打卡
				 </view>
				 <view class="right">
					   <view class="iconsamll">
							  <u-icon name="../../static/image/sharecard.png" size="40" ></u-icon>
						 </view>
							<view class="name">分享家长</view>
				 </view>
		</view>
	</view>
</template>

<script>
import dakadaylist from '@/components/dakadaylist/index'
import comments from '@/components/comment/index'
	export default {
		components:{
			dakadaylist,
			comments
		},
		data() {
			return {
				contmore: false,
				list: [{
						name: '我的打卡',
					},
					{
						name: '其他家长',
					},
				],
				current: 0,
			}
		},
		methods: {
			change(index) {
				this.current = index
			},
			taskmore() {
				if (this.contmore) {
					this.contmore = false
				} else {
					this.contmore = true
				}
			},
			godaka(){
				uni.navigateTo({
					url:'/pages/task/dakadd'
				})
			},
			goranking(){
				uni.navigateTo({
					url:'/pages/task/ranking'
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../static/css/task.scss';
</style>
