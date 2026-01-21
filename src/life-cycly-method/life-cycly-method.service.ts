import { Injectable } from '@nestjs/common';

@Injectable()
export class LifeCyclyMethodService {
  isConnected = false;
  onModuleInit() {
    this.isConnected = true;
    console.log('Dtabase is connected');
  }

  onApplicationShutdown(signal: string) {
    this.isConnected = false;
    console.log(`Databse is disconnecte due to ${signal}`);
  }
}
