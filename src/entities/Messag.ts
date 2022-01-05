import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Chat } from "./Chat";
import User from "./User.entity";


@Entity()
export class Message extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    text: string;

    @ManyToOne(() => Chat, chat => chat.messages)
    chat: Chat;

    @ManyToOne(() => User, user => user.messages)
    user: User;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt; string;


}