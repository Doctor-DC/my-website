export interface LinkType {
    name: string;
    logo?: string;
    desc?: string;
    href: string;
    target?: string;
}
export interface LinkCategory {
    name: string;
    links: LinkType[];
}

export const linksData: LinkCategory[] = [
    {
        name: '文档,博客,社区',
        links: [
            {
                name: '愧怍小站',
                desc: '在这里你能了解到各类实战开发的所遇到的问题，帮助你在学习的过程了解最新的技术栈',
                href: 'https://kuizuo.cn/',
                logo: 'https://kuizuo.cn/img/logo.webp',
            },
        ]
    }
]

export const linksData2: LinkCategory[] = [
    {
        name: '文档,博客,社区',
        links: [
            {
                name: '愧怍小站',
                desc: '在这里你能了解到各类实战开发的所遇到的问题，帮助你在学习的过程了解最新的技术栈',
                href: 'https://kuizuo.cn/',
                logo: 'https://kuizuo.cn/img/logo.webp',
            },
            {
                name: 'ES6+入门教程',
                desc: '阮一峰写的ES6+入门电子书',
                href: 'https://es6.ruanyifeng.com/',
                // logo: require('./images/links/20210421065131.png'),
            },
            {
                name: 'React ✍️🔥🔥🔥',
                desc: '最流行的前端渲染库',
                href: 'https://zh-hans.reactjs.org/',
                // logo: require('./images/links/20210421081928.jpeg'),
            },
            {
                name: 'go语言之旅中文版',
                desc: '最好的golang入门教程(需要科学上网)',
                href: 'https://tour.go-zh.org/welcome/1',
                // logo: require('./images/links/20210421153602.png'),
            },
            {
                name: 'Typescript中文文档',
                desc: '最新全译版TS中文文档',
                href: 'https://bosens-china.github.io/Typescript-manual/',
                // logo: require('./images/links/20210421064923.png'),
            },
            {
                name: 'Node.js入门指南',
                desc: '最好的Node.js中文入门教程',
                href: 'http://nodejs.cn/learn',
                // logo: require('./images/links/20210430002632.png'),
            },
            {
                name: 'Go语言设计与实现',
                desc: '一个非常好的go语言入门教材',
                href: 'https://draveness.me/golang/',
                // logo: require('./images/links/20210430012642.png'),
            },
            {
                name: 'MDN CSS3教程',
                desc: 'Mozilla编写的CSS3教程',
                href: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS',
                // logo: require('./images/links/20210430014355.png'),
            },
            {
                name: 'Docker-从入门到实践',
                desc: '最好的Docker与K8S入门电子书',
                href: 'https://yeasy.gitbook.io/docker_practice/',
                // logo: require('./images/links/20210430024643.png'),
            },
            {
                name: 'Typescript入门教程',
                desc: 'TS入门必备教材',
                href: 'https://ts.xcatliu.com/',
                // logo: require('./images/links/20210421070524.png'),
            },
            {
                name: '深入理解Typescript',
                desc: 'TS中文查询手册',
                href: 'https://jkchao.github.io/typescript-book-chinese/',
                // logo: require('./images/links/20210430001227.png'),
            },
            {
                name: 'Learnku',
                desc: '一个非常成熟的中文编程社区',
                href: 'https://learnku.com/',
                // logo: require('./images/links/20210430004137.png'),
            },
            {
                name: 'OS运维',
                desc: '一个很棒的Linux服务器学习博客',
                href: 'https://www.osyunwei.com/',
                // logo: require('./images/links/20210430004619.png'),
            },
            {
                name: 'CNode',
                desc: '最好的Node.js中文社区',
                href: 'https://cnodejs.org/',
                // logo: require('./images/links/20210430005112.png'),
            },
            {
                name: 'k8s中文社区',
                desc: '学习K8S必上的中文社区',
                href: 'https://www.kubernetes.org.cn/',
                // logo: require('./images/links/20210430012139.png'),
            },
            {
                name: 'go语言中文社区',
                desc: '',
                href: 'https://studygolang.com/',
                // logo: require('./images/links/20210430012642.png'),
            },
        ],
    },
    {
        name: 'TS通用库',
        links: [
            {
                name: 'rxjs ✍️🔥🔥',
                desc: '非常好用的数据流操作类库',
                href: 'https://cn.rx.js.org/',
                // logo: require('./images/links/20210421135506.png'),
            },
            {
                name: 'graphql ✍️🔥',
                desc: '使用特殊的语法替代restful写接口',
                href: 'https://graphql.cn/',
                // logo: require('./images/links/20210421140520.png'),
            },
            {
                name: 'appollo graphql 🔥',
                desc: '最流行的graphql sdk',
                href: 'https://www.apollographql.com/',
                // logo: require('./images/links/20210421140814.png'),
            },
            {
                name: 'socket.io 🔥',
                desc: '最好的websockets通信库',
                href: 'https://socket.io/',
                // logo: require('./images/links/20210421141824.png'),
            },
            {
                name: 'lerna.js 🔥🔥',
                desc: '传统的monorepo脚手架',
                href: 'https://github.com/lerna/lerna',
                // logo: require('./images/links/20210421150751.png'),
            },
            {
                name: 'dayjs 🇨🇳✍️🔥🔥🔥',
                desc: '最好用的node时间库',
                href: 'https://dayjs.gitee.io/zh-CN',
                // logo: require('./images/links/20210421135033.png'),
            },
            {
                name: 'localforage ✍️🔥🔥🔥',
                desc: '最优秀的浏览器数据库管理类库',
                href: 'https://localforage.docschina.org/',
                // logo: require('./images/links/20210421133351.png'),
            },
            {
                name: 'Lodash ✍️🔥🔥🔥',
                desc: '写TSJS代码必备的工具库',
                href: 'https://lodash.net/docs/4.16.1.html',
                // logo: require('./images/links/20210421134858.png'),
            },
        ],
    },
    {
        name: '前端与React',
        links: [
            {
                name: 'React Router 🔥🔥🔥',
                desc: 'React路由实现模块',
                href: 'https://reactrouter.com/web/guides/quick-start',
                // logo: require('./images/links/20210421134753.png'),
            },
            {
                name: 'beautiful-react-hooks 🇨🇳🔥🔥🔥',
                desc: '最好用的第三方hooks工具集',
                href: 'https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.zh-CN.md',
                // logo: require('./images/links/20210421133736.png'),
            },
            {
                name: 'recoil ✍️',
                desc: 'FB出品的React状态管理库',
                href: 'https://recoil.js.cn/',
                // logo: require('./images/links/20210421111720.png'),
            },
            {
                name: 'Rematch 🔥🔥',
                desc: 'Redux的最佳实践封装库',
                href: 'https://rematchjs.org/',
                // logo: require('./images/links/20210421111628.png'),
            },
            {
                name: 'Mobx 🔥',
                desc: '另一种思想的react状态管理库',
                href: 'https://mobx.js.org/README.html',
                // logo: require('./images/links/20210421111945.png'),
            },
            {
                name: 'Tailwindcss ✍️🔥🔥',
                desc: '用纯类名的方式写css样式',
                href: 'https://www.tailwindcss.cn/',
                // logo: require('./images/links/20210421132658.png'),
            },
            {
                name: 'Ant Design 🇨🇳✍️🔥🔥🔥',
                desc: '蚂蚁开源的前端UI组件库',
                href: 'https://ant-design.gitee.io/index-cn',
                // logo: require('./images/links/20210421132912.png'),
            },
            {
                name: 'material-ui ✍️🔥🔥',
                desc: '更适合写前台页面的react组件库',
                href: 'https://material-ui.com/zh/',
                // logo: require('./images/links/20210421133029.png'),
            },
            {
                name: 'Nextjs ✍️🔥🔥',
                desc: '最好用的react ssr脚手架',
                href: 'https://www.nextjs.cn/',
                // logo: require('./images/links/20210421131718.png'),
            },
            {
                name: 'swr.js ✍️🔥🔥🔥',
                desc: '最完美的react数据请求库',
                href: 'https://swr.vercel.app/zh-CN',
                // logo: require('./images/links/20210421131919.png'),
            },
            {
                name: 'React I18next ✍️🔥🔥🔥',
                desc: '实现react应用国际化的组件库',
                href: 'https://react.i18next.com/',
                // logo: require('./images/links/20210421133203.png'),
            },
            {
                name: 'pro components 官网中文',
                desc: '基于antd的页面级react组件库',
                href: 'https://jkchao.github.io/typescript-book-chinese/',
                // logo: require('./images/links/20210430001227.png'),
            },
            {
                name: 'ahooks 🇨🇳🔥',
                desc: '蚂蚁出品的react hooks集合',
                href: 'https://ahooks.js.org/',
                // logo: require('./images/links/20210421133521.png'),
            },
            {
                name: 'umi-request 🇨🇳✍️🔥',
                desc: 'umi系列的请求库',
                href: 'https://github.com/umijs/umi-request',
                // logo: require('./images/links/20210421132251.png'),
            },
            {
                name: 'antd charts 🇨🇳🔥',
                desc: '一个蚂蚁出的数据可视化React组件库',
                href: 'https://charts.ant.design/',
                // logo: require('./images/links/20210421134058.png'),
            },
            {
                name: 'echarts 🇨🇳🔥🔥',
                desc: '百度开源的数据图表库',
                href: 'http://echarts.apache.org/zh/index.html',
                // logo: require('./images/links/20210421133900.png'),
            },
            {
                name: 'umijs 🇨🇳',
                desc: '蚂蚁出品的react脚手架',
                href: 'https://umijs.org/',
                // logo: require('./images/links/20210421132419.png'),
            },
            {
                name: 'Antd Pro5 🇨🇳',
                desc: '快速搭建中后台系统的React管理面板',
                href: 'https://beta-pro.ant.design/index-cn',
                // logo: require('./images/links/20210421132912.png'),
            },
        ],
    },
    {
        name: 'Node相关',
        links: [
            {
                name: 'yargs 🍰🔥🔥',
                desc: '最流行的Node CLI工具',
                href: 'http://yargs.js.org/docs/',
                // logo: require('./images/links/20210421135758.png'),
            },
            {
                name: 'class-validator 🍰✍️🔥',
                desc: '对TS对象进行数据验证的类库',
                href: 'https://github.com/typestack/class-validator',
                // logo: require('./images/links/20210421140222.png'),
            },
            {
                name: 'class-transformer 🍰✍️🔥',
                desc: '数据转义模块',
                href: 'https://github.com/typestack/class-transformer',
                // logo: require('./images/links/20210421140434.png'),
            },
            {
                name: 'fastify ✍️🔥🔥',
                desc: '最流行的Node CLI工具',
                href: 'https://www.fastify.cn/',
                // logo: require('./images/links/20210421135418.png'),
            },
            {
                name: 'typeorm ✍️🔥🔥',
                desc: '最好的node数据库映射库',
                href: 'https://typeorm.biunav.com/zh',
                // logo: require('./images/links/20210421140644.png'),
            },
            {
                name: 'nestjs 🔥🔥🔥',
                desc: '最流行的node企业级开发框架',
                href: 'https://nestjs.com/',
                // logo: require('./images/links/20210421135204.png'),
            },
            {
                name: 'commander.js ✍️🔥',
                desc: '轻量级Node CLI工具',
                href: 'https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md',
                // logo: require('./images/links/20210421140049.png'),
            },
            {
                name: 'passport.js 🔥🔥🔥',
                desc: 'Node做用户验证最好的类库集',
                href: 'http://www.passportjs.org/',
                // logo: require('./images/links/20210421142114.png'),
            },
            {
                name: 'nodemailer 🔥🔥',
                desc: 'Node发送邮件的模块',
                href: 'https://nodemailer.com/',
                // logo: require('./images/links/20210421144000.png'),
            },
            {
                name: 'bullmq 🔥🔥',
                desc: 'node中结合redis写异步消息列队的库',
                href: 'https://docs.bullmq.io/',
                // logo: require('./images/links/20210421141704.png'),
            },
            {
                name: 'ws.js',
                desc: 'websockets即使通信类库,只支持ws协议',
                href: 'https://github.com/websockets/ws',
                // logo: require('./images/links/20210421142012.png'),
            },
            {
                name: 'email-templates.js 🔥',
                desc: '结合nodemailer定制邮件模板',
                href: 'https://email-templates.js.org/',
                // logo: require('./images/links/20210421144337.png'),
            },
            {
                name: '腾讯云SDK 🇨🇳🔥🔥',
                desc: '腾讯云node sdk',
                href: 'https://github.com/TencentCloud/tencentcloud-sdk-nodejs',
                // logo: require('./images/links/20210421144925.png'),
            },
            {
                name: 'marked.js',
                desc: 'TS/JS转义Markdown为HTML的类库',
                href: 'https://github.com/markedjs/marked',
                // logo: require('./images/links/20210421144538.png'),
            },
            {
                name: 'markdown-it 🔥',
                desc: '与Marked类似,用来转义Markdown的',
                href: 'https://markdown-it.github.io/',
                // logo: require('./images/links/20210421144720.png'),
            },
            {
                name: 'ioredis 🔥🔥',
                desc: 'node连接redis的模块',
                href: 'https://github.com/luin/ioredis',
                // logo: require('./images/links/20210421141344.png'),
            },
            {
                name: 'mongoosejs 🔥',
                desc: 'node操作mongodb的唯一类库',
                href: 'https://mongoosejs.com/',
                // logo: require('./images/links/20210421141243.png'),
            },
            {
                name: 'prisma 🔥🔥',
                desc: '一种新型node数据库操作模式',
                href: 'https://www.prisma.io/',
                // logo: require('./images/links/20210421141116.png'),
            },
            {
                name: 'casl.js 🔥',
                desc: 'Nestjs官方推荐的RBAC管理库',
                href: 'https://casl.js.org/',
                // logo: require('./images/links/20210421143636.png'),
            },
            {
                name: 'accessctrol.js 🍰🔥🔥',
                desc: '最流行的Node CLI工具',
                href: 'https://onury.io/accesscontrol',
                // logo: require('./images/links/20210421143917.png'),
            },
            {
                name: 'casbin 🔥',
                desc: '最流行的go rbac模块',
                href: 'https://casbin.org/',
                // logo: require('./images/links/20210422054226.png'),
            },
            {
                name: 'ory 🔥🔥',
                desc: 'go中最好的认证与安全模块',
                href: 'https://www.ory.sh/',
                // logo: require('./images/links/20210422054646.png'),
            },
            {
                name: 'pnpm ✍️🔥🔥🔥',
                desc: '最好的npm替代品',
                href: 'https://pnpm.io/zh',
                // logo: require('./images/links/20210421145702.png'),
            },
            {
                name: 'Create React App ✍️🔥🔥',
                desc: 'React官方脚手架',
                href: 'https://create-react-app.dev/',
                // logo: require('./images/links/20210421110043.png'),
            },
            {
                name: 'vitejs 🇨🇳🔥🔥🔥',
                desc: '基于esbuild+rollup的前端脚手架',
                href: 'https://cn.vitejs.dev/',
                // logo: require('./images/links/20210421071103.png'),
            },
            {
                name: 'esbuild 🔥',
                desc: 'go编写的极速TS模块打包工具',
                href: 'https://esbuild.github.io/',
                // logo: require('./images/links/20210421152215.png'),
            },
            {
                name: 'swc.js 🔥',
                desc: '使用rust编写的极速TS模块打包工具',
                href: 'https://swc.rs/',
                // logo: require('./images/links/20210421152334.png'),
            },

            {
                name: 'webpack ✍️🔥🔥',
                desc: '最流行的TS应用打包工具',
                href: 'https://www.webpackjs.com/',
                // logo: require('./images/links/20210421082137.jpg'),
            },
            {
                name: 'rollupjs ✍️🔥🔥',
                desc: 'TS类库打包工具',
                href: 'https://rollupjs.org/guide/zh',
                // logo: require('./images/links/20210421151152.png'),
            },
            {
                name: 'nx 🔥',
                desc: '好用不折腾的monorepo工具',
                href: 'https://nx.dev/',
                // logo: require('./images/links/20210421152646.png'),
            },
            {
                name: 'pkg 🔥🔥',
                desc: '像golang一样打包node应用为可执行文件',
                href: 'https://github.com/vercel/pkg',
                // logo: require('./images/links/20210422060802.png'),
            },
        ],
    },
];