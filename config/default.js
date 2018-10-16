const config = {
  // 启动端口
  port: 3000,
  // 数据库配置
  database: {
    DATABASE: 'nodesql',
    USERNAME: 'root',
    PASSWORD: '123456',
    PORT: '3306',
    HOST: 'localhost'
  }
}

// exports 暴露接口
module.exports = config