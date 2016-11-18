var expect = require('chai').expect;

describe('checkForShip', function() {
  var checkForShip = require('../game_logic/ship_methods').checkForShip;
  //Report a miss
  it('should correctly report no ship at player\'s coordinate', function() {
    player = {
      ships: [
        {
          locations: [[0,0]]
        }
      ]
    };
    expect(checkForShip(player, [9,9])).to.be.false;
  });
  //Report a hit
  it('should correctly report ship at player\'s coordinate', function() {
    player = {
      ships: [
        {
          locations: [[0,0]]
        }
      ]
    };
    expect(checkForShip(player, [0,0])).to.be.true;
  });
  //Report on locations for 1 ship
  it('should handle multiple coordinates of a ship', function() {
    player = {
      ships: [
        {
          locations: [[0,0], [0,1]]
        }
      ]
    };
    expect(checkForShip(player, [9,9])).to.be.false;
    expect(checkForShip(player, [0,1])).to.be.true;
    expect(checkForShip(player, [0,0])).to.be.true;
  });
  //Report on multiple ships
  it('should handle multiple ships', function() {
    player = {
      ships: [
        {
          locations: [[0,0], [0,1]]
        },
        {
          locations: [[6,4], [7,4]]
        },
        {
          locations: [[5,8], [4,8]]
        }
      ]
    };
    expect(checkForShip(player, [9,9])).to.be.false;
    expect(checkForShip(player, [0,1])).to.be.true;
    expect(checkForShip(player, [0,0])).to.be.true;
    expect(checkForShip(player, [5,8])).to.be.true;
    expect(checkForShip(player, [6,8])).to.be.false;
    expect(checkForShip(player, [3,2])).to.be.false;
  });
});

describe('damageShip', function () {
  var damageShip = require('../game_logic/ship_methods').damageShip;

  it('should register damage on a given ship at a given location', function() {
    var ship = {
      location: [[0,0]],
      damage: []
    };
    damageShip(ship, [0,0]);

    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0,0]);
  });
});
