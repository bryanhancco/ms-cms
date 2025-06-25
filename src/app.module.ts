import { ModuleEntity } from './modules/module.entity'; // Renombramos aquí
import { Module } from '@nestjs/common'; // Esta es la clase de NestJS
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Posts } from './posts/post.entity'; // Asegúrate de tener tu entidad
import { PostsService } from './posts/post.service';
import { PostController } from './posts/post.controller';
import { User } from './entities/user.entity';
import { ModuleController } from './modules/module.controller';
import { ModuleService } from './modules/module.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'myuser', // Cambia estos valores según tu configuración
      password: 'mypass',
      database: 'project',
      entities: [ModuleEntity, User, Posts], // Usamos ModuleEntity aquí
      synchronize: false, // Solo para desarrollo, en producción no se recomienda
    }),
    TypeOrmModule.forFeature([ModuleEntity, User, Posts]), // También usamos ModuleEntity aquí
  ],
  controllers: [AppController, PostController, ModuleController],
  providers: [AppService, PostsService, ModuleService],
})
export class AppModule {}
