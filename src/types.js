import schedule from "./schedule";

export const runner = [];
export const leadBOH = [];
export const bartender = [];
export const leadFOH = [];
export const cook = [];
export const standAtt = [];

schedule.map(emp => {
    if(emp.type === "runner"){
        runner.push(emp)
    } else if(emp.type === "bartender"){
        bartender.push(emp)
    } else if (emp.type === "leadBOH"){
        leadBOH.push(emp)
    } else if(emp.type === "cook"){
        cook.push(emp)
    } else if (emp.type === "leadFOH"){
        leadFOH.push(emp)
    } else if(emp.type === "standAtt"){
        standAtt.push(emp)
    }
});
