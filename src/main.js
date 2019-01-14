import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { tamagotchi } from './../src/tamagotchi.js';

let foodLevelBar = tamagotchi.setHunger();
let sleepLevelBar = tamagotchi.setSleep();
let funLevelBar = tamagotchi.setFun();

$(document).ready(function() {

  $('#play').click(function(){
    funLevelBar++;
    tamagotchi.interact("play");
    $("#fun-progress").text(tamagotchi.funLevel);
    $("#score").html("Your score is: "+ funLevelBar);
  });

  $('#feed').click(function(){
    foodLevelBar++;
    tamagotchi.feed("feed");
    $("#food-progress").text(tamagotchi.foodLevel);
    $("#score").html("Your score is: "+ foodLevelBar);

  });

  $('#sleep').click(function(){
    sleepLevelBar++;
    tamagotchi.feed("feed");
    $("#sleep-progress").text(tamagotchi.foodLevel);
    $("#score").html("Your score is: "+ sleepLevelBar);

  });
});
