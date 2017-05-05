import supertest from 'supertest';
// supertest.Test.prototype.end = Promise.promisify(supertest.Test.prototype.end);
global.supertest = supertest;
