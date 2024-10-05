import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('feed_post')
export class FeedPostEntity{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  title:string;

  @Column()
  body:string;

  @Column({type:'timestamp',default:()=>"CURRENT_TIMESTAMP"})
  createdAt:Date;

}