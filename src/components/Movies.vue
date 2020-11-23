<template>
	<!-- router-link[tag=div]>img+div.content>h2+p>span.price+span.origin-price+span.sales -->
<div class="movies">
	<router-link tag="div" :to="'/mdetail/' + data.id" class="movies-inner">
		<img :src="'/img/movies/' + data.img" alt="">
		<div class="content">
			<h3>{{data.title}}</h3>
				<p class="view">观众评：{{data.view}}</p>
				<p class="type">类型：{{data.type}}</p>
				<p class="person">主演：{{data.person}}</p>
			
		</div>
	</router-link>
</div>
</template>
<style type="text/css" lang="scss">
@import "../base.scss";
.movies {
	background: #fff;
	.movies-inner {
		margin: 0 10px;
		border-bottom: 1px solid #ccc;
		padding: 10px 0;
		display: flex;
	}
	img {
		width: 120px;
		height: 160px;
	}
	.content {
		flex: 1;
		padding-left: 10px;
	}
	h3 {
		font-size: 22px;
		min-height: 44px;
		padding-bottom: 10px;
	}
	.view{
		color: red;
	}
	p {
		font-size: 17px;
		color: #666;
		margin-bottom: 5px;
	}
	
	
}
</style>
<script type="text/javascript">
export default {
	// 接收数据
	props: ['data'],
	// created() {
	// 	console.log(this)
	// }
}
</script>