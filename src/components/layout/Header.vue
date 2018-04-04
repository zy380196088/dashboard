<template>
   <header class="menu">
          <div class="logo-img"></div>
          <p class="logo-text">{{logoText}}</p>
      </header>
</template>
<script>
  export default{
    name: 'Header',
    props:{
      
    },
    data() {
      return {
        logoText:'飞鸽网评对抗演练平台',
      }
    }
  }
</script>
<style lang="scss" scoped>
    
  .menu {
    position : relative;
    width : 100% ;
    height : 56px ;
    background-color : rgba(51, 51, 51,1);
    .logo-img {
      display : inline-block;
      background: url('/src/assets/img/logo-s.png');
      background-size: 100%;
      width : 40px;
      height : 40px;
    }
  }
</style>
