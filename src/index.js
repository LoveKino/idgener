'use strict';

let count = 0;

module.exports = () => {
    count++;
    if (count > 10e6) {
        count = 0;
    }
    let rand = Math.random(Math.random()) + '';

    return new Date().getTime() + '-' + count + '-' + rand;
};
