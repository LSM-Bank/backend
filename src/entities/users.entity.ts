import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Savings } from "./savings.entity";
import { Transfer } from "./transfers.entity";
import { getRounds, hashSync } from "bcryptjs";
import { Deposit } from "./deposit.entity";

@Entity()
export class User {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: "float", default: 0.0 })
  balance: number;

  @OneToMany(() => Savings, (savings) => savings.user)
  savings: Savings[];

  @OneToMany(() => Transfer, (transfers) => transfers.user)
  transfers: Transfer[];

  @OneToMany(() => Deposit, (deposits) => deposits.user)
  deposits: Deposit[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
