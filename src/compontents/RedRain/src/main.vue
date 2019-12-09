<template>
<div class="ser_home" :style="{'background':`rgba(0, 0, 0, ${Bgcolor}`}">
  <div class="num" @click="show = true" v-if="numImgType > 0">
    <img class="a1" v-if="!show" :src="homeImg[0]" alt="">
    <p style="margin:0;transform: translateY(-20px);"><img :src="numImg"></p>
    <img class="a2" v-if="!show" :src="homeImg[1]" alt="">
  </div>
  <div class="header" v-if="show">
    <span class="i-1" :style="{background: `url('${countStyle[0]}') no-repeat center/contain`}">
      <div class="rotate_w" v-for="item,index in rotateList" :key="index" @webkitAnimationEnd="removeDom2">
        <v-rotate :rotateBg="rotateBg" ref="rotate"></v-rotate>
      </div>
      <i>{{ClickTime}}</i>
    </span>
    <span class="i-2" :style="{background: `url('${countStyle[1]}') no-repeat center/contain`}"><i>{{sunTime}}s</i></span>
  </div>
  <audio crossOrigin="anonymous" id="bgMusic" src="https://kouhigh.kouhigh.top/upload/app/2019_11_20/0d35b201911200944376732.mp3"></audio>
  <ul class="red_packet" v-if="show" id="red_packet">
    <template v-for="(item, index) in liParams">
      <li :style="{ left: item.left, animationDuration: item.durTime, webkitAnimationDuration: item.durTime}" :class="item.cls" :data-index="index" @webkitAnimationEnd="removeDom">
        <a @touchstart="open" @click="open">
          <i :style="{ transform: item.transforms, webkitTransform: item.transforms,'background':`url(${item.hb}) no-repeat center/contain`}"></i>
        </a>
      </li>
    </template>
  </ul>
  <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
    <div id='adv' v-if="value">
      <div :style="{background: `url('${popImg}')no-repeat center/cover`}">
        <a id="close" @click="Close" style='position:absolute;z-index:1;right:0;top:0;color:#fff'>
          <span class="icon iconfont iconjiaocha_cross"></span>
        </a>
        <a class='link'>
          $<strong>{{reward}}</strong>
        </a>
        <a class="btn" @click="Submit">
          去使用 >
        </a>
        <span class="time">{{ClickTime}}</span>
      </div>
    </div>
  </transition>
  <i class="adv_i" v-if="value"></i>
</div>
</template>

