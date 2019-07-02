import {weekOne} from './weekOne';
import {weekTwo} from './weekTwo';

export const schedule = () => {
    weekOne.map(empWeekOne => {
       weekTwo.map(empWeekTwo => {
            if(empWeekTwo.name === empWeekOne.name){
                return 'test'
            }
        }) 
    })
}

