import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { SearchPostDto } from './dto/search-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity) private repository: Repository<PostEntity>,
  ) {}

  create(createPostDto: CreatePostDto) {
    return this.repository.save(createPostDto);
  }

  findAll() {
    return this.repository.find();
  }

  async sort(sortBy: string) {
    switch (sortBy) {
      case 'popular':
        const qb = this.repository.createQueryBuilder();
        qb.orderBy('views', 'DESC');
        qb.limit(10);
        // return this.repository.find({ order: { views: 'DESC' } });
        const [items, total] = await qb.getManyAndCount();
        return { items, total };

      case 'new':
      default:
        return this.repository.find({ order: { createdAt: 'DESC' } });
    }
  }

  async search(searchPostDto: SearchPostDto) {
    const qb = this.repository.createQueryBuilder('p');
    qb.limit(searchPostDto.limit || 0);
    qb.take(searchPostDto.take || 10);
    if (searchPostDto.views) {
      qb.orderBy('views', searchPostDto.views);
    }
    if (searchPostDto.title) {
      qb.andWhere(`p.title ILIKE :title`);
    }
    if (searchPostDto.body) {
      qb.andWhere(`p.body ILIKE :body`);
    }
    if (searchPostDto.tag) {
      qb.andWhere(`p.tags ILIKE :tag`);
    }

    qb.setParameters({
      title: `%${searchPostDto.title}%`,
      body: `%${searchPostDto.body}%`,
      tag: `%${searchPostDto.tag}%`,
    });

    const [items, total] = await qb.getManyAndCount();

    return { items, total };
  }

  async findOne(id: number) {
    const qb = this.repository.createQueryBuilder('posts');
    await qb
      .whereInIds(id)
      .update()
      .set({ views: () => 'views + 1' })
      .execute();

    const post = await this.repository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException('Not found');
    }
    // post.views++;
    // await this.repository.save(post);
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.repository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException('Not found');
    }
    await this.repository.update(id, updatePostDto);
    const updatedPost = await this.repository.findOneBy({ id });
    return updatedPost;
  }

  async remove(id: number) {
    const post = await this.repository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException('Not found');
    }
    return this.repository.delete(id);
  }
}
