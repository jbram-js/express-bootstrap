const request = require('supertest');
const app = require('../src/app');

it('GET / Should respond with welcome message!', done => {
  request(app)
    .get('/')
    .then(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Welcome to my jokes API!');
      done();
    });
});
