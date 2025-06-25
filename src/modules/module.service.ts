import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModuleEntity } from './module.entity';
import type { CreateModuleDto } from './create-module.dto';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(ModuleEntity)
    private readonly moduleRepository: Repository<ModuleEntity>,
  ) {}

  async listAll(): Promise<ModuleEntity[]> {
    return this.moduleRepository.find();
  }

  // async create(createPostDto: CreatePostsDto): Promise<Module> {
  //   const module = this.moduleRepository.create(createPostDto);
  //   return this.moduleRepository.save(module);
  // }

  async create(createModuleDto: CreateModuleDto): Promise<ModuleEntity> {
    const module = this.moduleRepository.create(createModuleDto);
    return this.moduleRepository.save(module);
  }

}
