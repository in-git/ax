import { Server, Server as SocketIOServer } from 'socket.io';

export const connectWs = (io: Server) => {
  
  io.on('connection', (socket) => {
    // 当有新的 Socket.IO 连接时执行的代码
    console.log('Socket.IO 连接成功');
    // 监听来自客户端的消息
    socket.on('message', (message) => {
      console.log(`接收到消息：${message}`);

      // 发送消息给所有连接的客户端
      io.emit('message', `服务器广播：${message}`);
    });
    // 监听 Socket.IO 连接关闭事件
    socket.on('disconnect', () => {
      console.log('Socket.IO 连接关闭');
    });
  });
}
