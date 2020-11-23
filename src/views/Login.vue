<template>
    <div>
        <!-- 顶部导航开始 -->
        <mt-header title="登录" class="header">
        <router-link  to="/" slot="left" >
            <mt-button icon="back"></mt-button>
        </router-link>
        <router-link  to="/register" slot="right" class="login" >
            <mt-button>注册</mt-button>
        </router-link>
  </mt-header>
  <!-- 顶部导航结束 -->
  <!-- 表单区域开始 -->
     <div>
         <mt-field 
         type="text"
         label="用户名"
         placeholder="请输入用户名"
         v-model="username"
         :state="usernameState"
          @blur.native.capture="checkUsername"
         ></mt-field>
          <mt-field 
         type="password"
         label="密码"
         placeholder="请输入密码"
         v-model="password"
          @blur.native.capture="checkPassword"
         ></mt-field>
         <mt-button type="primary"
         size="large" @blur.native.capture="handle" class="button">快速登录</mt-button>
     </div>
  <!-- 表单区域结束 -->
    </div>
</template>
<style scoped>
.button{
    background: #08ddc8;
}
</style>
<script>
export default {
    data(){
        return{
            // 用户名，密码确认密码门的变量
           username:'',
           password:'',
           usernameState:''

        };
    },
    methods:{
        // 单击免费注册按钮时校验表单
        handle(){
            if(this.checkUsername() && this.checkPassword()){
        //  现在要发送相关的用户名，密码到web服务器端
            }
        },
        // 检测用户名
    checkUsername(){
     let username=this.username;
     let usernameReg = /^[0-9a-zA-Z]{6,12}$/;
      if(usernameReg.test(username)){
        // console.log('用户名可以使用');
        this.usernameState="success";
        return true ;
      } else {
        // 显示短消息提示框(简捷写法)
        // this.$toast("用户名格式或内容错误");
        // 显示短消息提示框(标准写法)
        this.$toast({
          message:"用户名格式或内容错误",
          position:"top",
          duration:5000
        });
        //终止函数的执行
        return false;
      }
        },
        // 检测密码
        checkPassword(){
        let password=this.password;
        let passwordReg = /^[0-9A-Za-z\.\-_]{8,15}$/;
      if(passwordReg.test(password)){
        console.log('密码可以使用');
      } else {
        this.$toast({
          message:"密码错误",
          position:"middle",
          duration:5000
        });
        return false;
      }
        
       
}
    }
}
</script>