<template>
    <div id="appRoot">
        <h1 class="amazing">Welcome To Vue cli! {{msg}}</h1>
    </div>
</template>

<script>
    const x = 'x';
    export default {
        name: 'appRoot',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="less" scoped>
    h1.amazing{
        color: green;
        &:after{
            content: '';
            border: 3px solid red;
            width: 100px;
            height: 100px;
        }
    }
</style>