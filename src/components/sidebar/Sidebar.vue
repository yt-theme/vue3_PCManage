<template>
    <div class="sidebar_content">
        <!-- 导航 -->
        <Nav
            :listArr="sidebarList"
            :mode="0"
            :theme="0"
             ref="sidebar_nav"
             class="sidebar_nav"></Nav>
    </div>
</template>

<script>
import Nav from '../Public/nav/Nav'
export default {
    components: {
        Nav
    },
    data () {
        return {
            sidebarList: [
                { id: 1, text: '系统管理', route: '/home/systemManage' },
                { id: 2, text: '第二', route: '/home' },
            ]
        }
    },
    mounted () {
        // 加载自动点击第一项
        this.$refs.sidebar_nav.selectItem(0)
    }
}
</script>

<style>
.sidebar_content {
}
.sidebar_nav {
    /* padding: 0.3em 0; */
}
</style>
