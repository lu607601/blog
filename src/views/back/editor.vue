<template>
    <div class="editor">
        <div class="editor__title" v-html="title">
        </div>
        <div class="editor__data" v-html="data"></div>
        <mavon-editor v-model="content" class="editor__content"/>
        <div class="buttons">
            <el-button @click="cancel" type="primary" size="small">取消</el-button>
            <el-button @click="confirm" type="primary"  size="small">确定</el-button>
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
        cancel () {

        },
        confirm () {

        }
    },
    mounted () {

    }
}

</script>
<style lang="less" scoped>
@import url('../../theme/admin.less');
.editor {
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
