import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  ObjectIdColumn,
} from "typeorm";
import { User } from "./users.entity";
import { Transfer } from "./transfers.entity";

@Entity()
export class Savings {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string | null;

  @Column({ type: "float", default: 0.0 })
  balance: number;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.savings)
  user: User;

  @OneToMany(() => Transfer, (transfers) => transfers.saving)
  transfers: Transfer[];
}
