import { MailerService } from '@nestjs-modules/mailer';
import {
    OnQueueActive,
    OnQueueCompleted,
    OnQueueProgress,
    Process,
    Processor,
} from '@nestjs/bull';
import { Job } from 'bull';
import { CreateUserDTO } from 'src/create-users/create-user.dto';

@Processor('sendMail-queue')
class SendMailConsumer {
    constructor(private mailService: MailerService) {}

    @Process('sendMail-job')
    sendMailJob(job: Job<CreateUserDTO>) {
        const { data } = job;
        console.log(data);
        this.mailService.sendMail({
            to: data.email,
            from: 'César Lowe <cesar.lowe@teste.com.br>',
            subject: 'Seja bem vindo(a)',
            text: `Olá ${data.name}, seu cadastro foi realizado com sucesso!`,
        });
    }

    @OnQueueCompleted()
    onCompleted(job: Job) {
        console.log(`On Completed ${job.name}`);
    }

    @OnQueueProgress()
    onProgress(job: Job) {
        console.log(`On Progress ${job.name}`);
    }

    @OnQueueActive()
    onActive(job: Job) {
        console.log(`On Active ${job.name}`);
    }
}

export { SendMailConsumer };
