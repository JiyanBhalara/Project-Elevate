import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const whitelist = [
    process.env.LOCAL_URL, 
    process.env.VITE_WEB_URL!,
    /\.vercel\.app$/
  ];

  app.use(
    cors({
      origin(origin, cb) {
        if (!origin) return cb(null, true); // Postman / server-to-server
        return whitelist.includes(origin)
          ? cb(null, true)
          : cb(new Error(`CORS: ${origin} not allowed`));
      },
      credentials: true,
      methods: ['GET', 'OPTIONS', 'POST'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    }),
  );

  await app.listen(4000);
}
bootstrap();
