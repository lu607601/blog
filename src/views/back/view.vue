<template>
    <div class="viewpage">
        <div class="viewpage__title" v-html="title">
        </div>
        <div class="viewpage__data" v-html="data"></div>
        <div v-html="content" class="viewpage__content">
        </div>
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
    &__title {
        font-size: 20px;
        text-align: center;
    }
    &__data {
        font-size: 16px;
        text-align: right;
    }
    &__content {
        margin-top: 20px;
        margin-bottom: 20px;
        min-height: 600px;
    }
}
.buttons {
    padding-right: 20px;
    .right()
}

</style>
