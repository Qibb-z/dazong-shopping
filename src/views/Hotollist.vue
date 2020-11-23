<template>
  <div>
	  <mt-header title="酒店" class="header">
   <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
   </router-link>
    <mt-button icon="more" slot="right"></mt-button>
 </mt-header>
<Hotol v-for="(item, index) in hotol" :key="index" :data="item"></Hotol>
  </div>
</template>
<style scoped>
</style>

<script>
import Hotol from '../components/Hotol';
export default {
  components: { Hotol },
  data() {
    return {
      active: "1",
      tab: "ab",
	  selected:'index',
	  list:[],
    movies:[],
    hotol:[]
	}
  },
	// 组件创建完成请求数据
	created() {
		// 发送请求
		this.$http
			// get请求
			.get('/data/hotol.json')
			// 监听数据返回
			.then(({ data }) => {
				// 存储数据
				this.hotol=data.hotol;
				// console.log(this.ad)
			})
	}

};
</script>·