<template>
<div class="home">
	<!-- 分类模块 -->
	<ul class="home-types">
		<router-link  tag="li" :to="'/list/id'">
			<img :src="'/img/icon/01.png'" alt="">
			<p>美食</p>
		</router-link>
		<router-link  tag="li" :to="'/movieslist'">
			<img :src="'/img/icon/02.png'" alt="">
			<p>电影</p>
		</router-link>
		<router-link  tag="li" :to="'/hotollist'">
			<img :src="'/img/icon/03.png'" alt="">
			<p>酒店</p>
		</router-link>
		<router-link  tag="li" :to="''">
			<img :src="'/img/icon/04.png'" alt="">
			<p>休闲</p>
		</router-link>
		<router-link  tag="li" :to="''">
			<img :src="'/img/icon/05.png'" alt="">
			<p>外卖</p>
		</router-link>
		<router-link  tag="li" :to="''">
			<img :src="'/img/icon/06.png'" alt="">
			<p>KTV</p>
		</router-link>
		<router-link  tag="li" :to="''">
			<img :src="'/img/icon/07.png'" alt="">
			<p>周边游</p>
		</router-link>
		<router-link  tag="li" :to="''">
			<img :src="'/img/icon/08.png'" alt="">
			<p>丽人</p>
		</router-link>
		<router-link  tag="li" :to="''">
			<img :src="'/img/icon/09.png'" alt="">
			<p>小吃</p>
		</router-link>
		<router-link  tag="li" :to="'/Ticketlist'">
			<img :src="'/img/icon/10.png'" alt="">
			<p>火车票</p>
		</router-link>
	</ul>
	<!-- 定义广告模块 -->
	<ul class="ad">
		<router-link v-for="(item, index) in ad" :key="index" :to="'/gamelist'" tag="li">
			<h3 :class="'color-' + index">{{item.title}}</h3>
			<p>{{item.description}}</p>
			<img :src="'/img/ad/' + item.url" alt="">
		</router-link>
	</ul>
	<!-- 商品列表 -->
	<div class="home-list">
		<h2 class="guess-title">猜你喜欢</h2>
		<!-- 循环商品 -->
		<Product v-for="(item, index) in list" :key="index" :data="item"></Product>
	</div>
</div>
</template>
<style type="text/css" lang="scss" scoped>
// 引入样式库
@import '../base.scss';
.home-types {
	@include clearfix;
	background: #fff;
	padding: 10px 0 5px;
	li {
		width: (100%/5);
		float: left;
		text-align: center;
		img {
			width: 60%;
		}
		p {
			font-size: 12px;
			color: #666;
			padding: 8px 0 15px;
		}
	}
}
.ad {
	display: flex;
	background: #fff;
	margin-top: 10px;
	li {
		flex: 1;
		padding: 15px 0;
		text-align: center;
		border-right: 1px solid #ccc;
		&:last-child {
			border-right: none;
		}
		h3 {
			font-size: 16px;
		}
		p {
			font-size: 12px;
			color: #666;
			padding: 5px 0;
		}
		img {
			width: 60%;
		}
		// .color-0 {
		// 	color: red;
		// }
		// .color-1 {
		// 	color: green;
		// }
		// .color-2 {
		// 	color: purple;
		// }
		// 索引值
		$i: 0;
		// 枚举循环
		@each $item in red, green, purple {
			.color-#{$i} {
				color: $item;
			}
			// 更新索引值
			$i: $i + 1;
		}
	}
}
.home-list {
	margin-top: 10px;
	background: #fff;
	.guess-title {
		padding: 10px 0;
		margin: 0 10px;
		font-size: 18px;
		font-weight: normal;
		border-bottom: 1px solid #ccc;
		color: #333;
	}
}
</style>
<script>
// 引入组件
import Product from '../components/Product';
export default {
	// 注册组件
	components: { Product },
	// 数据
	data() {
		return {
			// 分类数据
			// 预定义出来
			ad: [],
			list: []
		}
	},
	// 组件创建完成请求数据
	created() {
		// 发送请求
		this.$http
			// get请求
			.get('/data/home.json')
			// 监听数据返回
			.then(({ data }) => {
				// 存储数据
				this.ad = data.ad;
				this.list = data.list;
				// console.log(this.ad)
			})
	}
}
</script>
