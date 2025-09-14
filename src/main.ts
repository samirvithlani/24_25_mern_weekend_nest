import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthGuard } from './auth/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
  //app.use(new LoggerMiddleware().use)
  app.useGlobalGuards(new AuthGuard())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
