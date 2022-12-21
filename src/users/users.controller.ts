import { Controller, Get, Post, Request, UnprocessableEntityException, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { Public } from 'src/commons/decorators/Public.decorator';
import { Roles } from 'src/commons/decorators/roles.decorator';
import { UsersService } from './users.service';
import * as EmailValidator from 'email-validator';

@Controller('users')
export class UsersController {

    constructor(
        private authService: AuthService,
        private usersService: UsersService
    ) { }


    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }


    @Roles('TEACHER', 'SUPER_TEACHER')
    @Post('/findAllUsers')
    async findAllUsers(@Request() req) {

        const findAllUsersArray = await this.usersService.findAll();
        return findAllUsersArray;
    }


    @Roles('SUPER_TEACHER')
    @Post('/findOneUserBy_id')
    async findOneUserBy_id(@Request() req) {

        const { stirng_id } = req.body;

        const result = await this.usersService.findUserBy_id(stirng_id);
        return result;

    }


    // @UseGuards(JwtAuthGuard)
    // @Post('/searchUsers')
    // async searchUsers(@Request() req) {

    //     const { stirng_id } = req.body;

    //     const result = await this.usersService.findUserBy_id(stirng_id);
    //     return result;

    // }


    @Roles(
        'SUPER_TEACHER',
        'TEACHER',
        'STUDENT',
        'TA',
    )
    @Post('/validateToken')
    async validateToken(@Request() req) {
        return {
            message: 'OK'
        };
    }



    @Public()
    @Post('/resetPassword')
    async resetPassword(@Request() req) {
        const username = req?.body?.username;
        if (!username) {
            throw new UnprocessableEntityException('User name is required');
        }

        if (!EmailValidator.validate(username)) {
            throw new UnprocessableEntityException('User name must be an email address');
        }
        return this.usersService.resetPassword(username);
    }


    @Public()
    @Post('/resetPasswordHandle')
    async resetPasswordHandle(@Request() req) {
        const resetPasswordUid = req?.body?.resetPasswordUid;
        const password = req?.body?.password;
        if (!resetPasswordUid || !password) {
            throw new UnprocessableEntityException('missing information');
        }

        return await this.usersService.resetPasswordHandle(resetPasswordUid, password);

        // if (!EmailValidator.validate(username)) {
        //     throw new UnprocessableEntityException('User name must be an email address');
        // }
        // return this.usersService.resetPassword(username);
    }



}
