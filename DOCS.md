## react

### 添加依赖
```bash
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
```

### 添加.babelrc配置
  ```js
  {
    "plugins": [
      "transform-runtime"
    ],
    "presets": [
      "env",
      "react"
    ]
  }
  ```