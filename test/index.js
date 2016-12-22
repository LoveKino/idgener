'use strict';

let idgener = require('..');

describe('index', () => {
    it('base', () => {
        let ret = idgener({
            timeVisual: true
        });
        console.log(ret);
    });
});
