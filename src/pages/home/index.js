
import App from './app';
import Display from './display';

const A = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  // require.ensure(['./componentA.vue'], () => {
  //   resolve(require('./componentA.vue'))
  // })
  require.ensure([], () => resolve(require('./componentA.vue')), '/a')
}

const B = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  // require.ensure(['./componentB.vue'], () => {
  //   resolve(require('./componentB.vue'))
  // })
  require.ensure([], () => resolve(require('./componentB.vue')), '/b')
}



const router = new VueRouter({

  base: __dirname,
  routes: [
    { path: '/a',component:A},
    // Just use them normally in the route config
    { path: '/b/:id',name:'componentb',component:B}

  ]
})

new Vue({ // eslint-disable-line
  
  router,
  render: h => h(App)
}).$mount('#app')
