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

  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.student.findIndex((s) => s.id === id);

    if (index === -1) throw new NotFoundException('Student Not Exist');
    this.student[index] = { id, ...data };
    return this.student[index];
  }

  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const editStudent = this.getStudentById(id);
    Object.assign(editStudent, data);
    return editStudent;
  }
}
