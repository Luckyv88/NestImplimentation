import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TestApiMethodService {
  private student = [
    { id: 1, name: 'Ram', age: 18 },
    { id: 2, name: 'Ram', age: 18 },
    { id: 3, name: 'Ram', age: 18 },
  ];

  getAllStudent() {
    return this.student;
  }

  getStudentById(id: number) {
    const students = this.student.find((s) => s.id === id);
    if (!students) throw new NotFoundException('Student not found');
    return students;
  }

  insertStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };

    this.student.push(newStudent);
    return newStudent;
  }
}
