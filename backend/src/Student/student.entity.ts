import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  FName: string;

  @Column({ type: 'varchar' })
  LName: string;

  @Column({ type: 'varchar' })
  DOB: string;

  @Column({ type: 'varchar' })
  Address: string;

  @Column({ type: 'int' })
  age: number;
}
