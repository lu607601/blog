***对应模块***
express: web 框架
express-session: session 中间件
connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用
connect-flash: 页面通知的中间件，基于 session 实现
ejs: 模板
express-formidable: 接收表单及文件上传的中间件
config-lite: 读取配置文件
marked: markdown 解析
moment: 时间格式化
mongolass: mongodb 驱动
objectid-to-timestamp: 根据 ObjectId 生成时间戳
sha1: sha1 加密，用于密码加密
winston: 日志
express-winston: express 的 winston 日志中间件

***功能设计***
***注册
注册页：GET /signup
注册（包含上传头像）：POST /signup
***登录
登录页：GET /signin
登录：POST /signin
登出：GET /signout
***查看文章
主页：GET /posts
个人主页：GET /posts?author=xxx
查看一篇文章（包含留言）：GET /posts/:postId
***发表文章
发表文章页：GET /posts/create
发表文章：POST /posts/create
***修改文章
修改文章页：GET /posts/:postId/edit
修改文章：POST /posts/:postId/edit
删除文章：GET /posts/:postId/remove
***留言
创建留言：POST /comments
删除留言：GET /comments/:commentId/remove

***TIPS***
1、中间件的加载顺序很重要。如上面设置静态文件目录的中间件应该放到 routes(app) 之前加载，这样静态文件的请求就不会落到业务逻辑的路由里；flash 中间件应该放到 session 中间件之后加载，因为 flash 是基于 session 实现的
