<template>
  <view>
    <view class="head">
      <u-tabs
        :list="list"
        inactive-color="#999999"
        active-color="#333333"
        class="nav"
        :bar-style="{background: '#0BC788'}"
        :is-scroll="false"
        :current="current"
        bar-height="6"
        @change="change"
      ></u-tabs>
    </view>
    <u-index-list :scrollTop="scrollTop" offset-top="170" class="ulist">
      <view
        v-for="(item, index) in indexList"
        :key="index"
      >
        <u-index-anchor :index="item" />
        <view  v-for="(item1,index1) in listdata" :key="index1">
          <view class="list-cell" v-if="item1.letter == item">
           <u-avatar :url="item1.user_avatar" size="60"></u-avatar>
           <text class="name">{{item1.user_name}}</text>
         </view>
        </view>
        
        
      </view>
    </u-index-list>

  </view>
</template>
<script>
import uAvatar from '../../uview-ui/components/u-avatar/u-avatar.vue';
export default {
  components: { uAvatar },
  data() {
    return {
      doctornum: 0,
      parentnum: 0,
      current: 0,
      scrollTop: 0,
			indexList: [],
      doctor: [],
      parent: [],
      listdata: []
    }
  },
  computed:{
       list(){
          let datalist = [
        {
          name: '家长('+this.parentnum+')',
        },
        {
          name: '医生('+this.doctornum+')',
        },
      ]
       return datalist
       },
  },
  onLoad(op){
     this.getclass(op.id)
  },
  onPageScroll(e) {
			this.scrollTop = e.scrollTop;
	},
  methods:{
    change(index) {
      this.current = index
      if(index == 0){
        this.indexList = this.baselist(this.parent)
        this.listdata=this.parent
      }
      if(index == 1){
        this.indexList = this.baselist(this.doctor)
         this.listdata=this.doctor
      }
    },
    getclass(id){
      let _this=this
      _this.$api.calssdeil({
         key:_this.$db.get('key'),
         ID: id
      },res=>{
         if(res.code == 200){
             _this.doctor = res.datas.depart_num.doctor
             _this.doctornum = res.datas.depart_num.doctor_num
             _this.parent = res.datas.depart_num.parent
             _this.parentnum = res.datas.depart_num.parent_num
             _this.indexList = _this.baselist(_this.parent)
             _this.listdata = _this.parent
         }else{
            _this.$common.errorToShow(res.datas.error)
         }
      })
    },
    baselist(data){
      let listdata = []
      for (let index = 0; index < data.length; index++) {
         listdata.push(data[index].letter)
      }
      return Array.from(new Set(listdata))
    }
  }
}
</script>
<style lang="scss" scoped>
.head {
  width: 100%;
  height: 94rpx;
  background: #fff;
  .nav {
    width: 45%;
    margin-left: 32rpx;
  }
}
.ulist{
  margin-top: 100rpx;
}
.list-cell {
  box-sizing: border-box;
  width: 100%;
  margin: 10rpx auto;
  padding: 0 24rpx;
  overflow: hidden;
  color: #323233;
  font-size: 28rpx;
  line-height: 96rpx;
  background-color: #fff;
  border-radius: 12rpx;
  align-items: center;
  .name{
     margin-left: 24rpx;
  }
}
</style>