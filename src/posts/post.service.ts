import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './post.entity';
import { CreatePostsDto } from './create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepository: Repository<Posts>,
  ) {}

  // Crear un nuevo post
  async create(createPostsDto: CreatePostsDto): Promise<Posts> {
    const post = this.postRepository.create(createPostsDto);
    return this.postRepository.save(post);
  }

  // Obtener un post por ID
  async findOne(id: number): Promise<Posts | null> {
    return this.postRepository.findOne({ where: { id } }) || null;
  }

  // Actualizar un post
  async update(id: number, updatePostsDto: CreatePostsDto): Promise<Posts | null> {
    await this.postRepository.update(id, updatePostsDto);
    return this.findOne(id);
  }

  // Eliminar un post
  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }

  // Listar todos los posts por módulo
  async findByModule(moduleId: number): Promise<Posts[]> {
    return this.postRepository.find({ where: { moduleId } });
  }
}
