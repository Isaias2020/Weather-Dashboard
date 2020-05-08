// Time and date through Moment.js for current day
$(document).ready(function () {
    var currentDay = $("#day-of-week");
    var todaysDate = moment().format('dddd,MMMM Do YYYY');
    currentDay.text(todaysDate);
});

var APIKey = "&appid=b397225e3e6e7043cc26284176c744bd";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var citiesArray = [];