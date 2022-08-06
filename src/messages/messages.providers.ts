import { Message } from './entities/message.entity';

export const messagesProviders = [
  {
    provide: 'MESSAGE_REPOSITORY',
    useValue: Message,
  },
];
