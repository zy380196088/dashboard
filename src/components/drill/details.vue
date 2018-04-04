<template>
  <div class="panel-wrap">
    <div class="panel-title">{{title}}</div>
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
  .panel-wrap {
    width: 100%;
    height: auto;
    .panel-title {
      width: 100%;
      background-color: #fff;
      height: 56px;
      font-size: 20px;
      font-weight: 700;
    }
    .panel-box {
      width: 100%;
      padding: 20px;
      background-color: #fff;
    }
  }

</style>
