'use strict';

let count = 0;

module.exports = ({
    timeVisual = false
} = {}) => {
    count++;
    if (count > 10e6) {
        count = 0;
    }
    let rand = Math.random(Math.random()) + '';

    let time = timeVisual ? getTimeStr() : new Date().getTime();

    return `${time}-${count}-${rand}`;
};

let getTimeStr = () => {
    let date = new Date();
    return `${date.getFullYear()}_${date.getMonth()+1}_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}_${date.getMilliseconds()}`;
};
