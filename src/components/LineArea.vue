<template>
  <div>
    <svg @mousemove="mouseover" :width="style.w" :hight="style.h">
      <g :style="{transform: `translate(${margin.left}px, ${margin.top}px)`}">
        <path class="area" :d="paths.area" />
        <path class="line" :d="paths.line" />
        <path class="selector" :d="paths.selector" />
      </g>
    </svg>
  </div>
</template>
<script>
  import * as d3 from 'd3';
  const props = {
    data: {
      type: Array,
      default: () => [],
    },
    margin: {
      type: Object,
      default: () => ({
        left: 0,
        right: 0,
        top: 10,
        bottom: 10,
      })
    },
    ceil: {
      type: Number,
      default: 100,
    }
  };

  export default {
    name: 'LineArea',
    props,
    data() {
      return {
        style: {
          w: 0,
          h: 0,
        },
        path: {
          area: '',
          line: '',
          selector: '',
        },
        lastHoverPoint: {},
        scaled: {
          x: null,
          y: null,
        },
        animaterData: [],
        points: []
      }
    },
    computed: {
      padded() {
        const width = this.style.w - this.margin.left - this.margin.right;
        const height = this.style.h - this.margin.top - this.margin.bottom;
      }
    },
    mounted() {
      window.addEventListener('resize', this.onResize);
      this.onResize(); //渲染图表
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize);
    },
    watch: {
      data: function dataChanged(newData, oldData) {
        this.tweenData(newData, oldData);
      },
      width: function widthChanged() {
        this.initialize();
        this.update()
      }
    },
    methods: {
      onResize() {
        this.style.w = this.$el.offsetWidth;
        this.style.h = this.$el.offsetHeight;
      },
      createArea: d3.area().x(d => d.x).y0(d => d.max).y1(d => d.y),
      createLine: d3.line().x(d => d.x).y(d => d.y),
      createValueSelector: d3.area().x(d => d.x).y0(d => d.max).y1(0),
      
      initialize() {
        this.scaled.x = d3.scaleLinear().range([0, this.padded.width]);
        this.scaled.y = d3.scaleLinear().range([this.padded.height, 0]);
        d3.axisLeft().scale(this.scaled.x);
        d3.axisBottom().scale(this.scaled.y);
      },
      tweenData(newData, oldData) {
        const vm = this;

        function animate(time) {
          requestAnimationFrame(animate);
          TWEEN.update(time);
        }
        new TWEEN.Tween(oldData)
          .easing(TWEEN.Easing.Quadratic.Out)
          .to(newData, 500)
          .onUpdate(function onUpdate() {
            vm.animatedData = this;
            vm.update();
          }).start();
        animate();
      },

      update() {
        this.scaled.x.domain(d3.extent(this.data, (d, i) => i));
        this.scaled.y.domain([0, this.ceil]);
        this.points = [];
        for (const [i, d] of this.animatedData.entries()) {
          this.points.push({
            x: this.scaled.x(i),
            y: this.scaled.y(d),
            max: this.height,
          });
        }
        this.paths.area = this.createArea(this.points);
        this.paths.line = this.createLine(this.points);
      },
      mouseover({
        offsetX
      }) {
        if (this.points.length > 0) {
          const x = offsetX - this.margin.left;
          const closetPoint = this.getClosestPoint(x);
          if (this.lastHoverPoint.index !== closetPoint.index) {
            const point = this.points[closetPoint.index];
            this.paths.selector = this.createValueSelector([point]);
            this.$emit('select', this.data[closetPoint.index]);
            this.lastHoverPoint = getClosestPoint;
          }
        }
      },
      getgetClosestPoint(x){
        return this.points.map((point,index)=>({
          x:point.x,
          diff:Math.abs(point.x - x),
          index,
        }))
        .reduce((memo,val)=>(memo.diff < val.diff ? memo :val));
      },
    },
  }

</script>
