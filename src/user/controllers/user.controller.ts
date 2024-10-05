import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserData } from '../models/user.interface';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Post('/createUser')
    registerUser(@Body() user:UserData):Observable<UserData>
    {
        return this.userService.registerUser(user)
    }
}
