<template>
    <div>
 <mt-header title="福利" class="header">
   <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
   </router-link>
    <mt-button icon="more" slot="right"></mt-button>
 </mt-header>
        <div class="swipe">
      <mt-swipe >
            <mt-swipe-item >
                <img src="../assets/common/016d5803e5e24ac9a85d1815a539ce3c.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/common/5de997f36d444855b7df2064c7be9c57.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/common/74e3ca2482934130b07e3aad04c73c7d.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/common/a1be5415daf14d918d94d8925df510ef.jpg" alt="">
            </mt-swipe-item>
          <mt-swipe-item>
              <img src="../assets/common/bcd88e21673b4e59b81f78e636ebbffd.jpg" alt="">
          </mt-swipe-item>
        </mt-swipe>
        </div>
        <p><mt-button>默认按钮</mt-button></p>
         <p><mt-button type="primary">主要按钮</mt-button></p>
           <p><mt-button type="danger">危险按钮</mt-button></p>
             <p><mt-button size="small"    type="primary">小的</mt-button></p>
               <p><mt-button  size="normal" type="primary">标准的</mt-button></p>
               <p><mt-button type="primary" plain>镂空</mt-button></p>
               <p>
                   <mt-button type="primary" icon="back"></mt-button>
               </p>
                <p>
                   <mt-button type="primary" icon="more"></mt-button>
               </p>
        </div>    
</template>
<style  scoped>
.swipe{
    height :275px;
    
}
</style>
</template>