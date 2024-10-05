import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entity';
import { Repository } from 'typeorm';
import { UserData } from '../models/user.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userEntity:Repository<UserEntity>
    ){}

    registerUser(userData:UserData):Observable<UserEntity>
    {
        return from(this.userEntity.save(userData));
    }
}

