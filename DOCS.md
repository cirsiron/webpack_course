## 配置webpack解析ES6+/polyfill

### babel
  - 配置babelrc
    - transform-runtime
    作用在 将原本注入 JavaScript 文件里的辅助函数替换成 条导入语句：
    ```js
    var extent= require ("babel-runtime/helpers/_extent");
    ```
