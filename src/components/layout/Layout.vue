<template>
  <div class="container">
    <Header class="header"></Header>
    <router-view/>
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
.container{
  position: relative;
  width:100%;
  height: 100%;
  .header{
    position: absolute;
    top: 0;
    left :0;
  }
  .content{
    margin: 40px auto;
    width: 100%;
    max-width: 1200px;
  }
  .footer{
    position: absolute;
    bottom: 0;
    left :0;
    height: 40px;
  }
}
</style>
