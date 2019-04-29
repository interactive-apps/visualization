import chai from 'chai';
import Vn from '../../dist/lib/visualization.min';

const expect = chai.expect;

describe('Given an instance of Selection', () => {
  let selectionInstance = new Vn.Selection();

  selectionInstance
    .setData('dx1')
    .setOrgUnit('ou1')
    .setPeriod('pe1');

  const selections = selectionInstance.selections;

  it('should return selection parameters', () => {
    expect(selections !== undefined).to.be.equal(true);
  });

  it('should return correct values for data selections', () => {
    expect(JSON.stringify(selections.dx)).to.be.equal(
      JSON.stringify({
        dimension: 'dx',
        items: [{ id: 'dx1' }]
      })
    );
  });

  it('should return correct values for orgUnit selections', () => {
    expect(JSON.stringify(selections.ou)).to.be.equal(
      JSON.stringify({
        dimension: 'ou',
        items: [{ id: 'ou1' }]
      })
    );
  });

  it('should return correct values for period selections', () => {
    expect(JSON.stringify(selections.pe)).to.be.equal(
      JSON.stringify({
        dimension: 'pe',
        items: [{ id: 'pe1' }]
      })
    );
  });
});
