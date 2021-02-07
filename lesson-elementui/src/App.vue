<template>
    <div id="app">

        <a @click="page">跳转</a>

        <a href="http://www.baidu.com" target="_blank">atarget点击</a>

        <a href="www.baidu.com" target="_blank">target点击</a>

        <p></p>
        <router-link to="path:'view/One.vue'">12</router-link>
        <p></p>
        <p></p>
        <router-link to="demo2">
            <button>点击跳转2</button>
        </router-link>
        <p>{{msg}}</p>
        <div>
            <el-row>
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info" size="medium">信息按钮</el-button>
                <el-button type="warning" size="small">警告按钮</el-button>
                <el-button type="danger" size="mini">危险按钮</el-button>
            </el-row>
        </div>
        <div>
            <el-switch
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
            </el-switch>
        </div>
        <div>
            <el-rate
                    v-model="num"
                    show-text>
            </el-rate>
        </div>
        <p></p>
        <div>
            <div class="block">
                <span class="demonstration">默认</span>
                <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        data: function f() {
            return {
                msg:"Hello",
                value:false,
                num: 0,
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    }
                },
                value1: '',
                value2: '',
            }
        },
        methods: {
            page () {
                window.open("www.baidu.com","_self");
            }
        }
    }

    document.title="MyPage";
</script>

<style scoped>

</style>