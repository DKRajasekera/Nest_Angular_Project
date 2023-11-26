import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';

import { StudentService } from './student.service';

 

@Controller('student')

export class StudentController {

  constructor(private readonly studentService: StudentService) {}

 

  @Post()
addStudent(
  @Body('first name') fName: string,
  @Body('last name') lName: string,
  @Body('date of birth') dob: string,
  @Body('address') address: string,
  @Body('number') number: number
): Promise<{ id: number }> {
  return this.studentService.addAStudent(fName, lName, dob, address, number);
}


    @Get()

    getAllStudents() {
      return this.studentService.getStudents();
    }

 

    @Get(':id')
    getStudent(@Param('id') stuID: number) {
      return this.studentService.findStudent(stuID);
    }

 

    @Patch(':id')

        @Patch(':id')

        updateStudent(
          @Param('id') stuId: number,
          @Body('first name') f_name: string,
          @Body('last name') l_name: string,
          @Body('date of birth') dob: string,
          @Body('address') address: string,
          @Body('number') number: number

        ): void {
          this.studentService.updateStudent(stuId, f_name, l_name, dob, address, number);
        }

 

        @Delete(':id')
        deleteStudent(@Param('id') stuId: number): void {
          this.studentService.deleteStudent(stuId);
          return null;

        }

      }