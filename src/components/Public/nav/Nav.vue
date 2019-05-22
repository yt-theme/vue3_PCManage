<template>
    <!-- 导航组件 -->
    <!-- listArr = [
        {
            id
            text
            route
        }
    ] -->
    <div :class="[theme == 1 ? theme1Style : theme0Style, nav_content]">
        <ul :class="[mode == 1 ? mode1Style : mode0Style, nav_ul]">
            <li :class="[currentClickRouteItem == i.route ? nav_active : '' ,nav_li]" v-for="i in listArr" @click="goRoute(i.route)">{{i.text}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        // 数据
        listArr: Array,
        // 模式
        mode: Number, // 0 默认侧边栏样式 1 头部切换标签样式
        // 主题
        theme: Number, // 0 默认暗背景 1 亮背景
    },
    data () {
        return {
            // 储存样式值
            nav_content: 'nav_content',
            nav_ul: 'nav_ul',
            nav_li: 'nav_li',
            // 活动样式
            nav_active: 'nav_active',

            // mode=0 的样式
            mode0Style: 'nav_ul_mode0',
            // mode=1 的样式
            mode1Style: 'nav_ul_mode1',
            // theme=0 的样式
            theme0Style: 'nav_bgc_theme0',
            // theme=1 的样式
            theme1Style: 'nav_bgc_theme1',

            // 当前已选择路由 用于自动选中 list 某项
            currentClickRouteItem: null
        }
    },
    methods: {
        // 父组件调用 实现自动点击项
        selectItem (index) {
            this.goRoute(this.listArr[index].route)
        },
        goRoute (r) {
            // 当前已选择路由
            this.currentClickRouteItem = r
            console.log('r', r)
            this.$router.replace(r)
        }
    },
    mounted () {

    }
}
</script>

<style scoped>
.nav_content, .nav_bgc_theme0 {
    width: 100%;
    height: 100%;
    background-color: #44516d;
}
.nav_bgc_theme1 {
    color: #727988;
    background-color: #9ba7b8;
}
.nav_content> ul {
    list-style: none;
}
.nav_content> ul> li {
    color: #fff;
    font-size: 14px;
    padding: 0.79em 1.4em;
    cursor: pointer;
}
.nav_content> ul> li:hover {
    background-color: #838ea5;
}

/* mode=0的样式 */
.nav_ul_mode0 {
    display: block;
}

/* mode=1的样式 */
.nav_ul_mode1 {
    display: flex;
}

/* 点击的项变色 */
.nav_active {
    background-color: #64759b;
}
</style>
