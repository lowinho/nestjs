import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { CreateUserDTO } from '../create-users/create-user.dto';

@Injectable()
class SendMailProducerService {
    constructor(@InjectQueue('sendMail-queue') private queue: Queue) {}

    sendMail(createUserDTO: CreateUserDTO) {
        this.queue.add('sendMail-job', createUserDTO, {
            delay: 3000,
            // removeOnComplete: true,
            stackTraceLimit: 2,
        });
    }
}

export { SendMailProducerService };
