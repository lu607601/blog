<template>
    <div class="article__item">
        <div class="article__top clearfix">
            <div class="article__title">
                这是标题
            </div>
            <div class="article__date">
                这是日期
            </div>
        </div>
        <div class="article__txt">
            这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文这是征文
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}

</script>
<style lang="less" scoped>
@import url('../theme/base.less');
@import url('../theme/front.less');
.article {
    &__item {
        margin-bottom: 2rem;
        padding: .5rem .5rem 1rem .5rem;
        border-bottom: 1px solid #ddd;
        border-radius: .5rem;
        &:hover {
            cursor: pointer;
            box-shadow: 2px 2px 12px 10px rgba(200, 200, 200, .2);
        }
    }
    &__top {
    }
    &__title {
        font-size: 1.2rem;
        color: @main-color;
    }
    &__date {
        float: right;
        font-size: .6rem;
        color: @sub-color;
    }
    &__txt {
        margin-top: .3rem;
        font-size: .8rem;
        color: @sub-color;
    }
}

</style>
