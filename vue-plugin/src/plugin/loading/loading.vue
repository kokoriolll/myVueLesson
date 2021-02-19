<template>
    <div class="container">
        <div class="loading"></div>
        <p class="title">正在加载</p>
    </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
    .container {
        width: 200px;
        height: 200px;
        background: rgba(0,0,0,0.2);
        border-radius: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -100px;
        margin-left: -100px;
    }
    .loading {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        border: 5px solid white;
        margin: 30px auto;
        border-left: #409eff 5px solid;
        animation: loading 2s infinite linear;
    }

    @keyframes loading {
        from{
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .title {
        text-align: center;
        color: white;
    }


</style>