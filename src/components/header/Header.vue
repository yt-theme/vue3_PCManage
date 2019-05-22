<template>
    <div class="header_content">
        <div class="headerlogo">
            PC管理系统
        </div>
        <div class="header_center">
        </div>
        <div class="header_right">
            <div class="header_clock">
                {{clock}}
            </div>
            <div :class="[userMenu_show ? header_user_area_active : '', header_user_area]"
                @mouseenter="userMenu_sow()" @mouseleave="userMenu_clse()">
                <div class="header_user">
                    <nobr>{{userName}}</nobr>
                </div>
                <!-- 用户菜单按钮 -->
                <!-- <div class="header_menu_button">
                    <svg t="1558332467543" style="width: 14px;height: 14px; margin-left: 0.4em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1119" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M290.1 63.9H96.7c-16.6 0-30 13.4-30 30V290c0 16.6 13.4 30 30 30h193.4c16.6 0 30-13.4 30-30V93.9c0-16.6-13.5-30-30-30zM290.1 385.3H96.7c-16.6 0-30 13.4-30 30v196.1c0 16.6 13.4 30 30 30h193.4c16.6 0 30-13.4 30-30V415.3c0-16.6-13.5-30-30-30zM290.1 703.6H96.7c-16.6 0-30 13.4-30 30v196.1c0 16.6 13.4 30 30 30h193.4c16.6 0 30-13.4 30-30V733.6c0-16.5-13.5-30-30-30zM607 63.8H413.7c-16.6 0-30 13.4-30 30V290c0 16.6 13.4 30 30 30H607c16.6 0 30-13.4 30-30V93.8c0-16.5-13.4-30-30-30zM607 385.3H413.7c-16.6 0-30 13.4-30 30v196.1c0 16.6 13.4 30 30 30H607c16.6 0 30-13.4 30-30V415.3c0-16.6-13.4-30-30-30zM607 703.6H413.7c-16.6 0-30 13.4-30 30v196.1c0 16.6 13.4 30 30 30H607c16.6 0 30-13.4 30-30V733.6c0-16.5-13.4-30-30-30zM927.9 63.8H734.6c-16.6 0-30 13.4-30 30V290c0 16.6 13.4 30 30 30H928c16.6 0 30-13.4 30-30V93.8c-0.1-16.5-13.5-30-30.1-30zM927.9 385.3H734.6c-16.6 0-30 13.4-30 30v196.1c0 16.6 13.4 30 30 30H928c16.6 0 30-13.4 30-30V415.3c-0.1-16.6-13.5-30-30.1-30zM927.9 703.6H734.6c-16.6 0-30 13.4-30 30v196.1c0 16.6 13.4 30 30 30H928c16.6 0 30-13.4 30-30V733.6c-0.1-16.5-13.5-30-30.1-30z" p-id="1120" fill="#f2f3f4"></path></svg>
                </div> -->
                <!-- 用户信息 -->
                <div class="user_menu" v-show="userMenu_show">
                    <ul @click.stop="userMenu_clse()" @mouseleave.stop="userMenu_clse()">
                        <li @click="showUserDetail()">详细信息</li>
                        <li @click="changeUserPwd()">修改密码</li>
                        <li @click="logout()">退出</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // 用户菜单显示
            userMenu_show: false,
            // 菜单与显示时样式
            header_user_area_active: 'header_user_area_active',
            header_user_area: 'header_user_area',
            // 时钟
            clock: '',
            // 储存用户名
            userName: '黎要要'
        }
    },
    methods: {
        // 用户菜单显示
        userMenu_sow () {
            this.userMenu_show = true
        },
        // 用户菜单关闭
        userMenu_clse () {
            this.userMenu_show = false
        },
        // 用户详细信息
        showUserDetail () {
            alert(1)
        },
        // 修改密码
        changeUserPwd () {
            alert(2)
        },
        // 注销
        logout () {
            alert(3)
        },
        init_clock () {
            let date   = new Date()
            let year   = date.getFullYear()
            let month  = date.getMonth() + 1
            let dat    = date.getDate()
            let week   = date.getDay(); switch (String(week)) { case '0': week = '星期日'; break; case '1': week = '星期一'; break; case '2': week = '星期二'; break; case '3': week = '星期四'; break; case '4': week = '星期五'; break; case '5': week = '星期六'; break; default: week = ''; break }
            let hour   = date.getHours()
            let min    = date.getMinutes(); if (Number(min)<10) { min = '0' + min }
            let sec    = date.getSeconds(); if (Number(sec)<10) { sec = '0' + sec }
            this.clock = `${year}年${month}月${dat}日 ${week} ${hour}:${min}:${sec} `
        }
    },
    mounted () {
        setInterval(() => { this.init_clock() })
    }
}
</script>

<style scoped>
.header_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f2f3f4;
    /* background-color: #788194; */
    background-color: #44516d;
    line-height: 40px;
    padding: 0 0.5em;
}
.header_right, .header_user_area {
    display: flex;
    justify-content: center;
    align-items: center;
}
.header_user_area {
    width: 104px;
    padding: 0 1.5em;
    border-left: 3.3px solid #44516d;
    border-right: 3.3px solid #44516d;
}
.header_user_area_active {
    background-color: #64759b;
}
.header_clock {
    font-weight: bolder;
    padding: 0 12px;
}
.header_menu_button, .header_user, .header_user_area {
    cursor: pointer;
}
.user_menu {
    position: absolute;
    top: 40px;
    right: 7px;
    width: 104px;
    /* border: 3.3px solid #64759b; */
    border-left: 3.3px solid #44516d;
    border-right: 3.3px solid #44516d;
    border-top: 1.4px solid #44516d;
    z-index: 9999;
    background-color: #64759b;
    color: #f1f2f3;
    padding: 2px 0;
}
.user_menu ul {
    list-style: none;
}
.user_menu ul> li {
    line-height: 2;
    text-align: left;
    padding: 3px 11px;
}
.user_menu ul> li:hover {
    background-color: #f1f2f3;
    color: #64759b;
    cursor: pointer
}
</style>
