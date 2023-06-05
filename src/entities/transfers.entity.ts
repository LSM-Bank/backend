import { Entity, Column, ManyToOne, ObjectIdColumn } from "typeorm";
import { User } from "./users.entity";
import { Savings } from "./savings.entity";

@Entity()
export class Transfer {
  @ObjectIdColumn()
  id: string;

  @Column("float")
  value: number;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column()
  received: User | Savings;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.transfers)
  user: User;

  @Column()
  savingId: string;

  @ManyToOne(() => Savings, (saving) => saving.transfers)
  saving: Savings;
}
