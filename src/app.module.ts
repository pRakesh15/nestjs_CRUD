import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from './feed/feed.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
     type:'postgres',
     host:process.env.DB_HOST,
     port:parseInt(<string>process.env.DB_PORT),
     username:process.env.DB_USERNAME,
     password:process.env.DB_PASSWORD,
     database:process.env.DB_NAME,
     autoLoadEntities:true,
     synchronize:true
    }),
    FeedModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
