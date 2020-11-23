<template>
  <div>
	  <mt-header title="电影" class="header">
   <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
   </router-link>
    <mt-button icon="more" slot="right"></mt-button>
 </mt-header>
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active" class="mdd">
      <mt-tab-item id="1" >正在热映</mt-tab-item>
      <mt-tab-item id="2" >即将上映</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板开始 -->
    <div class="main">
      <mt-tab-container v-model="tab">
        <mt-tab-container-item id="ab">
       <Movies v-for="(item, index) in list" :key="index" :data="item"></Movies>
        </mt-tab-container-item>
        <mt-tab-container-item id="cd"> 
			<Movies v-for="(item, index) in movies" :key="index" :data="item"></Movies>
			</mt-tab-container-item>
        
      </mt-tab-container>
    </div>
    <!-- 面板结束 -->
  </div>
</template>
<style scoped>
.mdd{
	color: red;
}
</style>

<script>
import Movies from '../components/Movies';
export default {
  components: { Movies },
  data() {
    return {
      active: "1",
      tab: "ab",
	  selected:'index',
	  list:[],
	  movies:[]
	}
  },
  watch: {


    // 可以带有两个参数
    // 第一个参数代表新值
    // 第二个参数代表旧值
    active(newValue) {
      if (newValue == "1") {
        this.tab = "ab";
      } else if (newValue == "2") {
        this.tab = "cd";
      } else if (newValue == "3") {
        this.tab = "ef";
      } else {
        this.tab = "gh";
      }
    },
  },
	// 组件创建完成请求数据
	created() {
		// 发送请求
		this.$http
			// get请求
			.get('/data/movies.json')
			// 监听数据返回
			.then(({ data }) => {
				// 存储数据
				this.list = data.list;
				this.movies = data.movies;
				// console.log(this.ad)
			})
	}

};
</script>·