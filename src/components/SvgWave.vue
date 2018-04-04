<template>
  <div class="wrapper">
    <div class="wave-shape">
      <svg class="wave-svg" xmlns="http://www.w3.org/2000/svg" data-name="3-waves" viewBox="0 0 600 215.43">
        <title>wave shape</title>
        <path class="871c1787-a7ef-4a54-ad03-3cd50e05767a" d="M639,986.07c-17-1-27.33-.33-40.5,2.67s-24.58,11.84-40.46,15c-13.56,2.69-31.27,2.9-46.2,1.35-17.7-1.83-35-9.06-35-9.06S456,987.07,439,986.07s-27.33-.33-40.5,2.67-24.58,11.84-40.46,15c-13.56,2.69-31.27,2.9-46.2,1.35-17.7-1.83-35-9.06-35-9.06S256,987.07,239,986.07s-27.33-.33-40.5,2.67-24.58,11.84-40.46,15c-13.56,2.69-31.27,2.9-46.2,1.35-17.7-1.83-35-9.06-35-9.06v205.06h600V996S656,987.07,639,986.07Z"></path>
      </svg>
    </div>
  </div>
</template>
<style lang="sass" scoped>
  .wrapper {
    display: block;
    overflow: hidden;
    position: relative:
  }

  .wave-shape {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
    transform: translateX(-100px);
    .wave-svg {
      width: 100%;
      height: auto;
      overflow: hidden;
      float: left;
      fill: #00A1DF;
      margin: 0;
    }
  }

  @keyframe fillUpSvg {
    8% {
      transform: translateY(calc(100px/2)) scaleY(0);
    }
    50% {
      transform: translateY(0) scaleY(1);
    }
    100% {
      transform: translateY(calc(100px/2) scaleY(0));
    }
  }

  @keyframe waveSvgAnim{
    0%{
      transform : translateX(cale(-100px * 2));
    }
    100%{
      transform : translateX(100px *2);
    }
  }

</style>
