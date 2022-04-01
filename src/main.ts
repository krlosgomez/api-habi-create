import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import config from './shared/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (config().isDev) {

    const document = SwaggerModule.createDocument(app, new DocumentBuilder()
      .setTitle('Habi API')
      .setDescription('My Habi API')
      .build());

    SwaggerModule.setup('docs', app, document);
    app.enableCors();
  }

  await app.listen(config().port);
}
bootstrap();
