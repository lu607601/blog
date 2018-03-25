import Vue from 'vue'
import Router from 'vue-router'
import { Loading } from 'element-ui'
Vue.use(Router)

// 前台
import Front from '../views/front/index'
import view from '../views/front/view'
import Article from '../views/front/view'

// 后台
import Admin from '../views/back/index'
import ArticleBack from '../views/back/article'
import Editor from '../views/back/editor'
import ViewBack from '../views/back/view'


const router = new Router({
    routes: [{
        path: '/',
        redirect: '/front'
    }, {
        path: '/front',
        component: Front,
        label: '前台首页',
        redirect: '/front/article',
        children: [
            {path: 'article', component: Article, label: '默认首页文章页'},
            {path: 'view/:id', component: view, label: '查看文章页'}
        ]
    }, {
        path: '/admin',
        component: Admin,
        label: '后台首页',
        redirect: '/admin/article',
        children: [
            {path: 'article', component: ArticleBack, label: '默认首页文章页'},
            {path: 'editor/:id', component: Editor, label: '编辑文章页'},
            {path: 'view/:id', component: ViewBack, label: '查看文章'}
        ]
    }]
})
// 页面切换loading
var loadingInstance
router.beforeEach(function (to, from, next) {
    loadingInstance = Loading.service({ target: '.main' });
    next()
})
router.afterEach(function (to, from, next) {
    loadingInstance.close()
})
export default router
