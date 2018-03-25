<template>
    <div class="person">
        <div class="avatar">
            <img src="../assets/avatar.jpeg" alt="头像">
        </div>
        <div class="info">
            <div class="info__item">
                <i class="iconfont icon-nickname"></i>
                <span class="info__txt">CRYSTAL</span>
            </div>
            <div class="info__item">
                <i class="iconfont icon-mail"></i>
                <span class="info__txt">lu607601@gmail.com</span>
            </div>
            <div class="info__item">
                <i class="iconfont icon-github"></i>
                <span class="info__txt">https://github.com/lu607601/</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.avatar {
    margin: 0 auto;
    width: 7rem;
    height: 7rem;
    border-radius: 100%;
    overflow: hidden;
}
.info {
    margin-top: 2rem;
    &__item {
        display: flex;
        align-items: center;
        justify-content: centr;
        padding: .5rem .5rem;
        color: #fff;
    }
    &__txt {
        margin-left: .5rem;
        word-break: break-all;
    }
}

</style>
