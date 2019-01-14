export let tamagotchi = {
  funLevel: 100,
  sleepLevel: 100,
  foodLevel: 100,


  setHunger: function() {
    const foodInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(foodInterval);
        return "Died from hunger!";
      }
    }, 65);
  },

  setSleep: function() {
    const sleepInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYoudiefromsleep() == true) {
        clearInterval(sleepInterval);
        return "Died from lack of sleep!";
      }
    }, 65);
  },

  setFun: function() {
    const funInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouCommitsuicide() == true) {
        clearInterval(funInterval);
        return "Died from boredness!";
      }
    }, 65);
  },

  dyingPet: function() {
    if (this.funLevel > 0) {
      return false;
    } else if(this.sleepLevel > 0) {
      return false;
    } else if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  interact: function(amount) {
    let that = this;
    return function(play) {
      that.funLevel += amount;
      return `The tamagotchi ate the ${play}! Food level goes up ${amount}!`;
    }
  },

};

tamagotchi.interact = tamagotchi.interact(7);
tamagotchi.sleep = tamagotchi.sleep(7);
tamagotchi.feed = tamagotchi.feed(7);
tamagotchi.fun = tamagotchi.fun(7);