<script>
import Vue from 'vue'
// import vRotate from './RedRotate/src/main';
import vRotate from '../../RedRotate/src/main';
import animated from 'animate.css'
import "../../../../src/assets/fonts/iconfont.css";
Vue.use(animated)
export default {
  props:{
    // value:{
    //   type:Boolean,
    // },
    sunTimePop:{
      type:Number,
      default:30
    },
    durTime:{
      type:Number,
      default:2
    },
    scales:{
      type:Number,
      default:0.1
    },
    Bgcolor:{
      type:Number,
      default:0.2
    },
    reward:{
      type:String,
      default:''
    },
    popImg:{
      type:String,
      default:'https://kouhigh.kouhigh.top/upload/app/2019_11_11/86356201911111013501774.png'
    },
    countStyle:{
      type:Array,
      default:()=> {
        return [
          'https://kouhigh.kouhigh.top/upload/app/2019_10_25/71e58201910251636129054.png',
          'https://kouhigh.kouhigh.top/upload/app/2019_10_25/a4491201910251635596227.png'
        ]
      }
    },
    rotateBg:{
      type:Array,
      default:()=> {
        return [
          'https://kouhigh.kouhigh.top/upload/app/2019_10_27/ba56e201910271232157807.png',
          'https://kouhigh.kouhigh.top/upload/app/2019_10_27/e96ad201910271232063588.png'
        ]
      }
    },
    homeImg:{
      type:Array,
      default:()=> {
        return [
          'https://kouhigh.kouhigh.top/upload/app/2019_10_25/efbdc201910251711458713.png',
          'https://kouhigh.kouhigh.top/upload/app/2019_10_25/6bc77201910251711524221.png'
        ]
      }
    },
    defaultNumImg:{
      type:Array,
      default:()=> {
        return [
          'https://kouhigh.kouhigh.top/upload/app/2019_10_26/84a50201910260959516428.png',
          'https://kouhigh.kouhigh.top/upload/app/2019_10_26/571ce201910260959433938.png',
          'https://kouhigh.kouhigh.top/upload/app/2019_10_26/ba8ee201910260959349423.png',
          'https://kouhigh.kouhigh.top/upload/app/2019_10_26/fdd8a201910260959259069.png',
          'https://kouhigh.kouhigh.top/upload/app/2019_10_26/b204920191026095917842.png',
        ]
      }
    },
    RedStyle:{
      type:Array,
      default:()=>{
        return [
          'https://kouhigh.kouhigh.top/upload/app/2019_10_25/1d7d2201910251115582255.png',
          'https://kouhigh.kouhigh.top/upload/app/2019_10_25/ff62a201910251115501901.png',
          'https://kouhigh.kouhigh.top/upload/app/2019_10_25/88790201910251115439935.png',
          'https://kouhigh.kouhigh.top/upload/app/2019_10_25/d40d5201910251115361154.png',
          'https://kouhigh.kouhigh.top/upload/app/2019_10_26/84a50201910260959516428.png'
        ]
      }
    }
  },
  name:'v-red-rain',
  data() {
    let sunTimePop = this.sunTimePop
    return {
      liParams: [],
      timer: null,
      show: false,
      showNum: false,
      rotateList: [],
      hbTime: 0,
      ClickTime: 0,
      numImg: this.defaultNumImg[0],
      numImgType: this.defaultNumImg.length,
      sunTime: sunTimePop,
      config:{},
      timeA:0,
      value:false
    }
  },
  mounted() {
    this.$nextTick(()=>{
      console.log('开始倒计时')
      this.set_setTimeout();
    })
  },
  watch: {
    reward(val){
      this.value = true
    },
    sunTime(val) {
      if (val == 0) {
        this.search()
        this.set_setInterval && clearInterval(this.set_setInterval)
        clearTimeout(this.timer)
      }
    },
    numImgType(val) {
      console.log(this.defaultNumImg.length - val)
      if(val>0){
        this.numImg = this.defaultNumImg[this.defaultNumImg.length - val]
      }else{
        this.show = true;
        this.sunTime = this.sunTimePop;
        this.numImg = '';
        this.startRedPacket();
        this.set_setInterval = setInterval(() => {
          this.sunTime--;
        }, 1000)
      }
    }
  },
  methods: {
    Close(){
      this.$emit('input',false)
      this.$emit('Close')
      this.value = false
    },
    Submit() {
      this.$emit('Submit')
    },
    search(){
      setTimeout(()=>{
        let node = document.querySelector('#red_packet')
        if(node.childNodes.length  > 0){
          this.search()
        }else{
          this.redEnvelopeSettlement()
        }
      },1000)
    },
    redEnvelopeSettlement() {
      console.log('redEnvelopeSettlement',this.ClickTime)
      this.$emit('Ended',this.ClickTime)
    },
    set_setTimeout() {
      setTimeout(() => {
        this.numImgType--;
        if (this.numImgType > 0) {
          this.set_setTimeout()
        }
      }, 1000)
    },
    open(e) {
      if (+new Date() - this.timeA > 500) {
        this.timeA = +new Date()
        e.target.style.opacity = 0
        this.ClickTime++;
        this.rotateList.length++;
        var music = document.getElementById("bgMusic");
        music.volume = 0.05;
        if (music.ended || music.currentTime == 0) {
          music.play();
        }
      }
    },
    startRedPacket() {
      let win = document.documentElement.clientWidth || document.body.clientWidth
      let left = parseInt(Math.random() * (win - 50) + 0);
      let rotate = (parseInt(Math.random() * (45 - (-45)) - 45)) + "deg"; // 旋转角度
      let scales = (Math.random() * (9 - 8 + 1) + 7) * this.scales; // 图片尺寸
      let durTime = (Math.random() * (2.5 - this.durTime + 1) + this.durTime) + 's'; // 时间  1.2和1.2这个数值保持一样
      let val = this.hbTime % this.RedStyle.length
      this.liParams.push({
        left: left + 'px',
        cls: 'move_1',
        transforms: 'rotate(' + rotate + ') scale(' + scales + ')',
        durTime: durTime,
        hb: this.RedStyle[val]
      })
      this.timer = setTimeout(() => {
        this.hbTime++
        this.startRedPacket()
      }, 500)
    },
    removeDom(e) {
      let target = e.currentTarget;
      document.querySelector('#red_packet').removeChild(target)
    },
    removeDom2(e) {
      let target = e.currentTarget;
      document.querySelector('.header .i-1').removeChild(target)
    }
  },
  beforeDestroy() {
    this.liParams = null
  },
  components: {
    vRotate
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.adv_i {
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.1;
}

#adv {
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    width: 300px;
    height: 380px;
  }

  #close {
    .icon {
      font-size: 28px;
    }
  }

  a.link {
    position: absolute;
    right: 34px;
    bottom: 132px;
    font-weight: 700;
    color: #f56825;
    font-size: 10px;
    display: inline-block;
    width: 60px;
    text-align: center;

    strong {
      font-size: 22px;
    }
  }

  a.btn {
    position: absolute;
    bottom: 57px;
    left: 50%;
    transform: translateX(-48%);
    text-align: center;
    width: 220px;
    height: 38px;
    line-height: 36px;
    font-size: 18px;
    font-weight: 400;
    background: linear-gradient(0deg, rgba(202, 35, 22, 1), rgba(255, 121, 40, 1));
    box-shadow: 1px 5px 0px 0px rgba(255, 113, 35, 0.65);
    border-radius: 23px;
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
    text-shadow: -1px 2px 0px rgba(191, 13, 0, 0.65);
    // background:linear-gradient(0deg,rgba(255,218,160,1) 0%, rgba(255,239,208,1) 100%);
    // -webkit-background-clip:text;
    // -webkit-text-fill-color:transparent;
    // background: url('https://kouhigh.kouhigh.top/upload/app/2019_10_28/0615d201910281651567724.png')no-repeat center/cover;
  }
  span.time{
    position: absolute;
    bottom: 22px;
    left: 152px;
    width: 20px;
    display: inline-block;
    text-align: center;
    color: #fff;
  }
}

