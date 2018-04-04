<template>
  <div class="layout">
    <Header class="header"></Header>
    <div class="content">
      <router-view class="view"/>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
  import Header from '@/components/layout/Header';
  import Footer from '@/components/layout/Footer';
  export default {
    name: "Layout",
    components: {
      Header,
      Footer
    },
    mounted: {

    }
  }

</script>
<style lang="scss" scoped>
.layout{
  position: relative;
  width:100%;
  height: 100%;
  .header{
    position: absolute;
    top: 0;
    left :0;
  }
  .content{
    position: absolute;
    top: 56px;
    width: 100%;
    height: calc(100% - 56px - 40px);
    background:rgba(242, 242, 242,1);
    .view{
      widows: 1200px;
      margin :0 auto;

    }
  }
  .footer{
    position: absolute;
    bottom: 0;
    left :0;
    height: 40px;
  }
}
</style>
