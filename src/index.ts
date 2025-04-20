
import express, { Request, Response } from 'express';
import next from 'next';
import cors from 'cors';
import morgan from 'morgan';
import apiRoutes from './api';

import dotenv from 'dotenv';
import { initTask } from './task';
dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// 端口配置
const PORT = process.env.PORT || 3000;

// 准备Next.js
app.prepare()
  .then(() => {
    const server = express();
    
    // 中间件
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(morgan('dev')); // 日志
    
    // API路由 - 所有/api开头的请求都会被导向我们的Express路由
    server.use('/api', apiRoutes);
    
    // 所有其他请求交给Next.js处理
    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });
    
    // 启动服务器
    server.listen(PORT, () => {
      console.log(`> Ready on http://localhost:${PORT}`);
    });
    
    initTask()
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

