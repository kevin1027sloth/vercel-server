
import cron from 'node-cron';
import { testTask } from './testTask';

export const initTask = async () => {
    
    cron.schedule('*/1 * * * *', () => {
        console.log('execute test tasker:', new Date().toISOString());
        testTask();
      });

};