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
    let month = completeWithZero(date.getMonth() + 1, 2);
    let dat = completeWithZero(date.getDate(), 2);
    let hour = completeWithZero(date.getHours(), 2);
    let minute = completeWithZero(date.getMinutes(), 2);
    let second = completeWithZero(date.getSeconds(), 2);
    let ms = completeWithZero(date.getMilliseconds(), 4);
    return `${date.getFullYear()}_${month}_${dat}_${hour}_${minute}_${second}_${ms}`;
};

let completeWithZero = (v, len) => {
    v = v + '';
    if (v.length < len) {
        v = repeatLetter('0', len - v.length) + v;
    }
    return v;
};

let repeatLetter = (letter, len) => {
    let str = '';
    for (let i = 0; i < len; i++) {
        str += letter;
    }
    return str;
};
