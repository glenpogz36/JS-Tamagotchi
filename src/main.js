import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { tamagotchi } from './../src/tamagotchi.js';
import pet from './img/tamagotchi.gif'
import play from './img/play.gif'
import rest from './img/sleep.gif'
import eat from './img/eat.gif'


let fun = funLevelBar;
let sleep = sleepLevelBar;
let food = foodLevelBar;


let funLevelBar = tamagotchi.setFun(fun) ;
let sleepLevelBar = tamagotchi.setSleep(sleep);
let foodLevelBar = tamagotchi.setHunger(food);

$(function(){
      $('img#tamagotchi').attr('src', pet);
  funLevelBar = parseFloat($(".progress-bar").css("width")) + 1;
  sleepLevelBar = parseFloat($(".progress-bar").css("width")) + 1;
  foodLevelBar = parseFloat($(".food-progress").css("width")) + 1;
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
      $('img#tamagotchi').attr('src', play);
    count++;
    tamagotchi.interact("play");
    $("#fun-progress").text(tamagotchi.funLevel);
    $("#score").html("Your score is: "+ count);
  });

  $('#sleep').click(function() {
    count++;
          $('img#tamagotchi').attr('src', rest);
    tamagotchi.sleep("sleep");
    $("#sleep-progress").text(tamagotchi.sleepLevel);
    $("#score").html("Your score is: "+ count);

  });

  $('#feed').click(function(){
    count++;
          $('img#tamagotchi').attr('src', eat);
    tamagotchi.feed("feed");
    $("#food-progress").text(tamagotchi.foodLevel);
    $("#score").html("Your score is: "+ count);

  });
});
