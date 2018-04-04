<template>
  <header class="header">
    <div class="header-box">
      <img class="logo-img" src="../../assets/img/logo-s.png" />
      <p class="logo-text">{{logoText}}</p>
      <div class="menu"></div>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'Header',
    props: {

    },
    data() {
      return {
        logoText: '飞鸽网评对抗演练平台',
      }
    }
  }

</script>
<style lang="scss" scoped>
  $headerH: 56px;
  $logoW: 36px;
  $logoH: 36px;
  .header {
    width: 100%;
    height: $headerH;
    max-height: 56px;
    background-color: rgba(51, 51, 51, 1);
    .header-box {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 1200px;
      margin: 0 auto;
      .logo-img {
        position: absolute;
        top : 0;
        left :0;
        width: $logoH;
        height: $logoH;
        margin: calc((56px - 36px)/2)
      }
      .logo-text {
        position: absolute;
        left: 56px;
        top: 0;
        height: 56px;
        line-height: 56px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

</style>
