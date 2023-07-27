//const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;

// Suits = ACE, DIAMOND, SPADE, HEART

describe('Suits', () => {
  describe('#array', () => {
    it('should contain four values', (done) => {
        expect(Suits.length).to.equal(4);

        done();
    });

     it('should contain "♠"', (done) => {
        let expectedSuits = '♠';
        expect(Suits).to.contain(expectedSuits);
        
        done();
     });

     it('should contain "♥"', (done) => {
        let expectedSuits = '♥';
        expect(Suits).to.contain(expectedSuits);

        done();
    });

     it('should contain "♣"', () => {
        let expectedSuits = '♣';
        expect(Suits).to.contain(expectedSuits);

      
     });

     it('should contain "♦"', () => {
        let expectedSuits = '♦';
        expect(Suits).to.contain(expectedSuits);

     });
  });
});

const Suits = ['♠','♥','♣','♦'];

//module.exports = Suits;