module.exports = {
  // page: 'productTable',
  // title: 'IOP产品维表',
  // package: 'product',
  page: 'index',
  title: '知识链路图',
  package: 'dist',
  LOGIN_KEY: '0', // 0 => 关闭单点登录 1 => 开启单点登录
  utilsConfig: {
    console: true, // false => 关闭所有 被webpack 打包 console输出
    vconsole: false // true 引入 vconsole 出现绿标
  }
}