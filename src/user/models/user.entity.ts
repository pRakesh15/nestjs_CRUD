import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user_data')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    @IsNotEmpty({ message: "user name required" })
    name: string;

    @Column()
    @IsNotEmpty({ message: "Email is required" })
    @IsEmail()
    email: string

    @Column()
    mobile:string

    @Column()
    prifilePic: string

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;
}
