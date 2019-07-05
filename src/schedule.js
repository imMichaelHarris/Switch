import {weekOne} from './weekOne';
import {weekTwo} from './weekTwo';

const schedule = []

weekOne.map(emp => {
    weekTwo.map(empTwo => {
      if (empTwo.name === emp.name) {
        schedule.push({ ...emp, ...empTwo, value: emp.name, text: emp.name });
      }
    });
  });

  export default schedule;