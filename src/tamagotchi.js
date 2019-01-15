export let tamagotchi = {
  funLevel: 100,
  sleepLevel: 100,
  foodLevel: 100,

  setFun: function() {
    const funInterval = setInterval(() => {
      this.funLevel--;
      if (this.didYouGetBored() == true) {
        clearInterval(funInterval);
      }
    }, 75);
  },
  setSleep: function() {
    const sleepInterval = setInterval(() => {
      this.sleepLevel--;
      if (this.didYouDiefromsleep() == true) {
        clearInterval(sleepInterval);
      }
    }, 100);
  },
  setHunger: function() {
    const foodInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouStarve() == true) {
        clearInterval(foodInterval);
      }
    }, 120);
  },
  dyingtamagotchi: function() {
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
      return (play, amount);
    }
  },
  sleep: function(amount) {
    let that = this;
    return function(sleep) {
      that.sleepLevel += amount;
      return (sleep, amount);
    }
  },
  feed: function(amount) {
    let that = this;
    return function(feed) {
      that.foodLevel += amount;
      return (feed, amount);
    }
  }
};

tamagotchi.interact = tamagotchi.interact(7);
tamagotchi.sleep = tamagotchi.sleep(7);
tamagotchi.feed = tamagotchi.feed(7);
