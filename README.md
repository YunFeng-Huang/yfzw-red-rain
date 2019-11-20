# RedRain

> A Vue.js project

## Build Setup

``` 

npm i yfzw-red-rain

//红包雨
import yfzw from 'yfzw-red-rain'
Vue.use(yfzw)

// 按需加载
import {RedRain,RedRotate} from 'yfzw-red-rain'
Vue.use(RedRain) //红包雨
Vue.use(RedRotate)  //银币旋转

# <RedRain v-model="advShow" :sunTimePop="Time" @Use="Use" @Close="close" @Ended="Ended"></RedRain>

# props

advShow:{      // 控制弹框隐藏
  type:Boolean,
  required:false
},
sunTimePop:{ // 红包雨持续时间
  type:Number,
  default:30
},
durTime:{   // 红包雨下落速率
  type:Number,
  default:2
},
scales:{  // 红包雨大小比例
  type:Number,
  default:0.1
},
Bgcolor:{ // 红包雨背景灰度
  type:Number,
  default:0.2
}


# event
use  //去使用
close //关闭弹框
Ended //红包雨结束，返回抢到数量

```