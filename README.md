# RedRain

> A Vue.js project

## Build Setup

``` 

npm i yfzw-red-rain

//红包雨
import RedRain from 'yfzw-red-rain'
Vue.use(RedRain)

--------------------------------------

// 按需加载
import {RedRain,RedRotate} from 'yfzw-red-rain'
Vue.use(RedRain) //红包雨
Vue.use(RedRotate)  //银币旋转

--------------------------------------

# <v-red-rain 
    v-model="advShow" 
    @Submit="submit" 
    @Close="close" 
    @Ended="Ended"></v-red-rain>

# props

advShow      // 控制红包雨弹框
  type:Boolean,

sunTimePop   // 红包雨持续时间
  type:Number,
  default:30

durTime   // 红包雨下落速率
  type:Number,
  default:1.4

scales   // 红包雨大小比例
  type:Number,
  default:0.1
rotateBg   // 银币样式    [正，反]
  type:Array,
Bgcolor   // 红包雨背景灰度
  type:Number,
  default:0.2

reward   // 弹框中的金额
  type:String,

defaultNumImg    // 倒计时
  type:Array,
},
RedStyle   // 红包样式
  type:Array,

countStyle    // 计数样式 [计数红包，倒计时]
  type:Array,

# event
Submit  //去使用
Close //关闭弹框
Ended //红包雨结束，返回抢到数量


--------------------------------------


# <v-rotate 
  :rotateBg="rotateBg"
 ref="rotate"></v-rotate>

# props

rotateBg   // 银币样式    [正，反]
  type:Array,
```