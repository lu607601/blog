<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {}

</script>
<style type="text/css">
* {
    box-sizing: border-box;
}
html {
    font-size: (100vw/7.5) !important;
}
html,
body {
    -webkit-tap-highlight-color: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: fantasy;
}
img {
    max-width: 100%;
}
</style>
