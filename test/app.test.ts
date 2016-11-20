import * as chai from 'chai';
import app from '../src/app';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {

  it('should be json', () => {
    chai.request(app).get('/')
        .then(res => {
          expect(res.type).to.eql('application/json');
        });
  });

  it('should have a message prop', () => {
    chai.request(app).get('/')
        .then(res => {
          expect(res.body.message).to.eql('Hello World!');
        });
  });

});