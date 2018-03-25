<template>
    <div class="viewpage">
        <Viewer />
        <div class="buttons">
            <el-button @click="goback" type="primary" size="small">返回</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: '这是标题',
            data: '这是日期',
            content: '这是文本编辑'
        }
    },
    methods: {
        goback () {
            this.$router.go(-1)
        }
    },
    mounted () {
    }
}

</script>
<style lang="less" scoped>
@import url('../../theme/base.less');
@import url('../../theme/admin.less');
.viewpage {
    color: @txt-color;
}
.buttons {
    padding-right: 20px;
    .right()
}

</style>
