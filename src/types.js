import schedule from "./schedule";

export const runners = [];
export const leadsBOH = [];
export const bartenders = [];
export const leadsFOH = [];
export const cooks = [];
export const standAtt = [];

schedule.map(emp => {
    if(emp.type === "runner"){
        runners.push(emp)
    } else if(emp.type === "bartender"){
        bartenders.push(emp)
    } else if (emp.type === "leadBOH"){
        leadsBOH.push(emp)
    } else if(emp.type === "cook"){
        cooks.push(emp)
    } else if (emp.type === "leadFOH"){
        leadsFOH.push(emp)
    } else {
        standAtt.push(emp)
    }
});
