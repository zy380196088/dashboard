<template>
  <div class="wrap">
    <div class="panel-title"></div>
    <section class="panel-box">
      {{ title}}
    </section>
  </div>
</template>

<script>
  import Header from '@/components/layout/Header';
  import Footer from '@/components/layout/Footer';
  export default {
    name: "Create",
    components: {
      Header,
      Footer
    },
    data(){
      return {
        title:"创建对抗演练"
      }
    },
    mounted: {

    }
  }

</script>
<style lang="scss" scoped></style>
