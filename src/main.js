import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { tamagotchi } from './../src/tamagotchi.js';

let funLevelBar = tamagotchi.setFun() ;
let sleepLevelBar = tamagotchi.setSleep();
let foodLevelBar = tamagotchi.setHunger();

$(function(){
  funLevelBar = parseFloat($(".progress-bar").css("width")) + 1;
  sleepLevelBar = parseFloat($(".progress-bar").css("width")) + 1;
  foodLevelBar = parseFloat($(".progress-bar").css("width")) + 1;
  setInterval(function() {
    $("#fun-progress").text(tamagotchi.funLevel);
    $("#fun-progress").css("width", tamagotchi.funLevel);
    if (tamagotchi.funLevel <= 0)
    {
      $("#death").show();
      $("#game").hide();
    }
  },1000);

  setInterval(function() {
    $("#sleep-progress").text(tamagotchi.sleepLevel);
    $("#sleep-progress").css("width", tamagotchi.sleepLevel);
    if (tamagotchi.sleepLevel <= 0)
    {
      $("#death").show();
      $("#game").hide();
    }
  },850);

  setInterval(function() {
    $("#food-progress").text(tamagotchi.foodLevel);
    $("#food-progress").css("width", tamagotchi.foodLevel);
    if (tamagotchi.foodLevel <= 0)
    {
      $("#death").show();
      $("#game").hide();
    }
  },750);
});

$(document).ready(function() {
  var count = 0
  $('#play').click(function(){
    count++;
    tamagotchi.interact("play");
    $("#fun-progress").text(tamagotchi.funLevel);
    $("#score").html("Your score is: "+ count);
  });

  $('#sleep').click(function() {
    count++;
    tamagotchi.sleep("sleep");
    $("#sleep-progress").text(tamagotchi.sleepLevel);
    $("#score").html("Your score is: "+ count);

  });

  $('#feed').click(function(){
    count++;
    tamagotchi.feed("feed");
    $("#food-progress").text(tamagotchi.foodLevel);
    $("#score").html("Your score is: "+ count);

  });
});
