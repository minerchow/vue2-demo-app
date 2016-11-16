<template>
    <div>
        这是组件b
    </div>
</template>

<script>

    export default {
        name: 'componentB',
        created:function(){
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.fetchData()
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'fetchData'
        },
        methods:{
            //获取参数数据
            fetchData:function(){
                console.log(this.$route.params.id)
            }
        }
    };
</script>

<style>

</style>