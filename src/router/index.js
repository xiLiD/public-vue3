import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function push(location) {
  return originalReplace.call(this, location).catch(err => err);
};
import routeDate from './routeDate'
export default new Router({
  mode: 'hash',
  routes: [routeDate]
});