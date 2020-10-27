### 需要安装哪些依赖
 - webpack4
  - webpack
  - webpack-cli
  - webpack-dev-server
  - webpack-merge
  - html-webpack-plugin
  - 
### 分割配置文件
```js
webpack-merge
merge(common, {
  
})
```

### noParse/parser
  - 让 Webpack 忽略对部分没采用模块化的文件的递归解析和处理，这样做的好处是能提高构建性能
  - parser 属性可以更细粒度地配置哪些模块语法被解析、哪些不被解析。同 noParse 配置项的区别在于， parser 可以精到语法层面，而 noParse 只能控制哪些文件不被解析。
  ```js
  module: {
    rules : [
      {
        test: /\.js／ ， 
        use: [ 'babel-loader'], 
        parser: { 
          amd: false // 禁用 AMD
          commonjs : false , // 禁用 CommonJS
          system : false, // 禁用 SystemJS
          harmony : false // 禁 ES6 import/export 
          requireinclude: false, // 禁用 require .in cl ude
          requireEnsure: false // 禁用 require ens ur
          requireContext: false , // 禁 require.context
          browserify: false, // 禁 browserify
          requireJs : false, // 禁用 requirejs
        }
      }
    ]
  }
  ```

### path join与resolve的区别
  - join 拼接路径
  - resolve cd路径

### 热加载的配置/devServer本地服务器
```js
{
  devServer: {
    contentBase: "./dist",   //  本地服务器所加载文件的目录
    headers: { // 注入响应头
      'X-foo': 'bar'
    },
    port: "8088",  //  设置端口号为8088
    inline: true,  //  文件修改后实时刷新 则 ev Server 会在构建变化后的代码时通过代理客户端控制网页刷新。
    // inline: false, 则 devServer 将无法直接控制要开发的网页 这时它会通过iframe 的方式去运行要开发的网页。在构建完变化后的代码时，会通过刷新 iframe来实现实时预览，但这时我们需要去 http://localhost:8080/webpackdev-server／实时预览自己的网页。
    historyApiFallback: true, // 不跳转 单页应用
    historyApiFallback: { // 多页应用
      rewrites: [
        {
          from: /^\/user/,
          to: '/user.html'
        },
        // 未匹配到的返回主页
        {
          form: /./,
          to: '/index.html'
        }
      ]
    },
    cache: false, // 是否开启缓存模式提高构建性能
    profile: true, // 构建的性能信息 用于分析是什么原因导致构建性能不佳
    disableHostCheck: false, // 配置项用于配置是否关闭用于 DNS 重新绑定的 HTTP请求的 OST 检查。 DevServer 默认只接 来自本地的请求 关闭后可接收来自任意HOST的请求。它通常用于搭配－－ 0.0.0.0 host 使用 因为想让其 设备访问自己的本 服务，但访问时是直接通过 IP 地址访问而不是通过 HOST ，所 需要关闭 HOST 检查。
    https: true, // 启用https 也可以自己配置 自己的证书
    open: true, // 默认浏览器打开
    openPage: '/index', //打开指定页面
    watchOptions: { // 监听模式选择
      ignored: /node_modules/,
      agreegateTimeout: 300, // 监听变化多久后执行动作 默认300
    },
    hot: true     // 热加载 => 在不刷新整个页面的情况下通过用新模块替换老模块来做到实时预览
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
//  通过devServer启动的webpack会开启监听模式
//  修改index.html不会刷新页面
//  原因：Webpack 在启动时会以配置里的 entry 为入口去递归解析出 try 所依赖的文件，只有 entry 本身和依赖的文件才会被 Webpack 添加到监听列表里。而 index.html文件是脱离了 JavaScript 模块化系统的，所以 Webpack 不知道它的存在

// 注意，只有在通过 devSerer 启动 Webpack ，配置文件里 devServer 才会生效，因为这些参数所对应的功能 DevServer 供的 Webpack 本身并不认 devServer 配置项
```
### 代码分割

### dll打包

### css提取
mini-css-extract-plugin

### 打包代码的可视化

### webpack4与5的区别

### eslint配置

### precommit

### loader和plugin的区别
  - loader被用于转换某些类型的模块
    - 一组Loader的执行顺序默认是从右到左执行的，通过inforce选项可以将其中一个Loader的执行顺序放到最前或者最后
  - plugin用途更加广泛，作用与全声明周期范围

### 路径的区别
  - output.path
    - 配置输出文件存放在本地的目录，必须为绝对路径
  - output.publicPath
    - 配置发布到线上资源的 URL 前缀，为 string 类型。默认值是空字符串 ，即使用相对路径。
    ```js
      {
        filename: '[name]-[chunkhash:8] .js',
        publicPath:'https://cdn.example.com/assets/'
      }
      //  <script src= 'https:// cdn.example.com/assets/a_12345678.js'></script>
    ```

### 配置
  - Externals
    - 不使用webpack进行打包引入的模块
    ```js
    {
      extrtnals: {
        $: "jQuery"
      },
      resolveLoaders: { // 配置项常用于加载本地的 Loader
        // 在哪里寻找loader
        modules: ['node_modules'],
        extensions: ['js', 'json'], // 入口文件后缀
        mainFields: ['loader', 'main']
      }
    }
    ```

### webpack配置方式
  - 对象方式
    - 区分dev和prod
  - 函数方式 导出一个Function
    - 
    ```js
      module . exports= function (env = {}, argv) { 
        const plugins = [] ; 
        const isProduction ＝ env['production'];
        ／／ 在生成环境中才压缩
        if (isProduction) { 
          plugins .push(
            //压缩输出的 JavaScript 代码
            new UglifyJsPlugin()
          )
        }
        return {
          plugins: plugins, 
          ／／在生成环境中不输出 Source Map 
          devtool : isProduction ? undefined :’source -map ’
        }
      }
    ```
  - 导出Promise方式
    ```js
    module .exports= function (env = {} , argv) { 
      return new Promise((resolve , reject) => { 
        setTimeout (() => {
          resolve({
            // xxx
          })
        }, 1000)
      }
    ```