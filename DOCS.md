## ts添加

### 1 添加tsconfig.json
```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "sourceMap": true,
    "importHelpers": true
  },
  "exclude": [
    "node_modules"
  ]
}
```
### 2 添加ts-loader
  ```js
  {
    modules: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            'ts-loader'
          ]
        }
      ]
    }
  }
  ```