<template>
    <div class="admin">
        <div class="header">
            <div class="header__title">
                后台管理
            </div>
            <div class="login">
                登录|注册
            </div>
        </div>
        <div class="container clearfix">
            <div class="side">
                <div class="nav">
                    <router-link v-for="(item, index) in nav" :key="index" :to="item.path" v-html="item.label" class="nav__link"></router-link>
                </div>
            </div>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nav: [
                {
                    path: '/admin/article',
                    label: '文章管理'
                }
            ]
        }
    }
}

</script>
<style lang='less' scoped>
@import url('../../theme/admin.less');
.admin {}

.header {
    .center();
    position: relative;
    z-index: 1;
    width: 100%;
    height: 60px;
    font-size: 24px;
    background: @main-color;
    color: #fff;
}
.login {
    position: absolute;
    right: 20px;
    font-size: 14px;
}
.container {
    position: fixed;
    width: 100%;
    top: 60px;
    left: 0px;
    bottom: 0;
    background: #fff;
}

.side {
    z-index: 0;
    float: left;
    width: 12%;
    height: 100%;
    background: @sub-color;
}
.nav {
    &__link {
        display: block;
        width: 100%;
        padding: 10px 0;
        color: @txt-color;
        font-size: 14px;
        text-align: center;
        text-decoration: none;
        &:hover,&.router-link-active {
            color: #20a0ff;
        }
    }
}
.main {
    float: right;
    width: 85%;
    margin-top: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    color: #fff;
}

</style>
