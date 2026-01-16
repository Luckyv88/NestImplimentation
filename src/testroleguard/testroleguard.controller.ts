import { Controller, UseGuards, Get } from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.enums';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('testroleguard')
export class TestroleguardController {
  @Get('admin-data')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  getAdminDta() {
    return { message: `Only Admin Can Access` };
  }

  @Get('user-data')
  getUserData() {
    return { message: 'Anyone can access' };
  }
}
