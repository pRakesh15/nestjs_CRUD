import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateDateColumn, UpdateResult } from 'typeorm';

@Controller('feed')
export class FeedController {
constructor(private feedService:FeedService){}
    @Post('/create')
    create(@Body() post:FeedPost):Observable<FeedPost> {
      return this.feedService.createPost(post)
    }

    @Get('/getAllPost')
    getPosts()
    {
        return this.feedService.getAllPost();
    }

    @Put('/updatePost/:id')
    updatePosts(
        @Param('id') id:number,
        @Body() updatepost:FeedPost
    ):Observable<UpdateResult>
    {
        return this.feedService.updatePost(id,updatepost)
    }

    @Delete("delete/:id")
    deletePost(
        @Param("id") id:number
    ):Observable<DeleteResult>
    {
        return this.feedService.deletePost(id)
    }
}
