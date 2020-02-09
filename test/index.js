import { equal } from 'assert';
import { getBlockLocation } from '../src/blocks.js';
import { map1 } from '../src/map1.js';


describe('Blocks', function() {
  it('should return the sprite name for something which does not have edges enabled', function() {
    const map = {
    key: map1.key,
    data: [
      ['blank','blank','blank'],
      ['blank','wall','blank'],
      ['blank','blank','blank']]
    }
    equal(getBlockLocation(map, 0,0), 'blank')
  });

  it('should return wall', function() {
    const map = {
    key: map1.key,
    data: [
      ['blank','blank','blank'],
      ['blank','wall','blank'],
      ['blank','blank','blank']]
    }
    equal(getBlockLocation(map, 1,1), 'wall')
  });

  it('should return four corners for 2x2 square', function() {
    const map = {
    key: map1.key,
    data: [
      ['wall','wall','blank'],
      ['wall','wall','blank'],
      ['blank','blank','blank']]
    }
    equal(getBlockLocation(map, 0,0), 'wall-top-left')
    equal(getBlockLocation(map, 0,1), 'wall-top-right')
    equal(getBlockLocation(map, 1,0), 'wall-bottom-left')
    equal(getBlockLocation(map, 1,1), 'wall-bottom-right')
  });

  it('should return four corners and four edges and one middle for 3x3 square', function() {
    const map = {
    key: map1.key,
    data: [
      ['wall','wall','wall'],
      ['wall','wall','wall'],
      ['wall','wall','wall']]
    }
    equal(getBlockLocation(map, 0,0), 'wall-top-left')
    equal(getBlockLocation(map, 0,1), 'wall-top-middle')
    equal(getBlockLocation(map, 0,2), 'wall-top-right')

    equal(getBlockLocation(map, 1,0), 'wall-middle-left')
    equal(getBlockLocation(map, 1,1), 'wall-middle-middle')
    equal(getBlockLocation(map, 1,2), 'wall-middle-right')

    equal(getBlockLocation(map, 2,0), 'wall-bottom-left')
    equal(getBlockLocation(map, 2,1), 'wall-bottom-middle')
    equal(getBlockLocation(map, 2,2), 'wall-bottom-right')
  });

  // it('should two caps and a top-bottom for a line', function() {
  //   const map = {
  //   key: map1.key,
  //   data: [
  //     ['blank','blank','blank'],
  //     ['wall','wall','wall'],
  //     ['blank','blank','blank']]
  //   }
  //   equal(getBlockLocation(map, 1,0), 'wall-top-left-bottom')
  //   equal(getBlockLocation(map, 1,1), 'wall-top-bottom')
  //   equal(getBlockLocation(map, 1,2), 'wall-top-right-bottom')
  // });
});