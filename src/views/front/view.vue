<template>
    <div class="viewpage">
        <Viewer />
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
</style>
