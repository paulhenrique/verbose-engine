import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: typeof User,
  ) {}

  create(user: CreateUserDto) {
    return this.usersRepository.create(user);
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  findOne(id: number) {
    return this.usersRepository.findByPk(id);
  }

  login(user: CreateUserDto) {
    return this.usersRepository.findOne({
      where: { name: user.name, password: user.password },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update({ ...updateUserDto }, { where: { id } });
  }

  remove(id: number) {
    return this.usersRepository.destroy({ where: { id } });
  }
}
