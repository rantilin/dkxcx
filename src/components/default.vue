<template>
	<view>
		<view class="default" :style="`position:absolute;left:${left}%;top:${top}%;margin-top:-${mTop}rpx;margin-left:-${mLeft}rpx`">
			<view class="warp" v-if="status==0" >
				<image :style="`width:${width}rpx;height:${height}rpx`"  src="../static/image/newsDefault.png" mode=""></image>
				<view class="tip">
					暂无消息
				</view>
			</view>
			<view class="warp" v-if="status==1" >
				<image :style="`width:${width}rpx;height:${height}rpx`" v-if="status==1"  src="../static/image/signDefault.png" mode=""></image>
				<view class="tip">
					暂无数据
				</view>
			</view>
			<view class="warpwarp" v-if="status==2" >
				<image :style="`width:${width}rpx;height:${height}rpx`" src="../static/image/pinglunDefault.png" mode=""></image>
				<view class="tip">
					暂无评论
				</view>
			</view>
			<view class="warp" v-if="status==3">
				<image :style="`width:${width}rpx;height:${height}rpx`" v-if="status==3"  src="../static/image/openDefault.png" mode=""></image>
				<view class="tip" :style="`font-size:${size};color:${color}`">
					暂无记录
				</view>
			</view>
			<view class="warp" v-if="status==4">
				<image :style="`width:${width}rpx;height:${height}rpx`" v-if="status==4"  src="../static/image/openDefault.png" mode=""></image>
				<view class="tip" :style="`font-size:${size};color:${color}`">
					{{text}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			status:{//判断为哪一个缺省页 0:消息，1：健康打卡，科室管理，2：评论，3，打开记录,4:其他
			  type:Number,
			  default:0
			},
			left:{//定位
				type:Number,
				default:50
			},
			top:{//定位
				type:Number,
				default:50
			},
			mLeft:{//margin
				type:Number,
				default:186
			},
			mTop:{
				type:Number,
				default:70
			},
			width:{//图片宽度
				type:Number,
				default:371
			},
			height:{//图片高度
				type:Number,
				default:141
			},
			size:{//字体大小
				type:Number,
				default:24
			},
			color:{//字体颜色
				type:String,
				default:'#999999'
			},
			text:{//文字
				type:String,
				default:''
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.tip{
		text-align: center;
		margin-top: 50rpx;
	}
</style>
