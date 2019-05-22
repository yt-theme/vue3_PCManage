<template>
    <div>
        <!-- 头部 -->
        <div class="Header_btn_area">
            <el-button type="success" size="mini" @click="add()">新增</el-button>
        </div>
        <!-- 表格 -->
        <el-table
            :data="tableData"
            :height="tableHeight_main"
            size="mini"
            border
            stripe
            style="width: 100%">
            <el-table-column align="center" prop="date" label="日期"></el-table-column>
            <el-table-column align="center" prop="name" label="姓名"></el-table-column>
            <el-table-column align="center" prop="province" label="省份"> </el-table-column>
            <el-table-column align="center" prop="city" label="市区"> </el-table-column>
            <el-table-column align="center" prop="address" label="地址"> </el-table-column>
            <el-table-column align="center" prop="zip" label="邮编"> </el-table-column>
            <el-table-column align="center" label="操作" width="140">
                <template slot-scope="scope">
                    <el-button @click="detail(scope.row)"  type="text" size="small">查看</el-button>
                    <el-button @click="edit(scope.row)"    type="text" size="small">编辑</el-button>
                    <el-button @click="deletes(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="Table_pagination">
            <el-pagination background layout="total, sizes, jumper, prev, pager, next" :total="table_total"></el-pagination>
        </div>

        <!-- 新增弹窗 -->
        <el-dialog
            :title="dialogTitle"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :visible.sync="dialogShow">
            afasfaf
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // 主表格高
            tableHeight_main: '',
            // 表格数据
            tableData: [
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
                {
                    date: '1111',
                    name: '1111',
                    province: '1111',
                    city: '1111',
                    address: '1111',
                    zip: '1111',
                    right: '1111',
                },
            ],
            // 表格总数
            table_total: 999,

            // 弹窗标题
            dialogTitle: '',
            // 弹窗显示
            dialogShow: false
        }
    },
    methods: {
        // 新增
        add () {
            this.dialogTitle = '新增'
            this.dialogShow = true
        },
        // 查看
        detail (row) {
            this.dialogTitle = '详情'
            this.dialogShow = true
        },
        // 编辑
        edit (row) {
            this.dialogTitle = '编辑'
            this.dialogShow = true
        },
        // 删除
        deletes (row) {
            // 打开对话框
            this.$confirm('是否删除此项目?', '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '操作成功!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消操作'
                })
            })
        }
    },
    mounted () {
        this.tableHeight_main = document.body.clientHeight - 163 
        window.onresize = () => { this.tableHeight_main = document.body.clientHeight - 163 }
    }
}
</script>

<style scoped>

</style>