.rotate_w {
  position: absolute;
  right: -30px;
  bottom: -20px;
  animation: aim_rotate_w 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 1 forwards;
}

@keyframes aim_rotate_w {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(0px);
  }

  100% {
    opacity: 1;
    transform: scale(0.4) translateY(-100px);
  }
}

.num {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  .a1 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .a2 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }

  p {
    text-align: center;
  }
}

li {
  list-style: none;
}

.ser_home {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  z-index: 1000;
  .header {
    position: fixed;
    top: 60px;
    left: 23px;
    z-index: 111;

    .i-1 {
      width: 102px;
      height: 40px;
    }

    .i-2 {
      width: 90px;
      height: 30px;
    }

    .i-1,
    .i-2 {
      position: relative;

      display: inline-block;

      i {
        position: absolute;
        bottom: 3px;
        right: 10px;
        font-size: 18px;
        font-style: initial;
        color: #fff;
        font-weight: bold;
      }
    }
  }
}

.red_packet {
  display: block;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;

  i {
    width: 60px;
    height: 80px;
    display: block;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

   li {
    position: absolute;
    top: -100px;
    z-index: 10;
    animation: all 3s linear;
    transition: all 3s linear;
    &.move_1 {
      -webkit-animation: aim_move 5s linear 1 forwards;
      animation: aim_move 5s linear 1 forwards;
    }
  }

  a {
    display: block;
  }
}

@keyframes aim_move {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(120vh);
    transform: translateY(120vh);
  }
}
</style>
<style>
body {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html {
  overflow: hidden;
}
</style>
