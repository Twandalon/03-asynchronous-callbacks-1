'use strict';

const reader = require('../lib/reader.js');

describe('reader', () => {
  test('invalid path should return an error', (done) => {
    reader([`${__dirname}/assets/stuff1.txt`,`${__dirname}/assets/stuff2.txt`,`${__dirname}/assets/stuff3.txt`], (err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeUndefined();
      done();
    });
  });
  test('a valid path should resolve a string', (done) => {
    reader([`${__dirname}/assets/uh.txt`,`${__dirname}/assets/um.txt`,`${__dirname}/assets/ye.txt`], (err, data) => {
      console.log('testdata: ', data);
      expect(err).toBeNull();
      expect(data).toEqual(['uhhhhh\n','ummmm\n','yeeee\n']);
      done();
    });
  });
});
