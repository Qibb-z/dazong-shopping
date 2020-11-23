<template>
<div id="app">
	<mt-header title="大众网购"  v-show="$route.name === 'home'" class="header">
   <router-link to="/" slot="left" class="back">
    <mt-button icon="back"></mt-button>
  </router-link>
  <router-link to="/login" slot="right" class="login">
    <mt-button >登录</mt-button>
  </router-link>

</mt-header>
	<div class="search" v-show="$route.fullPath.indexOf('/detail/') !== 0 && $route.name === 'home'  ">
		<input type="text" v-model="msg" @keyup.enter="showSearchResult" placeholder="请输入搜索关键字">
	</div>
	<router-view/>
</div>
</template>
<style lang="scss">
// 引入库文件
@import './base.scss';
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html, body {
	background: #efefef;
}
.header {
	background: $navColor !important;
	height: 60px;
	line-height: 60px;
	text-align: center;
	color: #fff;
	display: flex;
	.back,
	.login {
		width: 60px;
	}
	.login {
		font-size: 16px;
	}
	.go-back {
		position: relative;
		.arrow {
			@include arrow(10px, #fff, right);
			position: absolute;
			top: 22px;
			left: 10px;
			.green {
				border-right-color: $navColor;
				top: -10px;
				left: -8px;
			}
		}
	}
	h1 {
		flex: 1;
		font-size: 24px;
	}
}
.search {
	background: #fff;
	padding: 10px 20px;
	display: flex;
	input {
		font-size: 14px;
		background: #efefef;
		border: none;
		outline: none;
		padding: 10px 20px;
		border-radius: 18px;
		flex: 1;
	}
}
</style>
<script type="text/javascript">
export default {
	// 绑定数据
	data() {
		return {
			msg: ''
		}
	},
	// 方法
	methods: {
		// 展示搜索结果
		showSearchResult() {
			// 发布消息
			this.$store.commit('updateSearch', this.msg);
			// 清空数据
			this.msg = '';
		},
		// 返回上一个页面
		goBack() {
			// history.go(-1);
			// 建议使用路由提供的方法
			this.$router.go(-1);
		}
	}
}
</script>
