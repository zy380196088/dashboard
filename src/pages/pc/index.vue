<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>
<script>
  import Layout from '@/components/layout/Layout';
  export default {
    name: 'pc',
    components:{
      Layout
    },
    data(){
      return {
        tableData:[],
      }
    },
    mounted(){
      this.layuiInit();
    },
    methods:{
      layuiInit(){
        var _self = this;
        layui.use('table',function () {  });
      }
    },
    watch:{
      'tableData':{
        handler:function(newVal,oldVal){
          console.log(this.tableData)
          this.layuiInit()
        }
      }
    }
  }

</script>

<style>
  @import url('../../assets/scss/common.css');
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(242, 242, 242, 1);
  }

  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
