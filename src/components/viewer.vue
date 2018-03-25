<template>
    <div class="viewer">
        <div class="viewer__title" v-html="title">
        </div>
        <div class="viewer__data" v-html="data"></div>
        <div v-html="content" class="viewer__content">
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            title: '这是标题',
            data: '这是日期',
            content: '这是文本编辑'
        }
    }
}
</script>
<style lang='less' scoped>
.viewer {
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
        min-height: 500px;
    }
}
</style>
