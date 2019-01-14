export class tamagotchi  {
  constructor (fun=100, sleep=100, food=100){
  this.funLevel = fun,
  this.sleepLevel = sleep,
  this.foodLevel = food,


  setHunger()
    const foodInterval = setInterval(() => {
      this.foodLevel--;
      if (this.foodLevel > 0) {
        clearInterval(foodInterval);
        return "Died from hunger!";
      }
    }, 65);


  setSleep()
    const sleepInterval = setInterval(() => {
      this.foodLevel--;
      if (this.sleepLevel >0) {
        clearInterval(sleepInterval);
        return "Died from lack of sleep!";
      }
    }, 65);


  setFun()
    const funInterval = setInterval(() => {
      this.foodLevel--;
      if (this.funLevel> 0) {
        clearInterval(funInterval);
        return "Died from boredness!";
      }
    }, 65);


  dyingPet()
    if (this.funLevel > 0) {
      return false;
    } else if(this.sleepLevel > 0) {
      return false;
    } else if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }

  interact(amount) {
    let that = this;
    return function(play) {
      that.funLevel += amount;
      return `The tamagotchi ate the ${play}! Food level goes up ${amount}!`;
    }
  },

};
};

tamagotchi.interact = tamagotchi.interact(7);
tamagotchi.sleep = tamagotchi.interact(7);
tamagotchi.feed = tamagotchi.interact(7);
tamagotchi.fun = tamagotchi.interact(7);
