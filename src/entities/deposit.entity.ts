import { Entity, Column, ManyToOne, ObjectIdColumn } from "typeorm";
import { User } from "./users.entity";

@Entity()
export class Deposit {
  @ObjectIdColumn()
  id: string;

  @Column("float")
  value: number;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.deposits)
  user: User;
}
