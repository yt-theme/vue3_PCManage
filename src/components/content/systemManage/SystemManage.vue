<template>
    <div class="systemManage_container">
        <!-- bar -->
        <div style="width:100%">
            <Nav
                :listArr="sidebarList"
                :mode="1"
                :theme="0"
                 ref="systemManage_nav"
                ></Nav>
        </div>
        <!-- content -->
        <div class="systemManage_content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Nav from '../../Public/nav/Nav'
export default {
    components: {
        Nav
    },
    data () {
        return {
            sidebarList: [
                { id: 1, text: '用户管理', route: '/home/systemManage/userManage' },
                { id: 2, text: '第二', route: '/home/systemManage' },
            ]
        }
    },
    mounted () {
        // 加载自动点击第一项
        this.$refs.systemManage_nav.selectItem(0)
    }
}
</script>

<style scoped>
.systemManage_container {
    /* padding: 0 0.3em; */
}
.systemManage_content {
    height: calc(100vh - 6.6em);
    padding: 0.3em;
}
</style>
