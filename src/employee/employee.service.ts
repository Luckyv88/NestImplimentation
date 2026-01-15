import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  givePut() {
    return 'New Employee added';
  }
}
