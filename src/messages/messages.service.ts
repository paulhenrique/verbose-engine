import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';
@Injectable()
export class MessagesService {
  constructor(
    @Inject('MESSAGE_REPOSITORY') private messageRepository: typeof Message,
  ) {}

  create(createMessageDto: CreateMessageDto) {
    return this.messageRepository.create(createMessageDto);
  }

  findAll() {
    return this.messageRepository.findAll({
      order: [['id', 'DESC']],
      include: [
        {
          model: User,
          required: true,
          attributes: ['name'],
        },
      ],
    });
  }

  findOne(id: number) {
    return this.messageRepository.findByPk(id);
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return this.messageRepository.update(
      { ...updateMessageDto },
      { where: { id } },
    );
  }

  remove(id: number) {
    return this.messageRepository.destroy({ where: { id } });
  }
}
