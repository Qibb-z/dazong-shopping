<template>
  <div>
	  <mt-header title="火车票" class="header">
   <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
   </router-link>
    <mt-button icon="more" slot="right"></mt-button>
 </mt-header>
<Ticket v-for="(item, index) in ticket" :key="index" :data="item"></Ticket>
  </div>
</template>
<style scoped>
</style>

<script>
import Ticket from '../components/Ticket';
export default {
  components: { Ticket },
  data() {
    return {
	ticket:[]
	}
  },
	// 组件创建完成请求数据
	created() {
		// 发送请求
		this.$http
			// get请求
			.get('/data/ticket.json')
			// 监听数据返回
			.then(({ data }) => {
				// 存储数据
				this.ticket=data.ticket;
				// console.log(this.ad)
			})
	}

};
</script>·