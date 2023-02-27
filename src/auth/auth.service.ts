import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}
  
  create(createUserDto: CreateUserDto) {
    try {

    } catch (error) {
      console.log(error)
    }
  }

  
}
