<template>
  <div class="rotate" :class="{'animation':animationType}">
    <div class="back"></div>
    <div class="middle" v-for="(item,index) in middle" :key="index" :style="{transform: 'translateZ('+item+'px)'}"></div>
    <div class="positive"></div>
  </div>
</template>
<script>

export default {
  name: 'RedRotate',
  data() {
    return {
      middle: [1, 2, 3, 4, 5, 6],
      animationType: true,
    };
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>
  .animation{
    animation: spin 2s linear infinite;
  }
  .rotate {
    width: 90px;
    height: 90px;
    transform-style: preserve-3d;
    border-radius: 100%;
  }
  .back {
    // background: #ffbb8d;
    background: url("https://kouhigh.kouhigh.top/upload/app/2019_10_27/ba56e201910271232157807.png")no-repeat center/cover;
    border-radius: 100%;
  }
  .positive,.middle,.back{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .middle {
    background: #ffbb8d;
    border-radius: 100%;
    transform: translateZ(1px);
  }
  .positive {
    background: url("https://kouhigh.kouhigh.top/upload/app/2019_10_27/e96ad201910271232063588.png")no-repeat center/cover;
    transform: translateZ(6px);
  }
  @keyframes spin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(720deg);
    }
  }
</style>
