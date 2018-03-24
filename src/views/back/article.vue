<template>
    <div class="article">
        <el-table :data="articleData" border style="width: 100%">
            <el-table-column fixed prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="title" label="标题">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="130">
                <template slot-scope="scope">
                    <el-button @click="handleView(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" @click="handleEdit(scope.row)" size="small">编辑</el-button>
                    <el-button type="text" @click="handleDel(scope.row)" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            articleData: [{
                id: 1,
                date: '2016-05-03',
                title: '这是文章标题',
            }, {
                id: 2,
                date: '2016-05-02',
                title: '这是文章标题',
            }, {
                id: 3,
                date: '2016-05-04',
                title: '这是文章标题',
            }, {
                id: 4,
                date: '2016-05-01',
                title: '这是文章标题',
            }]
        }
    },
    methods: {
        handleView(row) {
            this.$router.push('/admin/view/' + row.id)
        },
        handleEdit(row) {
            this.$router.push('/admin/editor/' + row.id)
        },
        handleDel(row) {
            this.$confirm('确定删除该文章？', '', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    }
}

</script>
<style lang="less" scoped>


</style>
