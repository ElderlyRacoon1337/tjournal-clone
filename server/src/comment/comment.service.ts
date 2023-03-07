import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private repository: Repository<CommentEntity>,
  ) {}

  async create(userId: number, createCommentDto: CreateCommentDto) {
    const comment = await this.repository.save({
      text: createCommentDto.text,
      post: { id: createCommentDto.postId },
      user: { id: userId },
    });

    return this.repository.findOneBy({ id: comment.id });
  }

  async findAll(postId: string) {
    const qb = this.repository.createQueryBuilder('c');
    if (postId) {
      qb.where('c.postId = :postId', { postId });
    }
    const result = await qb
      .leftJoinAndSelect('c.post', 'post')
      .leftJoinAndSelect('c.user', 'user')
      .orderBy('createdatt', 'DESC')
      .getMany();

    if (!postId) {
      return qb.limit(10).orderBy('createdatt', 'DESC').getMany();
    }

    // this.repository.find({ relations: ['user'] })
    return result;
  }

  findOne(id: number) {
    return this.repository.findBy({ id });
  }

  async update(userId: number, id: number, updateCommentDto: UpdateCommentDto) {
    return this.repository.update(id, updateCommentDto);
  }

  remove(userId: number, id: number) {
    return this.repository.delete(id);
  }
}
