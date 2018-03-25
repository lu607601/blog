<template>
    <div class="nav">
        <router-link v-for="(item, index) in nav" :key="index" :to="item.path" v-html="item.label" class="nav__link"></router-link>
    </div>
</template>
<script>
export default {
    data () {
        return {
            nav: [{
                path: '/admin/article',
                label: '首页'
            },{
                path: '/admin/article',
                label: '文章'
            }]
        }
    }
}

</script>
<style lang="less" scoped>
@import url('../theme/base.less');
.nav {
    .gradient();
    margin-left: 5rem;
    padding: .5rem 0 .5rem 1.5rem;
    border-radius: 1rem;
    &__link {
        padding: 0 .5rem;
        font-weight: bold;
        color: #efefef;
        text-decoration: none;
        &:hover,&.router-link-active {
            color: #fff;
        }
    }
}

</style>
