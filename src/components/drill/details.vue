<template>
  <div class="wrap">
    <div class="panel-title">
      <p class="title-text">{{title}}</p>
    </div>
    <section class="panel-box">
     
    </section>
  </div>
</template>

<script>
  import Header from '@/components/layout/Header';
  import Footer from '@/components/layout/Footer';
  export default {
    name: "Details",
    components: {
      Header,
      Footer
    },
    data() {
      return {
        title: "任务详情"
      }
    },
    mounted: {

    }
  }

</script>

<style lang="scss" scoped>
  .panel-title {
    width: 100%;
    height: 56px;
    line-height: 56px;
    background-color: #fff;
    .title-text {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      font-size: 20px;
      font-weight: 700;
      text-align: left;
    }
  }

</style>
