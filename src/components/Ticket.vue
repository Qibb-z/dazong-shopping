<template>
	<!-- router-link[tag=div]>img+div.content>h2+p>span.price+span.origin-price+span.sales -->
<div class="ticket">
	<router-link tag="div" :to="''" class="ticket-inner">
		<img :src="'/img/ticket/' + data.img" alt="">
		<div class="content">
			<h3>{{data.title}}</h3>
				<p class="view">价格：{{data.money}}</p>
				
		</div>
	</router-link>
</div>
</template>
<style type="text/css" lang="scss">
@import "../base.scss";
.ticket {
	background: #fff;
	.ticket-inner {
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
		padding-top: 20px;
		margin-bottom: 60px;
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