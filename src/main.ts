import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger(bootstrap.name);
  const PORT = process.env.PORT ?? 3000;

  // Configuración básica de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Posts')
    .setDescription('Documentación de la API de gestión de posts')
    .setVersion('1.0')
    .addTag('posts') // Puedes agregar más etiquetas para organizar tu API
    .build();

  // Crear el documento Swagger
  const document = SwaggerModule.createDocument(app, config);

  // Sirve Swagger en /api-docs
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(PORT, () => {
    logger.log(`Server is listening at port ${PORT}`);
    logger.log(`Current environment is: ${process.env.NODE_ENV}`);
  });
}

bootstrap();
