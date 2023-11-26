import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentController } from "./student.controller";

import { StudentService } from "./student.service";
import { Student } from "./student.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      username:'postgres',
      password:'12345',
      port:5432,
      host:'localhost',
      database:'test_nest',
      synchronize:true,
      entities:[Student],
      logging: true
    }),
    TypeOrmModule.forFeature([Student])
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class studentModule {}

export { Student };