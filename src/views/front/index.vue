<template>
    <div class="front">
        <div class="container clearfix">
            <div class="side">
                <Person />
            </div>
            <div class="main">
                <Nav />
                <router-view></router-view>
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
.front {
}
.container {
    width: 100%;
    max-width: 1000px;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
    box-shadow: 2px 2px 12px 10px rgba(108, 120, 209, .2);
}
.side {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 5rem;
    width: 14rem;
    height: 100%;
    background: #000;
}
.main {
    width: 100%;
    padding-left: 15rem;
    float: right;
}
</style>
