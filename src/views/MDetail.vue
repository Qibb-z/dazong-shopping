<template>
<div class="detail">
	<mt-header title="电影" class="header">
   <router-link to="/movieslist" slot="left">
    <mt-button icon="back"></mt-button>
   </router-link>
    <mt-button icon="more" slot="right"></mt-button>
 </mt-header>
	<!-- 图片信息 -->
	<div class="img-part">
		<img :src="'/img/movies/' + data.src" alt="">
		<h1>{{data.title}}</h1>
		<p>{{data.time}}</p>
	</div>
	
	<!-- 商店信息 -->
	<div class="store-part module">
		<div class="module-header">电影简介</div>
		<div class="module-body">
			<p>{{data.description}}</p>
		</div>
	</div>
	
</div>
</template>
<style type="text/css" lang="scss" scoped>
// 引入库
@import "../base.scss";
.img-part {
	position: relative;
	img {
		width: 100%;
		height: 280px;
	}
	h1, p {
		position: absolute;
		left: 20px;
		bottom: 15px;
		color: #fff;
	}
	h1 {
		bottom: 40px;
		font-size: 26px;
	}
}

.module {
	margin-top: 10px;
	background: #fff;
	padding: 10px;
	.module-header {
		font-size: 22px;
		color: #333;
		padding: 8px 0 10px;
		border-bottom: 1px solid #ccc;
	}
	.module-body {
		padding:10px 0 ;
		line-height: 28px;
		h3 {
			color: #f60;
			padding: 15px 0 10px;
		}
	}
	.module-footer {
		color: skyblue;
		border-top: 1px solid #ccc;
		padding: 10px 0 4px;
	}
}
</style>
<script type="text/javascript">
export default {
	// 绑定数据
	data() {
		return {
			// 避免数据丢失
			data: {}
		}
	},
	// 定义方法
	methods: {
		// 请求数据
		updateData() {
			// 获取路由参数
			let { params } = this.$route;
			// 请求数据
			this.$http
				// get请求
				.get('/data/mdetail.json', { params })
				// 监听数据返回
				.then(({ data }) => this.data = data);
		}
	},
	// 创建完成请求数据
	created() {
		// 更新数据
		this.updateData();
	},
	// 局部监听
	// beforeRouteEnter(route, oldRoute, next) {
	// 	console.log(arguments)
	// 	// 必须执行next方法
	// 	next();
	// },
	// 监听路由的变化
	watch: {
		// 路由数据的变化
		$route() {
			// console.log(111, arguments)
			// 更新数据
			this.updateData();
		}
	}
}
</script>