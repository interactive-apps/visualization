import chai from 'chai';
import { Vn } from '../dist/lib/visualization.min';

const expect = chai.expect;

Vn.init({
  baseUrl: 'https://play.dhis2.org/2.29/api/',
  username: 'admin',
  password: 'district'
});

describe('Given an initial instance', () => {
  const instance = new Vn.Instance();

  it('Check if instance is ready', () => {
    expect(instance.instance !== undefined).to.be.equal(true);
  });

  it('Check if instanse configuration is set', () => {
    expect(instance.config !== undefined).to.be.equal(true);
  });
});
