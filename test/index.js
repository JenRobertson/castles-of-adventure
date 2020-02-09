import { equal } from 'assert';
import { getBlockSprite } from '../src/blocks.js';
import { map1 } from '../src/map1.js';


describe('getBlockSprite()', function() {
  it('should return the sprite name for something which does not have edges enabled', function() {
    const map = {
    key: map1.key,
    data: [
      ['blank','blank','blank'],
      ['blank','wall','blank'],
      ['blank','blank','blank']]
    }
    equal(getBlockSprite(map, 0,0), 'blank')
  });

  it('should return wall', function() {
    const map = {
    key: map1.key,
    data: [
      ['blank','blank','blank'],
      ['blank','wall','blank'],
      ['blank','blank','blank']]
    }
    equal(getBlockSprite(map, 1,1), 'wall-top-bottom-left-right')
  });

  it('should return four corners for 2x2 square', function() {
    const map = {
    key: map1.key,
    data: [
      ['wall','wall','blank'],
      ['wall','wall','blank'],
      ['blank','blank','blank']]
    }
    equal(getBlockSprite(map, 0,0), 'wall-top-left')
    equal(getBlockSprite(map, 0,1), 'wall-top-right')
    equal(getBlockSprite(map, 1,0), 'wall-bottom-left')
    equal(getBlockSprite(map, 1,1), 'wall-bottom-right')
  });

  it('should return four corners and four edges and one middle for 3x3 square', function() {
    const map = {
    key: map1.key,
    data: [
      ['wall','wall','wall'],
      ['wall','wall','wall'],
      ['wall','wall','wall']]
    }
    equal(getBlockSprite(map, 0,0), 'wall-top-left')
    equal(getBlockSprite(map, 0,1), 'wall-top')
    equal(getBlockSprite(map, 0,2), 'wall-top-right')

    equal(getBlockSprite(map, 1,0), 'wall-left')
    equal(getBlockSprite(map, 1,1), 'wall')
    equal(getBlockSprite(map, 1,2), 'wall-right')

    equal(getBlockSprite(map, 2,0), 'wall-bottom-left')
    equal(getBlockSprite(map, 2,1), 'wall-bottom')
    equal(getBlockSprite(map, 2,2), 'wall-bottom-right')
  });

  it('should return two caps and a top-bottom for a horizontal line', function() {
    const map = {
    key: map1.key,
    data: [
      ['blank','blank','blank'],
      ['wall','wall','wall'],
      ['blank','blank','blank']]
    }
    equal(getBlockSprite(map, 1,0), 'wall-top-bottom-left')
    equal(getBlockSprite(map, 1,1), 'wall-top-bottom')
    equal(getBlockSprite(map, 1,2), 'wall-top-bottom-right')
  });

  it('should return two caps and a left-right for a vertical line', function() {
    const map = {
    key: map1.key,
    data: [
      ['blank','wall','blank'],
      ['blank','wall','blank'],
      ['blank','wall','blank']]
    }
    equal(getBlockSprite(map, 0,1), 'wall-top-left-right')
    equal(getBlockSprite(map, 1,1), 'wall-left-right')
    equal(getBlockSprite(map, 2,1), 'wall-bottom-left-right')
  });
});