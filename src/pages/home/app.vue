<template>
  <div>
    <h1>首页</h1>
    <p>A vue project.</p>
	<Display></Display>
	<Count></Count>
    <router-link to="/a">/foo</router-link>
    <router-link :to="{name:'componentb', params: { id: 123 }}">/bar</router-link>
    <transition name="fade">
    <router-view :item="items"></router-view>
    </transition>
  </div>
</template>

<script>
  import Display from './display';
  import Count from './count';
  import store from '../../store/store';
 // import ComponentA from './componentA';
 // import ComponentB from './componentB';
  export default {
    name: 'app',
    store,
    data:function(){
      return {
        items:"props传递数据"
      }
    },
    mounted:function(){
      this.$http.post('Api/Car/GetBaners',{}).then(function(response){
                    // 响应成功回调
                    console.log(response)
                  }, function(response){
                    // 响应错误回调
                  });
    },
    components: {
    	Display,
    	Count,
  //  	ComponentA,
   // 	ComponentB
    },
    getData:function(){
      this.$http.get('/Api/Car/GetBanners',{}).then(function(response){
              // 响应成功回调
              console.log(response)
            }, function(response){
              // 响应错误回调
            });
    }
  };
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
  -webkit-transition:all 1s ease-in-out;
    opacity:0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    -webkit-transition:all 1s ease-in-out;
    opacity:0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>