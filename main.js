import Vue from 'vue';
import App from './App';
import CONSTS from './helpers/macro';
import GoodsList from './components/goods-list';
import GoodsGrid from './components/goods-grid';
// import lazyLoader from './helpers/graceLazyload';
// Vue.prototype.lazyLoader = lazyLoader;

Vue.config.productionTip = false;
Vue.prototype.CONSTS = CONSTS;
Vue.component('goods-list', GoodsList);
Vue.component('goods-grid', GoodsGrid);

App.mpType = 'app';

const app = new Vue({
    ...App
});
app.$mount();
