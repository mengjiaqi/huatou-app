import Vue from 'vue';
import App from './App';
import CONSTS from './helpers/macro';
import GoodsList from './components/goods-list';
import GoodsGrid from './components/goods-grid';
// import lazyLoader from './helpers/graceLazyload';
// Vue.prototype.lazyLoader = lazyLoader;

Vue.config.productionTip = true;
Vue.prototype.CONSTS = CONSTS;
Vue.prototype.request = options => {
	options.url = 'https://wx.lpp.catkid.cn:10443' + options.url;
	uni.request(options);
};

Vue.component('goods-list', GoodsList);
Vue.component('goods-grid', GoodsGrid);

App.mpType = 'app';

const app = new Vue({
    ...App
});
app.$mount();
