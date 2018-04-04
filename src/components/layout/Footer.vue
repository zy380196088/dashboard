<template>
  <footer>{{footerText}}</footer>
</template>
<script>
  export default{
    name:"Footer",
    data() {
      return {
        footerText:'Copyright @ 2017 新华移动传媒 All rights reserved'
      }
    }
  }
</script>
<style lang="scss" scoped>
  footer{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    background-color: rgb(230, 230, 230);
    color:rgb(169, 169, 169);
  }
</style>
