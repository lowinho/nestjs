import { Body, Controller, Post } from '@nestjs/common';
import { SendMailProducerService } from 'src/jobs/sendMail-producer-service';
import { CreateUserDTO } from './create-user.dto';

@Controller('create-users')
export class CreateUsersController {
  constructor(private sendEmailService: SendMailProducerService) {}

  @Post('/')
  createUser(@Body() createUser: CreateUserDTO) {
    this.sendEmailService.sendMail(createUser);
    return {
      message: 'success',
      data: createUser,
    };
  }
}
