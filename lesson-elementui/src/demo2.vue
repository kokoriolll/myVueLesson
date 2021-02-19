<template>
    <div>
        <!--<p>demo2</p>
        <router-link to="/demo1">
            返回
        </router-link>-->
        <van-nav-bar
                title="demo2"
                left-text="返回"
                right-text="按钮"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />

        <van-card
                :num="num"
                price="2.00"
                desc="描述信息"
                :title="title"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />

        <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit" />


    </div>
</template>

<script>
    export default {
        name: "demo2",
        data: function () {
            return {
                num: 2,
                title: "iPad Pro",
                price: 3000
            }
        },
        methods: {
            onClickLeft() {
                this.$router.push({ path: '/demo1' })
            },
            onClickRight() {
                alert('按钮');
            },
            onSubmit() {

            }
        },
    }
</script>

<style scoped>

</style>