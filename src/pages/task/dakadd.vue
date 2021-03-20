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
    
     <view class="taskpostcont">
        <textarea v-model="content" placeholder="请详细描述小孩每日状况，更加全面了解小孩情况" placeholder-style="textcontent"></textarea>
        <view class="listupload">
         <u-upload :action="action" del-bg-color="#FF834A" width="153" height="138" :file-list="fileList" max-count="4"></u-upload>
        </view>
        <view class="listbut">
           <u-icon name="../../static/image/picture.png" label="图片"  size="56" label-pos="bottom" label-size="26"></u-icon>
           <u-icon name="../../static/image/audio.png" label="语音" size="56" label-pos="bottom" label-size="26"></u-icon>
           <u-icon name="../../static/image/video.png" label="视频" size="56" label-pos="bottom" label-size="26"></u-icon>
        </view>

     </view>
     <view class="bottomflex">
         <view class="btn save">
              保存草稿
         </view> 
         <view class="btn post">
              立即提交
         </view> 
     </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      contmore: false,
      content:'',
      action: 'http://www.example.com/upload', //上传地址
			fileList: []
    }
  },
  methods:{
    taskmore() {
				if (this.contmore) {
					this.contmore = false
				} else {
					this.contmore = true
				}
		},
  }
}
</script>
<style lang="scss" scoped>
	@import '../../static/css/task.scss';
</style>