import RedRotate from "./src/main";

/* istanbul ignore next */
RedRotate.install = function(Vue) {
  Vue.component(RedRotate.name, RedRotate);
};

export default RedRotate;
