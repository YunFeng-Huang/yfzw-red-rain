import RedRain from "./src/main";

/* istanbul ignore next */
RedRain.install = function(Vue) {
  Vue.component(RedRain.name, RedRain);
};

export default RedRain;
