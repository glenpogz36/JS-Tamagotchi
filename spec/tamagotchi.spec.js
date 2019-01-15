import { tamagotchi } from '../src/tamagotchi.js';

describe('Tamagotchi', function() {
  let pet = tamagotchi;

  beforeEach(function() {
      jasmine.clock().install();
      pet.foodLevel = 10;
      pet.name = "Fuzzy";
      pet.setHunger();
    });

   afterEach(function() {
     jasmine.clock().uninstall();
   });

   it('should get very hungry if the food level drops below zero', function() {
       pet.foodLevel = 0;
       expect(pet.foodLevel).toEqual(true);
     });

     it('should get very hungry if 10 seconds pass without feeding', function() {
       jasmine.clock().tick(10001);
       expect(pet.foodLevel).toEqual(true);
     });

     it('should have a food level of ten if it is fed', function() {
       jasmine.clock().tick(9001);
       pet.feed();
       expect(pet.foodLevel).toEqual(10);
     });
     it('should return that the bear ate blueberries and the food level should go up 5', function() {
    expect(pet.foodLevel).toEqual(15);
  });
 });
