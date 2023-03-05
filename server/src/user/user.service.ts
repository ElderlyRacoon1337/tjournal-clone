import { SearchUserDto } from './dto/search-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private repository: Repository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.repository.save(createUserDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOneByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repository.delete({ id });
  }

  async search(dto: SearchUserDto) {
    const qb = this.repository.createQueryBuilder('u');
    if (dto.email) {
      qb.andWhere(`u.email ILIKE :email`);
    }
    if (dto.fullName) {
      qb.andWhere(`u.fullName ILIKE :fullName`);
    }

    qb.setParameters({
      email: `%${dto.email}%`,
      fullName: `%${dto.fullName}%`,
    });

    const [items, total] = await qb.getManyAndCount();

    return { items, total };
  }
}
