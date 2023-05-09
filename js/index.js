// inputs
var date = document.getElementById('date');
var month = document.getElementById('month');
var year = document.getElementById('year');


// submit button
var btn = document.getElementById('btn');


// outputs placeholders
var dateRes = document.getElementById('days_results');
var monthRes = document.getElementById('months_results');
var yearRes = document.getElementById('years_results');


function submitForm(event) {
    event.preventDefault();

    // THIS IS OF STRING TYPE. WILLL GET MONTH IN NUM
    // var monthSlice = month.value.slice(5);

    // monthNum = parseInt(monthSlice)
    // console.log(typeof monthNum);



    var inputDate = date.value;
    var inputMonth = month.value - 1;
    var inputYear = year.value;


    // current date
    var currentDate = new Date();


}


// FUNCTION TO CHECK LEAP YEAR
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
