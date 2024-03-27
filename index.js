const demo = true;
const hello = 1;


Vue.use(Buefy)

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');

