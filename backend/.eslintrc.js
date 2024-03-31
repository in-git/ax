module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  "rules": {
    "@typescript-eslint/no-explicit-any": "0"
  },
  settings: {
    //解决路径引用ts文件报错的问题
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      },
      // 解决tsconfig下的path别名导致eslint插件无法解决的bug
      'typescript': {
        'alwaysTryTypes': true
      }
    }
  },
}
