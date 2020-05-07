// Time and date through Moment.js
$(document).ready(function () {
    var currentDay = $("#day-of-week");
    var todaysDate = moment().format('dddd,MMMM Do YYYY');
    currentDay.text(todaysDate);
});
